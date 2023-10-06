import React from 'react'
import alpineTemplate from "../layout/alpinejs/search";
import Chip from './Chip';
import {BiBell} from "react-icons/bi"
const Header = () => {
  return (
    <header className=" flex flex-col shadow pr-2 space-x-23 ">
      <div className="  flex   justify-between items-center ">
      <div dangerouslySetInnerHTML={{__html: alpineTemplate}}></div>
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <div className="flex flex-col items-end justify-center">
          
               <div className='flex gap-4 items-center justify-center  text-gray-600'>
                <BiBell className='text-2xl cursor-pointer text-gray-500'/>
          <div className="text text-gray-600 ">Shah23</div>
               </div>
          
        </div>
        <div className="h-8 w-8 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
      </div>
      </div>
      
      <div className='flex pb-2 pt-1 mx-2 gap-3 cursor-pointer '>
        <Chip text={"Technology"}/>
        <Chip text={"Health"}/>
        <Chip text={"Lifestyle"}/>
        <Chip text={"Politics"}/>
        <Chip text={"Programming"}/>
        <Chip text={"History"}/>
        <Chip text={"Scientists"}/>
        <Chip text={"Sports"}/>
        <Chip text={"Entertainment"}/>
        <Chip text={"Books"}/>
        <Chip text={"Space"}/>
        <Chip text={"Science"}/>
        <Chip text={"Computer"}/>
        <Chip text={"Mathematics"}/>
      </div>
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.3.5/dist/alpine.min.js" defer></script>
    </header >
  )
}

export default Header
