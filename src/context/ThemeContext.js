"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export const ThemeContext = createContext()
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Welcome to Netcioc.com! ",
        level: 3,
      },
    },
  ],
};
export const ThemeProvider = ({ children }) => {
  const SidebarRef = useRef(null)
  const [width, setWidth] = useState("w-[85%]")
  const [data, setData] = useState(INITIAL_DATA)
  const [submitSuccess, setSubmitSuccess] = useState({
    success: null,
    message: ""
  })
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/dashboard") {
      SidebarRef.current.style.display = 'none';
    }
  }, [])
  // console.clear()
  // console.groupCollapsed(data)

  const toggleSidebar = () => {
    if (SidebarRef.current.style.display === 'none') {
      setWidth("w-full")
      SidebarRef.current.style.display = 'block';
    } else {
      setWidth("w-[85%]")
      SidebarRef.current.style.display = 'none';
    }
  }


  return (
    < ThemeContext.Provider value={{ toggleSidebar, SidebarRef, width, data, setData, thumbnailUrl, setThumbnailUrl, submitSuccess, setSubmitSuccess }}>
      {children}
    </ ThemeContext.Provider>
  )
}
