"use client"
import React from 'react'
import { GoHome } from "react-icons/go";
import { SiReaddotcv } from "react-icons/si";
import { GoPeople } from "react-icons/go"
import { MdOutlineForum } from "react-icons/md"
import Link from 'next/link';
const Sidebar = () => {
  return (
    <aside className="max-[800px]:hidden pt-32 sticky right-0 top-0 z-20 flex  h-screen w-fit  flex-col space-y-16 px-4 outline-none  bg-white items-center text-white">

      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px] justify-center rounded-lg cursor-pointer hover:text-white hover:bg-[#1970d5]  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/"}>
          <GoHome />
        </Link>
      </div>

      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white hover:bg-[#1970d5]  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/blogs"}>
          <SiReaddotcv />
        </Link>
      </div>

      {/* <!-- Theme - <!-- Sidebar -->-> */}
      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white hover:bg-[#1970d5]  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/biographies"}>
          <GoPeople />
        </Link>
      </div>

      {/* <!-- Configuration --> */}
      <div className="h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white hover:bg-[#1970d5]  hover:duration-200 hover:ease-linear focus:bg-white">
        <Link href={"/forum"}>
          <MdOutlineForum />
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
