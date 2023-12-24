import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import CheckList from "@editorjs/checklist";
import ImageTool from "@editorjs/image";
import axios from "axios";
export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  checkList: CheckList,
  list: List,
  header: Header,
  delimiter: Delimiter,
  link: Link,
  warning: Warning,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          const data = new FormData();
          data.set("file", file)
          const responce = await axios.post("http://localhost:3000/api/upload/create", data, {
            withCredentials: false
          })
          if (responce.data.success === 1) {
            return responce.data
          }
        }
      },
      async uploadByUrl(url) {
        const responce = await axios.post("http://localhost:3000/api/upload/createByUrl", url)
        if (responce.data.success === 1) {
          return responce.data
        }
      }
    }
  }
};
