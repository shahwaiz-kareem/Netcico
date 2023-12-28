import { NextResponse as res } from "next/server";
import fs from "fs/promises"
import path from "path"



export const POST = async (request) => {


  const data = await request.formData()
  const file = data.get("file");
  let resObj = {};
  if (!file) { res.json({ success: false }) }
  try {
    const date = Date.now().toString();
    const imageName = `${date}`
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    let pathname = path.join(process.cwd(), "/public/uploads/wysiwyg", imageName)
    console.log(pathname)
    //TODO: resize the request image with sharp!
    await fs.writeFile(pathname, buffer)
    resObj = {
      success: 1,
      file: {
        url: `${process.env.HOSTNAME}/uploads/wysiwyg/${imageName}`
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
