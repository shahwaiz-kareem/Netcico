"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export const ThemeContext = createContext();

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "paragraph",
      data: {
        text: "Write Your Content Here...",
      },
    },
  ],
};
export const ThemeProvider = ({ children }) => {
  const SidebarRef = useRef(null);
  const [width, setWidth] = useState("w-[85%]");
  const [data, setData] = useState(INITIAL_DATA);
  const [tableData, setTableData] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState({
    success: null,
    message: "",
  });
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailFormData, setThumbnailFormData] = useState(new FormData());
  const [updatedThumb, setUpdatedThumb] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/dashboard") {
      SidebarRef.current.style.display = "none";
    }
  }, []);

  const toggleSidebar = () => {
    if (SidebarRef.current.style.display === "none") {
      setWidth("w-full");
      SidebarRef.current.style.display = "block";
    } else {
      setWidth("w-[85%]");
      SidebarRef.current.style.display = "none";
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleSidebar,
        SidebarRef,
        width,
        data,
        setData,
        thumbnailUrl,
        setThumbnailUrl,
        submitSuccess,
        setSubmitSuccess,
        thumbnailFormData,
        setThumbnailFormData,
        updatedThumb,
        setUpdatedThumb,
        tableData,
        setTableData,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
