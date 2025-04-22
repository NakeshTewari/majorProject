import React from 'react'
import Login from '../../Login'
import { useNavigate } from 'react-router-dom'
import Signup from '../../Signup'

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <header className="flex items-center justify-between bg-blue-600 px-4 sm:px-6 lg:px-8 h-12 text-white select-none">
        <div className="flex items-center space-x-2 text-sm font-semibold">
          <span className="opacity-80">demo</span>
          <i className="fas fa-caret-right text-xs opacity-70"></i>
          <span className="opacity-80">example.com</span>
          <i className="fas fa-caret-right text-xs opacity-70"></i>
          <span>Logs</span>
        </div>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <button className="hover:underline">Support</button>
          <img
            alt="User avatar with initials JD in blue circle"
            className="rounded-full w-6 h-6"
            src="https://storage.googleapis.com/a1aa/image/d8bf52c4-cfdf-4dd1-823a-1948acf4063d.jpg"
          />
          <span>John Doe</span>
          <span><button className="hover:underline" onClick={handleLogin}>Login</button></span>
          <span><button className="hover:underline" onClick={handleSignup}>Signup</button></span>
        </div>
      </header>
  )
}

export default Header
