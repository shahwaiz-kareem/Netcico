import axios from "axios";
import Header from "editorjs-header-with-alignment";
import Paragraph from "@editorjs/paragraph";
import customeImageTool from "./customeTools";
import Link from "@editorjs/link";
import NestedList from "@editorjs/nested-list";
import Embed from "@editorjs/embed";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import RawTool from "@editorjs/raw";
import ColorPlugin from "editorjs-text-color-plugin";
import Table from "editorjs-table";
import TextVariantTune from "@editorjs/text-variant-tune";
import FontSize from "editorjs-inline-font-size-tool";
import Underline from "@editorjs/underline";
import CodeTool from "@rxpm/editor-js-code";
import Hyperlink from "editorjs-hyperlink";
import ChangeCase from "editorjs-change-case";

export const Create_JS_TOOLS = {
  header: {
    class: Header,
  },

  changeCase: {
    class: ChangeCase,
    config: {
      showLocaleOption: true,
      locale: "tr",
    },
  },
  raw: RawTool,
  embed: {
    class: Embed,
    inlineToolbar: true,
  },

  list: {
    class: NestedList,
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },

  hyperlink: {
    class: Hyperlink,
    config: {
      shortcut: "CMD+L",
      target: "_blank",
      rel: "nofollow",
      style: "color:black;",
      availableTargets: ["_blank", "_self"],
      availableRels: ["author", "noreferrer"],
      validate: true,
    },
  },
  underline: Underline,

  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  textVariant: TextVariantTune,
  fontSize: FontSize,

  checkList: CheckList,
  code: {
    class: CodeTool,
    config: {
      modes: {
        js: "JavaScript",
        py: "Python",
        go: "Go",
        cpp: "C++",
        cs: "C#",
        md: "Markdown",
      },
      defaultMode: "js",
    },
  },
  Color: {
    class: ColorPlugin,
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
      ],
      defaultColor: "#FF1300",
      type: "text",
      customPicker: true,
    },
  },
  
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },

 
  delimiter: Delimiter,
  link: Link,

  image: {
    class: customeImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          const data = new FormData();
          data.set("file", file);
          const responce = await axios.post("/api/upload/image/create", data, {
            withCredentials: false,
          });

          if (responce.data.success === 1) {
            return responce.data;
          }
        },

        async uploadByUrl(url) {
          const responce = await axios.post("/api/upload/image/createByUrl", {
            url,
          });
          if (responce.data.success === 1) {
            return responce.data;
          }
        },
      },
      inlineToolbar: true,
    },
  },
};
