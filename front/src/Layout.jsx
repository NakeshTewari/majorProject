import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Components/Home/Header'
import SidebarNav from './Components/Home/SidebarNav'

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-screen z-40">
        <SidebarNav />
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 z-30">
          <Header />
        </header>

        {/* Scrollable Page Content */}
        <main className="mt-12 p-4 overflow-y-auto h-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
