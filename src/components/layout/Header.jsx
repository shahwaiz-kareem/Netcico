import React from 'react'
import alpineTemplate from "../layout/alpinejs/search";
const Header = () => {
  return (
    <header className="h-20 w-full flex shadow justify-between items-center px-5 space-x-23 ">
      <div dangerouslySetInnerHTML={{__html: alpineTemplate}}></div>
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <div className="flex flex-col items-end ">
          <div className="text-md font-medium ">Shahji</div>
        </div>
        <div className="h-8 w-8 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
      </div>
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.3.5/dist/alpine.min.js" defer></script>
    </header >
  )
}

export default Header
