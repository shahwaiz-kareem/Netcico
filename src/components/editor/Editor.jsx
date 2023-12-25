"use client";
import React, { useContext, } from "react";
import "./editor.css";
import EditorComponent from "./EditorComponent";
import { ThemeContext } from "@/context/ThemeContext";
// Initial Data

function Editor() {
  const context = useContext(ThemeContext)
  const { data, setData } = context;
  return (
    <EditorComponent data={data} onChange={setData} />
  );
}
export default Editor;
