import React from 'react'
import alpineTemplate from "../layout/alpinejs/search";
import { BiBell } from "react-icons/bi"
import Wrapper from './Wrapper';
const Header = () => {


  return (
    <header className=" flex flex-col shadow  w-full ">
      <div className="  flex  justify-between items-center ">
        <div dangerouslySetInnerHTML={{ __html: alpineTemplate }}>
        </div>
        <div className="flex gap-2 px-2 clear-both text-white">
          <div className="flex   justify-center">
            <div className='flex gap-4 items-center justify-center  text-gray-600'>
              <BiBell className='text-2xl cursor-pointer text-gray-500' />
              <div className="text text-gray-600 ">Shahwaiz kareem</div>
            </div>

          </div>
          <div className="h-8 w-8 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
        </div>
      </div>

      <Wrapper />
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.3.5/dist/alpine.min.js" defer></script>
    </header >
  )
}

export default Header
