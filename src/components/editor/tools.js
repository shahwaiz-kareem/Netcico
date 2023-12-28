"use client"
import Header from "editorjs-header-with-alignment"
import Paragraph from "@editorjs/paragraph";
import customeImageTool from "./customeTools";
import Link from "@editorjs/link";
import NestedList from '@editorjs/nested-list';
import Embed from '@editorjs/embed';
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import CheckList from "@editorjs/checklist";
import AudioPlayer from 'editorjs-audio-player';
import VideoTool from 'editorjs-video';
import MermaidTool from 'editorjs-mermaid';
import ColorPlugin from 'editorjs-text-color-plugin';
import Tooltip from 'editorjs-tooltip';
import axios from "axios";
import ImageGallery from "editorjs-gallery";
import Table from "editorjs-table";
import TextVariantTune from '@editorjs/text-variant-tune';
import EJLaTeX from "editorjs-latex";
import FontSize from "editorjs-inline-font-size-tool";
import Underline from '@editorjs/underline';
import InlineCode from '@editorjs/inline-code';
import editorjsCodeflask from '@calumk/editorjs-codeflask';
import ButtonLink from "editorjs-button"
import Hyperlink from 'editorjs-hyperlink'
import ChangeCase from 'editorjs-change-case';
import TextSpolier from 'editorjs-inline-spoiler-tool';
export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
  },
  linkButton: ButtonLink,
  changeCase: {
    class: ChangeCase,
    config: {
      showLocaleOption: true,
      locale: 'tr'
    }
  },
  // style: EditorJSStyle.StyleInlineTool,
  embed: {
    class: Embed,
    inlineToolbar: true
  },
  audioplayer: AudioPlayer,
  inlineCode: {
    class: InlineCode,
    shortcut: 'CMD+SHIFT+M',
  },
  list: {
    class: NestedList,
    inlineToolbar: true,
    config: {
      defaultStyle: 'unordered'
    },
  },
  TextSpolier: TextSpolier,
  hyperlink: {
    class: Hyperlink,
    config: {
      shortcut: 'CMD+L',
      target: '_blank',
      rel: 'nofollow',
      style: 'color:black;',
      availableTargets: ['_blank', '_self'],
      availableRels: ['author', 'noreferrer'],
      validate: false,
    }
  },
  underline: Underline,
  Math: {
    class: EJLaTeX,
    shortcut: 'CMD+SHIFT+M',
    config: {
      css: '.math-input-wrapper { padding: 5px; }'
    }
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  textVariant: TextVariantTune,
  fontSize: FontSize,

  checkList: CheckList,
  code: editorjsCodeflask,
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: ['#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
      defaultColor: '#FF1300',
      type: 'text',
      customPicker: true // add a button to allow selecting any colour  
    }
  },
  Marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      defaultColor: '#FFBF00',
      type: 'marker',
      icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
    }
  },

  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  gallery: {
    class: ImageGallery,
    config: {
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile',
      }
    },
  },
  tooltip: {
    class: Tooltip,
    config: {
      location: 'right',
      highlightColor: '#FFEFD5',
      underline: true,
      backgroundColor: '#154360',
      textColor: '#FDFEFE',
    }
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

// class LinkTool extends EditorJS.InlineTool {
//   constructor() {
//     super();
//     this.execute = (options) => {
//       const url = prompt('Enter the link URL:');
//       if (url) {
//         options.data = {
//           text: options.data.text,
//           link: url,
//         };
//       }
//     };
//   }
// }

// // Register the tool
// EditorJS.builtinPlugins.register(LinkTool);


//Blocks:
// let b = {
//   "time": 1703573923399,
//   "blocks": [
//     {
//       "id": "UHyaATP6Zx",
//       "type": "paragraph",
//       "data": {
//         "text": "<font size=\"5\">what are the most important things to be more productive?</font>"
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "dwCtHR5pq3",
//       "type": "image",
//       "data": {
//         "file": {
//           "url": "http://localhost:3000/uploads/wyswyg/1703571555183"
//         },
//         "caption": "Image of a person using advance technology",
//         "withBorder": false,
//         "stretched": false,
//         "withBackground": false
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "1QWpE_1bWv",
//       "type": "paragraph",
//       "data": {
//         "text": "Programmer must be productive to survive in this era of AI and machine learning and what are the best things which every programmers should use to&nbsp; be more productive.We will be discussing&nbsp; all these stuffs today in this blog.&nbsp;"
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "8X7PprQufK",
//       "type": "list",
//       "data": {
//         "style": "ordered",
//         "items": [
//           "Waking up early in the morning",
//           "Making plans",
//           "Collaboration",
//           "Working in a team",
//           "Practicing"
//         ]
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "qln2YEslam",
//       "type": "paragraph",
//       "data": {
//         "text": "<font size=\"4\"><font style=\"color: rgb(76, 175, 80);\"></font><font style=\"color: rgb(76, 175, 80);\"></font><b><font style=\"color: rgb(76, 175, 80);\">Good to know:</font></b>&nbsp;&nbsp;We should be doing all these things consistently for better results.</font><br>"
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "DFJsVUxsLf",
//       "type": "paragraph",
//       "data": {
//         "text": "<i>\"Once you knew the formula to engage yourself more in your skill then you are good to&nbsp; go further for new opportunities.\"&nbsp; said by</i> <i>Shahwaiz Kareem.</i><i></i>"
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "a4w6nog4Po",
//       "type": "table",
//       "data": {
//         "content": [
//           [
//             "<b>Name</b>",
//             "<b>Shahwaiz&nbsp;Kareem</b>"
//           ],
//           [
//             "Age",
//             "32"
//           ],
//           [
//             "Watched",
//             "Game of Throne"
//           ],
//           [
//             "Profession",
//             "Programmer"
//           ],
//           [
//             "height",
//             "5.6 feet"
//           ]
//         ]
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "6ukGYj2DtL",
//       "type": "Math",
//       "data": {
//         "math": "a^2+2ab+b^2"
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "GPP68_4rVN",
//       "type": "code",
//       "data": {
//         "code": "let a = \"love\"\nlet b = \"is\"\nlet c = \"life\"\nconsole.log(a+b+c)\n\n",
//         "language": "javascript",
//         "showlinenumbers": true
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "LFkAMleDbx",
//       "type": "image",
//       "data": {
//         "file": {
//           "url": "http://localhost:3000/uploads/wyswyg/1703573426778"
//         },
//         "caption": "",
//         "withBorder": false,
//         "stretched": false,
//         "withBackground": false
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "grK5VZk2HS",
//       "type": "delimiter",
//       "data": {},
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "ErYgl4F0ai",
//       "type": "image",
//       "data": {
//         "file": {
//           "url": "http://localhost:3000/uploads/wyswyg/img_1703573505418.png"
//         },
//         "caption": "",
//         "withBorder": false,
//         "stretched": false,
//         "withBackground": false
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "n7P6PjGmxl",
//       "type": "image",
//       "data": {
//         "file": {
//           "url": "http://localhost:3000/uploads/wyswyg/img_1703573520853.png"
//         },
//         "caption": "",
//         "withBorder": false,
//         "stretched": false,
//         "withBackground": false
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     },
//     {
//       "id": "_Tru7jh22u",
//       "type": "code",
//       "data": {
//         "code": "import { NextResponse as res } from \"next/server\";\nimport fs from \"fs\"\nimport path from \"path\";\nimport axios from \"axios\";\nimport sharp from \"sharp\";\n\n\nexport const POST = async (req) => {\n  const data = await req.json();\n  const imageUrl = data.url\n  try {\n\n    const response = await axios({\n      url: imageUrl,\n      method: 'GET',\n      responseType: 'stream',\n    });\n    const extension = response.headers['content-type'].split(\"/\")[1]\n    const name = `img_${Date.now().toString()}.${extension}`;\n    const pathname = path.join(process.cwd(), \"/public/uploads/wyswyg\", name)\n\n    setTimeout(() => {\n      response.data.pipe(\n        sharp({\n          failOnError: false,\n          force: false,\n          format: extension,\n          quality: 100,\n        }).resize(1280, 720)\n      ).pipe(\n        fs.createWriteStream(pathname)\n          .on('finish', () => {\n            console.log('Image downloaded and saved successfully')\n          })\n          .on('error', (error) => {\n            return error.message\n          })\n      );\n\n    }, 0);\n\n\n    return res.json({\n      success: 1,\n      file: {\n        url: `${process.env.HOSTNAME}/uploads/wyswyg/${name}`\n      }\n    })\n\n  } catch (error) {\n    console.log(error);\n    return res.json({\n      success: 0,\n      error: error.message\n    })\n  }\n\n}\n",
//         "language": "javascript",
//         "showlinenumbers": true
//       },
//       "tunes": {
//         "textVariant": ""
//       }
//     }
//   ],
//   "version": "2.28.2"
// }

