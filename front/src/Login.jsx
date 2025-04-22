import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#5B5FE1] to-[#B46DD9]">
      <main className="flex flex-1 max-w-6xl w-full mx-auto my-20 rounded-lg shadow-lg overflow-hidden">
        <section
          className="flex-1 relative flex flex-col justify-center px-10 py-14 text-white"
          style={{ background: 'linear-gradient(135deg, #5B5FE1 0%, #B46DD9 100%)' }}
        >
          <img
            alt="Abstract orange diagonal shapes on purple gradient background"
            className="absolute bottom-0 left-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
            height="400"
            width="600"
            src="https://storage.googleapis.com/a1aa/image/bdcc53b6-f592-4622-9764-965ef0d5416f.jpg"
            style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 40%)' }}
          />
          <h1 className="text-3xl font-semibold mb-3 relative z-10">
            Welcome to website
          </h1>
          <p className="text-sm max-w-xs relative z-10 leading-tight">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </section>

        <section className="w-96 bg-white flex flex-col justify-center px-10 py-14">
          <h2 className="text-purple-700 text-xs font-semibold mb-6 uppercase tracking-wide text-center">
            User Login
          </h2>
          <form className="space-y-5">
            <div>
              <div className="relative text-purple-300">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  className="w-full rounded-full bg-purple-100 text-purple-700 placeholder-purple-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Username"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div className="relative text-purple-300">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  className="w-full rounded-full bg-purple-100 text-purple-700 placeholder-purple-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-purple-400 mb-6">
              <label className="flex items-center space-x-1">
                <input
                  className="w-3 h-3 text-purple-600 rounded border-purple-300 focus:ring-purple-400"
                  type="checkbox"
                />
                <span>Remember</span>
              </label>
              <a className="hover:underline" href="#">
                Forgot password?
              </a>
            </div>

            <button
              className="w-full py-2 rounded-full text-white font-semibold text-xs bg-gradient-to-r from-[#5B5FE1] to-[#B46DD9] hover:from-[#4a4fd1] hover:to-[#9a5cc7] transition"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </section>
      </main>

      <footer className="text-white text-xs text-center mb-6 select-none">
        designed by
        <span className="inline-flex items-center space-x-1 justify-center">
          <i className="fas fa-robot"></i>
          <span>freepik</span>
        </span>
      </footer>
    </div>
  )
}

export default Login
