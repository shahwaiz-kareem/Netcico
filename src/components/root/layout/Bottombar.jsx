import React from 'react'
import { GoHome } from "react-icons/go";
import { SiReaddotcv } from "react-icons/si";
import { GoPeople } from "react-icons/go"
import { MdOutlineForum } from "react-icons/md"
import Link from 'next/link';
const Bottombar = () => {
  return (
    <div className="min-[800px]:hidden bottom-0 w-full justify-between fixed z-30 px-4 sm:px-16 flex py-2   outline-none shadow-2xl bg-white items-center text-white ">
      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px] justify-center rounded-lg cursor-pointer hover:text-white hover:bg-blue-400  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/"}>
          <GoHome />
        </Link>
      </div>

      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white hover:bg-blue-400  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/blogs"}>
          <SiReaddotcv />
        </Link>
      </div>

      {/* <!-- Theme - biographies<!-- Sidebar -->-> */}
      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white hover:bg-blue-400  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/biographies"}>
          <GoPeople />
        </Link>
      </div>

      {/* <!-- Configuration --> */}
      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white hover:bg-blue-400  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/forum"}>
          <MdOutlineForum />
        </Link>
      </div>
    </div>
  )
}

export default Bottombar
