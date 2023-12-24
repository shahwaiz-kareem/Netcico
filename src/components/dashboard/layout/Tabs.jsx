"use client"
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosCreate } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
// ReadPanel,
// UpdatePanel,
// DeletePanel

const TabsCont = ({
  CreatePanel,

}) => {
  return (
    <Tabs className=" mt-1">
      <TabList className="flex rounded-lg bg-[#1c212c] w-full h-full p-2 flex-row gap-2">
        <Tab className="text-white outline-none  hover:text-black  cursor-pointer py-2 px-4 w-1/4 hover:bg-[white] gap-2 rounded  flex items-center justify-center"      >
          <IoIosCreate />
          create
        </ Tab>
        <Tab className="text-white outline-none  hover:text-black  cursor-pointer py-2 px-4 w-1/4 hover:bg-[white] gap-2 rounded  flex items-center justify-center"    >
          <FaBookReader />
          Read
        </ Tab>
        <Tab className="text-white outline-none  hover:text-black  cursor-pointer py-2 px-4 w-1/4 hover:bg-[white] gap-2 rounded  flex items-center justify-center"      >
          <GrUpdate />
          Update
        </ Tab>
        <Tab className="text-white outline-none  hover:text-black  cursor-pointer py-2 px-4 w-1/4 hover:bg-[white] gap-2 rounded  flex items-center justify-center"      >
          <RiDeleteBin5Fill />
          Delete
        </ Tab>

      </TabList>

      <TabPanel >
        <CreatePanel />
      </TabPanel>
    </Tabs >
  )
}

export default TabsCont
