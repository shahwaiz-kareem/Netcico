"use client";
import axios from "axios";
import Header from "editorjs-header-with-alignment";
import Paragraph from "@editorjs/paragraph";
import customeImageTool from "./customeTools";
import Link from "@editorjs/link";
import NestedList from "@editorjs/nested-list";
import Embed from "@editorjs/embed";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import CheckList from "@editorjs/checklist";
import RawTool from "@editorjs/raw";
import ColorPlugin from "editorjs-text-color-plugin";
import Tooltip from "editorjs-tooltip";
import Table from "editorjs-table";
import TextVariantTune from "@editorjs/text-variant-tune";
import FontSize from "editorjs-inline-font-size-tool";
import Underline from "@editorjs/underline";
import CodeTool from "@rxpm/editor-js-code";
import Hyperlink from "editorjs-hyperlink";
import ChangeCase from "editorjs-change-case";
import TextSpolier from "editorjs-inline-spoiler-tool";
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
  TextSpolier: TextSpolier,
  hyperlink: {
    class: Hyperlink,
    config: {
      shortcut: "CMD+L",
      target: "_blank",
      rel: "nofollow",
      style: "color:black;",
      availableTargets: ["_blank", "_self"],
      availableRels: ["author", "noreferrer"],
      validate: false,
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
  Marker: {
    class: ColorPlugin,
    config: {
      defaultColor: "#FFBF00",
      type: "marker",
      icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`,
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

  tooltip: {
    class: Tooltip,
    config: {
      location: "right",
      highlightColor: "#FFEFD5",
      underline: true,
      backgroundColor: "#154360",
      textColor: "#FDFEFE",
    },
  },
  delimiter: Delimiter,
  link: Link,
  warning: Warning,
  // mermaid: MermaidTool,
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
