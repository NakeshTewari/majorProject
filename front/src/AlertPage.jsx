import React from 'react'

const AlertPage = () => {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col justify-between">
          <main className="p-6 flex-grow">
            <section className="max-w-full mx-auto bg-gray-100">
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-sm text-gray-900">
                  <span className="font-extrabold">All</span> (7) | 
                  <a href="#" className="text-blue-600 hover:underline">Successful</a> (6) | 
                  <a href="#" className="text-blue-600 hover:underline">Failed</a> (1)
                </div>
                <form className="flex items-center space-x-2">
                  <input
                    type="text"
                    aria-label="Search"
                    className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    Search
                  </button>
                </form>
              </div>
    
              <form className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2">
                <select
                  name="bulk-action-top"
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                >
                  <option>Bulk actions</option>
                </select>
                <button
                  type="submit"
                  className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  Apply
                </button>
                <div className="ml-auto text-sm text-gray-700">7 items</div>
              </form>
    
              <div className="overflow-x-auto border border-gray-300 rounded">
                <table className="w-full text-left text-sm text-gray-700 border-collapse">
                  <thead className="bg-white border-b border-gray-300">
                    <tr>
                      <th className="w-12 px-4 py-3">
                        <input
                          type="checkbox"
                          aria-label="Select all"
                          className="cursor-pointer"
                        />
                      </th>
                      <th className="px-4 py-3 text-blue-600 cursor-pointer">Time</th>
                      <th className="px-4 py-3 text-blue-600 cursor-pointer">Receiver</th>
                      <th className="px-4 py-3 text-blue-600 cursor-pointer">Subject</th>
                      <th className="px-4 py-3">Error</th>
                      <th className="w-36 px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Example row */}
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 text-center">
                        <input type="checkbox" className="cursor-pointer" />
                      </td>
                      <td className="px-4 py-3 text-gray-600">March 14, 2023 3:44 pm</td>
                      <td className="px-4 py-3 text-gray-600">sale@example.com</td>
                      <td className="px-4 py-3 text-gray-700">[WP Site] Password Reset</td>
                      <td className="px-4 py-3 text-gray-700">
                        SMTP Error: Could not connect to SMTP host. Failed to connect to server
                      </td>
                      <td className="px-4 py-3 flex justify-end space-x-2">
                        <button
                          aria-label="View"
                          className="text-gray-500 hover:text-gray-700 p-1 rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button
                        aria-label="Retry"
                        className="text-gray-500 hover:text-gray-700 p-1 rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <i className="fas fa-undo"></i>
                      </button>
                      <button
                        aria-label="Delete"
                        className="text-gray-500 hover:text-gray-700 p-1 rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                  {/* Additional rows can be added here */}
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-center">
                      <input type="checkbox" className="cursor-pointer" />
                    </td>
                    <td className="px-4 py-3 text-gray-600">March 14, 2023 3:43 pm</td>
                    <td className="px-4 py-3 text-gray-600">info@example.com</td>
                    <td className="px-4 py-3 text-gray-700">WP Mail SMTP: HTML Test email to info@example.com</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 flex justify-end space-x-2">
                      <button
                        aria-label="View"
                        className="text-gray-500 hover:text-gray-700 p-1 rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        aria-label="Retry"
                        className="text-gray-500 hover:text-gray-700 p-1 rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <i className="fas fa-undo"></i>
                      </button>
                      <button
                        aria-label="Delete"
                        className="text-gray-500 hover:text-gray-700 p-1 rounded border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>

            <form className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2">
              <select
                name="bulk-action-bottom"
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              >
                <option>Bulk actions</option>
              </select>
              <button
                type="submit"
                className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                Apply
              </button>
              <div className="ml-auto text-sm text-gray-700">7 items</div>
            </form>
          </section>
        </main>

        <footer className="bg-gray-100 border-t border-gray-300 px-6 py-4 flex flex-col sm:flex-row justify-between text-xs text-gray-600">
          <div>
            Please rate <strong>WP Mail Logging ★★★★★</strong> on
            <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              WordPress.org
            </a>
            to help us spread the word.
          </div>
          <div className="mt-2 sm:mt-0">Version 6.1.1</div>
        </footer>
      </div>
    );
}

export default AlertPage;
