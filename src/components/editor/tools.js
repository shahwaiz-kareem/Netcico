"use client"
import Paragraph from "@editorjs/paragraph";
import Header from "editorjs-header-with-alignment"
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import CheckList from "@editorjs/checklist";
import VideoTool from 'editorjs-video';
import MermaidTool from 'editorjs-mermaid';
import axios from "axios";
import customeImageTool from "./customeTools";
export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  checkList: CheckList,
  list: List,
  header: {
    class: Header,

  },
  delimiter: Delimiter,
  link: Link,
  warning: Warning,
  mermaid: MermaidTool,
  image: {
    class: customeImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          const data = new FormData();
          data.set("file", file)
          const responce = await axios.post("http://localhost:3000/api/upload/image/create", data, {
            withCredentials: false
          })

          if (responce.data.success === 1) {
            return responce.data
          }
        },

        async uploadByUrl(url) {
          const responce = await axios.post("http://localhost:3000/api/upload/image/createByUrl", { url })
          if (responce.data.success === 1) {
            return responce.data
          }

        }
      }
      ,
      inlineToolbar: true,
    }

  },
  video: {
    class: VideoTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
      }
    }
  }

};


