import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#f9f0fc] via-[#f7e9f9] to-[#f3e9f9] p-4">
    <div className="flex max-w-4xl w-full rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Left side: form */}
      <div className="bg-white w-1/2 min-w-[320px] px-10 py-12 flex flex-col justify-center">
        <h2 className="text-[13px] font-semibold text-[#5a4db7] mb-8 uppercase tracking-wide">LOGIN</h2>
        <form className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-[10px] text-[#c7c7c7] mb-1">Username</label>
            <input id="username" type="text" className="border border-[#e5e5e5] rounded text-[12px] text-[#999999] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#d46cd6]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-[10px] text-[#c7c7c7] mb-1">Password</label>
            <input id="password" type="password" className="border border-[#e5e5e5] rounded text-[12px] text-[#999999] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#d46cd6]" />
          </div>
          <div className="flex items-center space-x-1 text-[9px] text-[#c7c7c7]">
            <input id="remember" type="checkbox" className="w-3 h-3" />
            <label htmlFor="remember" className="select-none">Remember me</label>
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#d46cd6] to-[#b94ccf] text-white text-[12px] font-semibold rounded px-6 py-2 mt-2 hover:brightness-110 transition">
            Sign In
          </button>
        </form>
        <p className="text-[9px] text-[#c7c7c7] mt-6">
          Don't have an account? <a href="#" className="text-[#5a4db7] hover:underline">Sign Up</a>
        </p>
      </div>
      {/* Right side: purple panel with circles and text */}
      <div className="relative w-1/2 min-w-[320px] bg-[#7a4fcf] flex flex-col justify-center px-10 py-12 text-white overflow-hidden">
        <img src="https://placehold.co/160x160/ca6ee8/ca6ee8?text=Large+Circle" alt="Large pink circle on purple background" className="absolute -top-20 -left-20 w-40 h-40 rounded-full mix-blend-multiply filter blur-[12px]" />
        <img src="https://placehold.co/120x120/d07ad6/d07ad6?text=Medium+Circle" alt="Medium pink circle on purple background" className="absolute -top-12 left-12 w-30 h-30 rounded-full mix-blend-multiply filter blur-[8px]" />
        <img src="https://placehold.co/60x60/dc6ad1/dc6ad1?text=Small+Circle" alt="Small pink circle on purple background" className="absolute bottom-12 right-12 w-15 h-15 rounded-full mix-blend-multiply filter blur-[6px]" />
        <div className="relative z-10 text-[14px] font-semibold leading-tight">
          <p>Hey</p>
          <p>Welcome</p>
          <p>Back</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
