"use client";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Tab = ({ children, tabName }) => {
  return (
    <Tabs className=" mt-1">
      <TabList className="flex rounded-lg bg-[#1c212c] w-full h-full p-2 flex-row gap-2">
        <Tab className="relative flex items-center justify-center gap-2 px-1 py-3 text-blue-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#1970d5] hover:text-blue-400yyy">
          {tabName}
        </Tab>
      </TabList>
      <TabPanel>{children}</TabPanel>
    </Tabs>
  );
};

export default Tab;
