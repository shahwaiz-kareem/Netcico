"use client";
import { Tabs, TabList, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabComp = ({ children }) => {
  return (
    <Tabs className=" mt-1">
      <TabList className="flex rounded-lg  w-full h-full p-2 flex-row gap-2">
        <Tab className=" flex items-center justify-center gap-2 px-1 py-3 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#1970d5] hover:text-blue-400">
          Biography
        </Tab>
        <Tab className=" flex items-center justify-center gap-2 px-1 py-3 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#1970d5] hover:text-blue-400">
          Gallery
        </Tab>
        <Tab className=" flex items-center justify-center gap-2 px-1 py-3 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#1970d5] hover:text-blue-400">
          Table
        </Tab>
      </TabList>
      {children}
    </Tabs>
  );
};

export default TabComp;
