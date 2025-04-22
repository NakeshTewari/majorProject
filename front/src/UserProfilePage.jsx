import React from 'react'

const UserProfilePage = () => {
  return (
    <div className="bg-white text-gray-700 min-h-screen">
    {/* <header className="flex items-center justify-between border-b border-gray-200 px-6 py-3 sticky top-0 bg-white z-20">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-400" aria-hidden="true">
          <i className="fas fa-users text-lg"></i>
        </div>
        <span className="font-semibold text-gray-900 select-none text-base sm:text-lg">Users</span>
      </div>
      <nav className="flex items-center space-x-6 text-sm sm:text-base">
        <button
          aria-current="page"
          className="bg-gray-100 text-gray-700 font-semibold rounded-md px-5 py-2 select-none transition-colors duration-150 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="button"
        >
          All Users
        </button>
        <button
          className="text-gray-500 font-semibold select-none transition-colors duration-150 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          type="button"
        >
          Settings
        </button>
      </nav>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-md px-5 py-2 flex items-center space-x-2 select-none transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="button"
        aria-label="Add New User"
      >
        <i className="fas fa-plus"></i>
        <span>Add New User</span>
      </button>
    </header> */}

    <main className="flex flex-col md:flex-row max-w-7xl mx-auto mt-8 px-6 gap-10 sm:gap-12 md:gap-16">
      {/* Left panel */}
      <section className="md:w-1/3 space-y-8">
        <div>
          {/* <h2 className="font-semibold text-gray-800 mb-5 select-none text-base sm:text-lg">Account Management</h2> */}
          <div className="relative rounded-lg bg-[#f1dfdb] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <img
              alt=""
              className="w-full h-auto object-cover rounded-lg"
              height="350"
              src=""
              width="400"
              decoding="async"
              loading="lazy"
            />
            <button
              aria-label="Remove photo"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-400 bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center text-white text-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white"
              type="button"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <button
            className="mt-5 w-full border border-gray-300 rounded-md py-3 text-gray-700 font-semibold text-center select-none hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
          >
            Upload Photo
          </button>
        </div>

        <form className="space-y-6" autoComplete="off" noValidate>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 select-none text-sm sm:text-base" htmlFor="old-password">Old Password</label>
            <input
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                id="new-password"
                type="password"
                value=""
                autoComplete="new-password"
                aria-required="true"
              />
               
               <label className="block text-gray-700 font-semibold mb-2 select-none text-sm sm:text-base" htmlFor="old-password">New Password</label>
            <input
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                id="new-password"
                type="password"
                value=""
                autoComplete="new-password"
                aria-required="true"
              />
            </div>
            <button
              className="w-full border border-gray-300 rounded-md py-3 text-gray-700 font-semibold text-center select-none hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Change Password
            </button>
          </form>
        </section>

        {/* Right panel */}
        <section className="md:w-2/3 border-l border-gray-200 pl-8">
          <h2 className="font-semibold text-gray-800 mb-6 select-none text-base sm:text-lg">Profile Information</h2>
          <form className="space-y-8" autoComplete="off" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm sm:text-base">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="username">Username</label>
                <input
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                  id="username"
                  type="text"
                  value="gene.rodrig"
                  autoComplete="username"
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="first-name">First Name</label>
                <input
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                  id="first-name"
                  type="text"
                  value="Gene"
                  autoComplete="given-name"
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="nickname">Nickname</label>
                <input
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                  id="nickname"
                  type="text"
                  value="Gene.r"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="role">Role</label>
                <select
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                  id="role"
                  aria-required="true"
                >
                  <option selected>Subscriber</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="last-name">Last Name</label>
                <input
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                  id="last-name"
                  type="text"
                  value="Rodriguez"
                  autoComplete="family-name"
                  aria-required="true"
                />
              </div>
              <div>
              <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="email">Email (required)</label>
              <input
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                id="email"
                type="email"
                value="gene.rodrig@gmail.com"
                autoComplete="email"
                aria-required="true"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="whatsapp">WhatsApp</label>
              <input
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                id="whatsapp"
                type="text"
                value="@gene-rod"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="website">Website</label>
              <input
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                id="website"
                type="url"
                value="gene-roding.webflow.io"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 select-none" htmlFor="telegram">Telegram</label>
              <input
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
                id="telegram"
                type="text"
                value="@gene-rod"
                autoComplete="off"
              />
            </div>
          </div>

          {/* <div>
            <label className="block text-gray-700 font-semibold mb-2 select-none text-sm sm:text-base" htmlFor="biographical-info">About the User</label>
            <label className="block text-gray-600 font-semibold mb-1 select-none text-xs sm:text-sm" htmlFor="biographical-info">Biographical Info</label>
            <textarea
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-y transition-colors duration-150"
              id="biographical-info"
              rows="5"
              aria-multiline="true"
            >
              Albert Einstein was a German mathematician and physicist who developed the special and general theories of relativity. In 1921, he won the Nobel Prize for physics for his explanation of the photoelectric effect. In the following decade.
            </textarea>
          </div> */}
        </form>
      </section>
    </main>
  </div>
  )
}

export default UserProfilePage
