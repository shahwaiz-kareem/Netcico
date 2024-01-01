"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export const ThemeContext = createContext()
let blocks = {
  "time": 1703573923399,
  "blocks": [
    {
      "id": "UHyaATP6Zx",
      "type": "paragraph",
      "data": {
        "text": "<font size=\"5\">what are the most important things to be more productive?</font>"
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "dwCtHR5pq3",
      "type": "image",
      "data": {
        "file": {
          "url": "http://localhost:3000/uploads/wyswyg/1703571555183"
        },
        "caption": "Image of a person using advance technology",
        "withBorder": false,
        "stretched": false,
        "withBackground": false
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "1QWpE_1bWv",
      "type": "paragraph",
      "data": {
        "text": "Programmer must be productive to survive in this era of AI and machine learning and what are the best things which every programmers should use to&nbsp; be more productive.We will be discussing&nbsp; all these stuffs today in this blog.&nbsp;"
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "8X7PprQufK",
      "type": "list",
      "data": {
        "style": "ordered",
        "items": [
          "Waking up early in the morning",
          "Making plans",
          "Collaboration",
          "Working in a team",
          "Practicing"
        ]
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "qln2YEslam",
      "type": "paragraph",
      "data": {
        "text": "<font size=\"4\"><font style=\"color: rgb(76, 175, 80);\"></font><font style=\"color: rgb(76, 175, 80);\"></font><b><font style=\"color: rgb(76, 175, 80);\">Good to know:</font></b>&nbsp;&nbsp;We should be doing all these things consistently for better results.</font><br>"
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "DFJsVUxsLf",
      "type": "paragraph",
      "data": {
        "text": "<i>\"Once you knew the formula to engage yourself more in your skill then you are good to&nbsp; go further for new opportunities.\"&nbsp; said by</i> <i>Shahwaiz Kareem.</i><i></i>"
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "a4w6nog4Po",
      "type": "table",
      "data": {
        "content": [
          [
            "<b>Name</b>",
            "<b>Shahwaiz&nbsp;Kareem</b>"
          ],
          [
            "Age",
            "32"
          ],
          [
            "Watched",
            "Game of Throne"
          ],
          [
            "Profession",
            "Programmer"
          ],
          [
            "height",
            "5.6 feet"
          ]
        ]
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "6ukGYj2DtL",
      "type": "Math",
      "data": {
        "math": "a^2+2ab+b^2"
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "GPP68_4rVN",
      "type": "code",
      "data": {
        "code": "let a = \"love\"\nlet b = \"is\"\nlet c = \"life\"\nconsole.log(a+b+c)\n\n",
        "language": "javascript",
        "showlinenumbers": true
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "LFkAMleDbx",
      "type": "image",
      "data": {
        "file": {
          "url": "http://localhost:3000/uploads/wyswyg/1703573426778"
        },
        "caption": "",
        "withBorder": false,
        "stretched": false,
        "withBackground": false
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "grK5VZk2HS",
      "type": "delimiter",
      "data": {},
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "ErYgl4F0ai",
      "type": "image",
      "data": {
        "file": {
          "url": "http://localhost:3000/uploads/wyswyg/img_1703573505418.png"
        },
        "caption": "",
        "withBorder": false,
        "stretched": false,
        "withBackground": false
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "n7P6PjGmxl",
      "type": "image",
      "data": {
        "file": {
          "url": "http://localhost:3000/uploads/wyswyg/img_1703573520853.png"
        },
        "caption": "",
        "withBorder": false,
        "stretched": false,
        "withBackground": false
      },
      "tunes": {
        "textVariant": ""
      }
    },
    {
      "id": "_Tru7jh22u",
      "type": "code",
      "data": {
        "code": "import { NextResponse as res } from \"next/server\";\nimport fs from \"fs\"\nimport path from \"path\";\nimport axios from \"axios\";\nimport sharp from \"sharp\";\n\n\nexport const POST = async (req) => {\n  const data = await req.json();\n  const imageUrl = data.url\n  try {\n\n    const response = await axios({\n      url: imageUrl,\n      method: 'GET',\n      responseType: 'stream',\n    });\n    const extension = response.headers['content-type'].split(\"/\")[1]\n    const name = `img_${Date.now().toString()}.${extension}`;\n    const pathname = path.join(process.cwd(), \"/public/uploads/wyswyg\", name)\n\n    setTimeout(() => {\n      response.data.pipe(\n        sharp({\n          failOnError: false,\n          force: false,\n          format: extension,\n          quality: 100,\n        }).resize(1280, 720)\n      ).pipe(\n        fs.createWriteStream(pathname)\n          .on('finish', () => {\n            console.log('Image downloaded and saved successfully')\n          })\n          .on('error', (error) => {\n            return error.message\n          })\n      );\n\n    }, 0);\n\n\n    return res.json({\n      success: 1,\n      file: {\n        url: `${process.env.HOSTNAME}/uploads/wyswyg/${name}`\n      }\n    })\n\n  } catch (error) {\n    console.log(error);\n    return res.json({\n      success: 0,\n      error: error.message\n    })\n  }\n\n}\n",
        "language": "javascript",
        "showlinenumbers": true
      },
      "tunes": {
        "textVariant": ""
      }
    }
  ],
  "version": "2.28.2"
}
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Welcome to Netcioc.com! ",
        level: 3,
      },
    },
  ],
};
export const ThemeProvider = ({ children }) => {
  const SidebarRef = useRef(null)
  const [width, setWidth] = useState("w-[85%]")
  const [data, setData] = useState(INITIAL_DATA)
  const [submitSuccess, setSubmitSuccess] = useState({
    success: null,
    message: ""
  })
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [thumbnailFormData, setThumbnailFormData] = useState(new FormData())
  const [updatedThumb, setUpdatedThumb] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/dashboard") {
      SidebarRef.current.style.display = 'none';
    }
  }, [])
  // console.clear()
  // console.groupCollapsed(data)

  const toggleSidebar = () => {
    if (SidebarRef.current.style.display === 'none') {
      setWidth("w-full")
      SidebarRef.current.style.display = 'block';
    } else {
      setWidth("w-[85%]")
      SidebarRef.current.style.display = 'none';
    }
  }


  return (
    < ThemeContext.Provider value={{ toggleSidebar, SidebarRef, width, data, setData, thumbnailUrl, setThumbnailUrl, submitSuccess, setSubmitSuccess, thumbnailFormData, setThumbnailFormData, updatedThumb, setUpdatedThumb }}>
      {children}
    </ ThemeContext.Provider>
  )
}
