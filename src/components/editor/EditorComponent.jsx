"use client"
import { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import MermaidTool from "editorjs-mermaid";
import Undo from 'editorjs-undo';
import Script from 'next/script'


const EditorComponent = ({ data, onChange, tools }) => {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: tools,
        data: data,
        autofocus: true,
        minHeight: 350,
        tunes: ['textVariant'],
        inlineToolbar: true,
        onChange: async (api) => {
          const data = await api.saver.save();
          onChange(data)
        },
        onReady: () => {
          MermaidTool.config({ 'theme': 'neutral' })
          new Undo({ editor });
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
  return <>
    <div id="editorjs" className="h-[110%] w-full lg:w-[65%] mx-auto  shadow-xl px-2 text-black bg-white rounded-2xl " />
    <Script src="https://cdn.jsdelivr.net/npm/editorjs-style@latest" />
  </>
};
export default memo(EditorComponent)
