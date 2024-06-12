"use client";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { TbListDetails } from "react-icons/tb";
import { FaRegAddressBook } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";

import { IoImagesOutline } from "react-icons/io5";

const TabComponent = ({ children }) => {
  return (
    <Tabs className=" mt-1 w-full flex flex-col">
      <TabList className=" rounded-lg flex bg-gray-100   outline-none cursor-pointer  p-2 w-full gap-4">
        <Tab className="w-full hover:bg-gray-200 rounded-lg flex items-center  gap-2 outline-none cursor-pointer  px-1  py-2    ">
          <FaRegAddressBook className="max-sm:text-center" />
          <span className="hidden sm:block">Biography</span>
        </Tab>
        <Tab className=" w-full flex hover:bg-gray-200  items-center rounded-lg  gap-2 outline-none cursor-pointer  px-1  py-2   ">
          <IoImagesOutline className="max-sm:text-center" />
          <span className="hidden sm:block">Gallery</span>
        </Tab>
        <Tab
          className=" hover:bg-gray-200  w-full flex items-center rounded-lg  gap-2 outline-none cursor-pointer 
          px-1 py-2    "
        >
          <TbListDetails className="max-sm:text-center" />
          <span className="hidden sm:block">Table</span>
        </Tab>
      </TabList>
      <div className="px-2 ">
        {children.map((child, index) => (
          <TabPanel key={index}>{child}</TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default TabComponent;
