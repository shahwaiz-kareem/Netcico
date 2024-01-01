"use client";
import React, { useContext, } from "react";
import "./editor.css";
import EditorComponent from "./EditorComponent";
import { ThemeContext } from "@/context/ThemeContext";
// Initial Data

function Editor({ tools }) {
  const context = useContext(ThemeContext)
  const { data, setData } = context;
  return (
    <div className="w-full  mt-4">
      <EditorComponent tools={tools} data={data} onChange={setData} />
    </div>
  )
}
export default Editor;
