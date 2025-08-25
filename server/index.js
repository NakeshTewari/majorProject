import express from "express";
import fs from "fs";
import multer from "multer";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import { spawn } from "child_process";
dotenv.config();

const app = express();
const port = 3000;
const upload = multer({ dest: "uploads/" });

let harData = null; // store HAR JSON after upload

app.use(
  cors({
    origin: "*", // Allow all origins
    credentials: true,
  })
);
app.use(express.json());

app.use(express.static("public"));
app.use(cookieParser());

// Import the Python script results

// Add this function to run Python analysis
const runPythonAnalysis = (harFilePath) => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("python", ["analysie.py", harFilePath]);
    let output = "";

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python Error: ${data}`);
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        reject(`Python process exited with code ${code}`);
        return;
      }
      try {
        const analysisResults = JSON.parse(output);
        console.log(
          "HAR Analysis Results:",
          JSON.stringify(analysisResults, null, 2)
        );
        resolve(analysisResults);
      } catch (error) {
        reject(`Error parsing Python output: ${error}`);
      }
    });
  });
};

// Upload HAR file
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filePath = req.file.path;

  try {
    // First read the file
    const data = await fs.promises.readFile(filePath, "utf8");

    // Parse HAR data and store globally
    try {
      harData = JSON.parse(data);
    } catch (parseError) {
      console.error("HAR Parse Error:", parseError);
      return res.status(400).json({ error: "Invalid HAR file format" });
    }

    // Then run Python analysis
    try {
      const analysisResults = await runPythonAnalysis(filePath);
      console.log("Analysis complete. Results:", analysisResults);

      // Send single response with both HAR and analysis data
      return res.json({
        message: "HAR file uploaded and analyzed",
        harData: harData,
        analysis: analysisResults,
      });
    } catch (analysisError) {
      console.error("Python Analysis Error:", analysisError);
      return res.status(500).json({
        error: "Analysis failed",
        details: analysisError.toString(),
      });
    }
  } catch (fileError) {
    console.error("File Read Error:", fileError);
    return res.status(500).json({
      error: "Failed to read uploaded file",
      details: fileError.toString(),
    });
  }
});

// Get analytics from HAR file
app.get("/data", (req, res) => {
  if (!harData) {
    return res.status(400).json({ error: "No HAR file uploaded yet" });
  }

  let totalLogsToday = 0;
  let successCount = 0;
  let activeServers = new Set();
  let activeAlerts = 0;

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  for (const entry of harData.log.entries) {
    const entryDate = new Date(entry.startedDateTime)
      .toISOString()
      .split("T")[0];

    totalLogsToday++;

    if (entry.response.status == 200) {
      successCount++;
    }

    if (entry.serverIPAddress) {
      activeServers.add(entry.serverIPAddress);
    }

    if (entry.response && entry.response.status >= 400) {
      activeAlerts++;
    }
  }

  res.json({
    totalLogsToday,
    successCount,
    activeServers: activeServers.size,
    activeAlerts,
  });
});

// POST /gemini
// Body: { prompt: string, model?: string, options?: object }
// Environment:
//   GEMINI_API_URL - full Gemini endpoint URL (e.g. https://...)
//   GEMINI_API_KEY - API key / Bearer token
app.post("/gemini", async (req, res) => {
  const GEMINI_URL =
    process.env.GEMINI_API_URL ||
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return res
      .status(500)
      .json({ error: "GEMINI_API_KEY not set in environment" });
  }

  // Accept either full `contents` payload or a simple `prompt` string
  let payload;
  if (req.body && req.body.contents) {
    payload = { contents: req.body.contents };
  } else if (req.body && typeof req.body.prompt === "string") {
    payload = {
      contents: [
        {
          parts: [
            {
              text: req.body.prompt,
            },
          ],
        },
      ],
    };
  } else {
    return res
      .status(400)
      .json({ error: "Request must include `contents` or `prompt`" });
  }

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      body = { raw: text };
    }

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Gemini API error", details: body });
    }

    return res.json({ ok: true, data: body });
  } catch (err) {
    console.error("Gemini request error:", err);
    return res
      .status(500)
      .json({ error: "Failed to call Gemini API", details: String(err) });
  }
});

// GET /gemini - Analyze current HAR file with Gemini
app.get("/gemini", async (req, res) => {
  const GEMINI_URL =
    process.env.GEMINI_API_URL ||
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res
      .status(500)
      .json({ error: "GEMINI_API_KEY not set in environment" });
  }

  if (!harData) {
    return res.status(400).json({ error: "No HAR file uploaded yet" });
  }

  try {
    // Create payload using current HAR data
    const payload = {
      contents: [
        {
          parts: [
            {
              text: `Analyze this HAR file data and provide insights about the network traffic, response times, and any errors: ${JSON.stringify(
                harData.log.entries
              )}`,
            },
          ],
        },
      ],
    };

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      body = { raw: text };
    }

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Gemini API error", details: body });
    }

    return res.json({
      ok: true,
      data: body,
      analyzed_entries: harData.log.entries.length,
    });
  } catch (err) {
    console.error("Gemini request error:", err);
    return res
      .status(500)
      .json({ error: "Failed to call Gemini API", details: String(err) });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
