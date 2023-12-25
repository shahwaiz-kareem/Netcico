"use client"
import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./tools";
const EditorComponent = ({ data, onChange, }) => {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: EDITOR_JS_TOOLS,
        data: data,
        autofocus: true,
        inlineToolbar: true,
        onChange: async (api) => {
          const data = await api.saver.save();
          onChange(data)
        }
      })

      ref.current = editor;

    }


    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return <div id="editorjs" className="h-full w-full lg:w-[75%] mx-auto  px-2 text-black bg-white rounded-md overflow-y-scroll" />;
};
export default memo(EditorComponent);
