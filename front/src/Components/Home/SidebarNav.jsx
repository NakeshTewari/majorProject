import React from 'react'
import { Link } from 'react-router-dom';

const SidebarNav = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white flex-shrink-0">
    <div className="p-4 font-bold">Plesk</div>
    <ul className="space-y-2">
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
        <Link to="/" className="flex items-center p-2 hover:bg-blue-600">
  <i className="fas fa-envelope"></i>
  <span className="ml-2">Home</span>
</Link>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
        <Link to="/alertpage" className="flex items-center p-2 hover:bg-blue-600">
  <i className="fas fa-envelope"></i>
  <span className="ml-2">Alert</span>
</Link>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
        <Link to="/userprofile" className="flex items-center p-2 hover:bg-blue-600">
  <i className="fas fa-envelope"></i>
  <span className="ml-2">User Profile</span>
</Link>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
          <i className="fas fa-folder"></i>
          <span className="ml-2">Files</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
          <i className="fas fa-database"></i>
          <span className="ml-2">Databases</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
          <i className="fas fa-chart-pie"></i>
          <span className="ml-2">Statistics</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
          <i className="fas fa-users"></i>
          <span className="ml-2">Users</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
          <i className="fas fa-user-circle"></i>
          <span className="ml-2">Account</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
          <i className="fab fa-wordpress"></i>
          <span className="ml-2">WordPress</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 hover:bg-blue-600">
          <i className="fas fa-toolbox"></i>
          <span className="ml-2">SEO Toolkit</span>
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default SidebarNav
