import json
import sys
from collections import defaultdict

def predict_har_performance(har_file_path):
    """
    Analyzes a HAR file for performance insights
    """
    try:
        with open(har_file_path, 'r') as f:
            har_data = json.load(f)
            
        entries = har_data.get('log', {}).get('entries', [])
        
        analysis = {
            'total_requests': len(entries),
            'response_times': [],
            'status_codes': defaultdict(int),
            'content_types': defaultdict(int),
            'total_transfer': 0
        }
        
        for entry in entries:
            # Response time
            time = entry.get('time', 0)
            analysis['response_times'].append(time)
            
            # Status codes
            status = entry.get('response', {}).get('status', 0)
            analysis['status_codes'][str(status)] += 1
            
            # Content types
            content_type = entry.get('response', {}).get('content', {}).get('mimeType', 'unknown')
            analysis['content_types'][content_type] += 1
            
            # Transfer size
            transfer_size = entry.get('response', {}).get('bodySize', 0)
            analysis['total_transfer'] += transfer_size if transfer_size > 0 else 0
        
        # Calculate averages
        analysis['avg_response_time'] = sum(analysis['response_times']) / len(analysis['response_times']) if analysis['response_times'] else 0
        
        # Convert defaultdict to dict for JSON serialization
        analysis['status_codes'] = dict(analysis['status_codes'])
        analysis['content_types'] = dict(analysis['content_types'])
        
        return analysis
        
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No file path provided"}))
        sys.exit(1)
        
    har_file_path = sys.argv[1]
    results = predict_har_performance(har_file_path)
    
    # Print JSON output that Node.js can parse
    print(json.dumps(results))
