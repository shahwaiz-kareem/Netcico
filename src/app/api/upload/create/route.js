import { NextResponse as res } from "next/server";
import fs from "fs/promises"
import path from "path"
import { log } from "console";


export const POST = async (request) => {


  const data = await request.formData()
  const file = data.get("file");
  let resObj = {};
  if (!file) { res.json({ success: false }) }
  try {
    const date = Date.now().toString();
    const imageName = `${date}.png`
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    let pathname = path.join(__dirname, process.env.EDITOR_URL_PATH, imageName)
    console.log(pathname)
    //TODO: resize the request image with sharp!
    await fs.writeFile(pathname, buffer)
    resObj = {
      success: 1,
      file: {
        // url: `http://localhost:3000/uploads/editorjs/${file.name}`
        url: `http://localhost:3000/_next/image?url=/_next/static/media/roman.eb871b7e.png&w=1080&q=75`
      }
    }
  } catch (error) {
    resObj = {
      success: 0,
      message: error.message
    }
    res.json(resObj)
  }
  return res.json(resObj)
}
