"use client"

import { BiSolidDashboard } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { SiReaddotcv } from "react-icons/si";
import { GoPeople } from "react-icons/go"
import AdminLink from "./AdminLink"
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { BsGear } from "react-icons/bs";
import { IoFolderOpenOutline } from "react-icons/io5";
import Link from "next/link";
const Sidebar = () => {
  const { SidebarRef } = useContext(ThemeContext)
  return (

    <aside ref={SidebarRef} className={`w-48  bg-zinc-950 rounded-tr-sm min-h-full h-screen  flex-col items-center    pb-2 space-y-7`}>
      <div className="flex w-full  flex-col items-center justify-center pt-4  ">
        <Link href={"/dashboard/create"}>
          <AiFillPlusCircle className="text-[98px] hover:scale-95 text-center   mr-5 cursor-pointer" />
        </Link>

      </div>
      <div className="w-full  flex flex-col gap-y-8 text-sm">

        <AdminLink Icon={BiSolidDashboard} text={"Dashboard"} link={"/dashboard"} />
        <AdminLink Icon={SiReaddotcv} text={"Blogs"} link={"/dashboard/blogs"} />
        <AdminLink Icon={GoPeople} text={"Biographies"} link={"/dashboard/biographies"} />
        <AdminLink Icon={FaMoneyBillTrendUp} text={"Ads"} link={"dashboard/ads"} />
        <AdminLink Icon={IoFolderOpenOutline} text={"Files"} link={"dashboard/files"} />
        <AdminLink Icon={BsGear} text={"Settings"} link={"dashboard/settings"} />

      </div>

    </aside>


  )
}

export default Sidebar
