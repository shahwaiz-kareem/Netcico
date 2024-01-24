"use client";
import { memo, useContext, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Undo from "editorjs-undo";
import { ThemeContext } from "@/context/ThemeContext";
import "./editor.css";
const Table = ({ tools }) => {
  const context = useContext(ThemeContext);
  const { setTableData } = context;
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "tableEditor",
        tools: tools,
        autofocus: true,
        minHeight: 250,
        inlineToolbar: true,
        onChange: async (api) => {
          const data = await api.saver.save();
          setTableData(data);
        },
        onReady: () => {
          new Undo({ editor });
        },
      });

      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return (
    <div className="w-full  mt-4">
      <div
        id="tableEditor"
        className="h-[110%] w-full lg:w-[80%] mx-auto  shadow-xl px-4 text-black bg-white rounded-2xl "
      />
    </div>
  );
};
export default memo(Table);
