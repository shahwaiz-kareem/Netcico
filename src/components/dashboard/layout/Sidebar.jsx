"use client"

import { BiSolidDashboard } from "react-icons/bi";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AdminLink from "./AdminLink"
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const Sidebar = () => {
  const { toggleVal } = useContext(ThemeContext)
  return (

    <aside className={`w-52  bg-[#1c212c]  min-h-full h-screen ${toggleVal} flex-col items-center pt-5 pb-2 space-y-7`}>
      <div className="w-full pr-5 flex flex-col gap-y-8 text-gray-500 fill-gray-500 text-sm">
        <div className="text-sm pl-4 text-gray-400/60  text-[11px] uppercase">Menu</div>
        <AdminLink Icon={BiSolidDashboard} text={"Dashboard"} link={"/dashboard"} />
        <AdminLink Icon={AiOutlinePlusCircle} text={"Crud"} link={"dashboard/crud"} />
        <AdminLink Icon={AiOutlineMoneyCollect} text={"Ads"} link={"dashboard/ads"} />
      </div>

    </aside>


  )
}

export default Sidebar
