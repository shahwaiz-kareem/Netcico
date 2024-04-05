"use client";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { TbListDetails } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";
import "react-tabs/style/react-tabs.css";
import { BsBook } from "react-icons/bs";

const TabComponent = ({ children }) => {
  return (
    <Tabs className=" mt-1 w-full flex flex-col sticky top-0">
      <TabList className=" rounded-lg flex bg-gray-100   outline-none cursor-pointer  p-2 w-full gap-4">
        <Tab className="w-full  flex items-center  gap-2 outline-none cursor-pointer  px-1  py-2    ">
          <BsBook className="hidden sm:block" />
          <span>Biography</span>
        </Tab>
        <Tab className=" w-full flex items-center  gap-2 outline-none cursor-pointer  px-1  py-2   ">
          <TfiGallery className="hidden sm:block" />
          <span>Gallery</span>
        </Tab>
        <Tab
          className=" w-full flex items-center  gap-2 outline-none cursor-pointer 
          px-1 py-2    "
        >
          <TbListDetails className="hidden sm:block" />
          <span>Table</span>
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
