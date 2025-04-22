import React from 'react'

const FilterTable = () => {
  return (
    <aside class="w-full max-w-xs bg-gray-50 border border-gray-200 rounded-md p-4 text-xs text-gray-600 select-none">
     <h3 class="font-semibold mb-2">
      FILTER
     </h3>
     <div class="space-y-2">
      <details class="border border-gray-200 rounded">
       <summary class="cursor-pointer px-3 py-1.5 font-semibold bg-gray-100 rounded text-gray-700 flex justify-between items-center">
        Status Code
        <i class="fas fa-chevron-down text-xs">
        </i>
       </summary>
       <div class="px-3 py-2 space-y-1 text-gray-600">
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          200
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          1 097 863
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          301
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          85 054
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          404
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          50 851
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          302
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          56 255
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          304
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          35 621
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          403
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          14 340
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          500
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          14 243
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          410
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          7 111
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          502
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          7 110
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          307
         </span>
         <span class="ml-auto text-gray-400 text-[10px] font-mono">
          6 890
         </span>
        </label>
       </div>
      </details>
      <details class="border border-gray-200 rounded">
       <summary class="cursor-pointer px-3 py-1.5 font-semibold bg-gray-100 rounded text-gray-700 flex justify-between items-center">
        Method
        <i class="fas fa-chevron-down text-xs">
        </i>
       </summary>
       <div class="px-3 py-2 space-y-1 text-gray-600">
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          GET
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          POST
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          PATCH
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          HEAD
         </span>
        </label>
       </div>
      </details>
      <details class="border border-gray-200 rounded">
       <summary class="cursor-pointer px-3 py-1.5 font-semibold bg-gray-100 rounded text-gray-700 flex justify-between items-center">
        Url
        <i class="fas fa-chevron-down text-xs">
        </i>
       </summary>
       <div class="px-3 py-2 space-y-1 text-gray-600">
        <input aria-label="Filter URL" class="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600" placeholder="Filter URL" type="text"/>
       </div>
      </details>
      <details class="border border-gray-200 rounded">
       <summary class="cursor-pointer px-3 py-1.5 font-semibold bg-gray-100 rounded text-gray-700 flex justify-between items-center">
        Redirection
        <i class="fas fa-chevron-down text-xs">
        </i>
       </summary>
       <div class="px-3 py-2 space-y-1 text-gray-600">
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Followed
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Not Followed
         </span>
        </label>
       </div>
      </details>
      <details class="border border-gray-200 rounded">
       <summary class="cursor-pointer px-3 py-1.5 font-semibold bg-gray-100 rounded text-gray-700 flex justify-between items-center">
        User Agent
        <i class="fas fa-chevron-down text-xs">
        </i>
       </summary>
       <div class="px-3 py-2 space-y-1 text-gray-600">
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Chrome
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Firefox
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Safari
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Internet Explorer
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Opera
         </span>
        </label>
       </div>
      </details>
      <details class="border border-gray-200 rounded">
       <summary class="cursor-pointer px-3 py-1.5 font-semibold bg-gray-100 rounded text-gray-700 flex justify-between items-center">
        User Agent Type
        <i class="fas fa-chevron-down text-xs">
        </i>
       </summary>
       <div class="px-3 py-2 space-y-1 text-gray-600">
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Mobile
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Desktop
         </span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
         <input class="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
         <span>
          Tablet
         </span>
        </label>
       </div>
      </details>
     </div>
    </aside>
  )
}

export default FilterTable
