"use client";

import { BiSolidDashboard } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { GoPeople } from "react-icons/go";
import AdminLink from "./AdminLink";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { BsGear } from "react-icons/bs";
import { IoFolderOpenOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

const Sidebar = () => {
  const { SidebarRef } = useContext(ThemeContext);
  return (
    <aside
      ref={SidebarRef}
      className={`w-48  bg-zinc-950 rounded-tr-sm h-full  flex-col items-center justify-center   pb-2 `}
    >
      <div className="w-full mt-4 h-full  flex flex-col gap-8 text-sm">
        <AdminLink
          Icon={BiSolidDashboard}
          text={"Dashboard"}
          link={"/dashboard"}
        />
        <AdminLink
          Icon={SiReaddotcv}
          text={"Blogs"}
          link={"/dashboard/blogs"}
        />
        <AdminLink
          Icon={GoPeople}
          text={"Biographies"}
          link={"/dashboard/biographies"}
        />
        <AdminLink
          Icon={BiCategory}
          text={"Categories"}
          link={"dashboard/category"}
        />
        <AdminLink
          Icon={FaMoneyBillTrendUp}
          text={"Ads"}
          link={"dashboard/ads"}
        />
        <AdminLink
          Icon={IoFolderOpenOutline}
          text={"Files"}
          link={"dashboard/files"}
        />
        <AdminLink
          Icon={BsGear}
          text={"Settings"}
          link={"dashboard/settings"}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
