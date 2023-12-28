import { NextResponse as res } from "next/server";
import fs from "fs"
import path from "path";
import axios from "axios";
import sharp from "sharp";


export const POST = async (req) => {
  const data = await req.json();
  const imageUrl = data.url
  try {

    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'stream',
    });
    const extension = response.headers['content-type'].split("/")[1]
    const name = `img_${Date.now().toString()}.${extension}`;
    const pathname = path.join(process.cwd(), "/public/uploads/wysiwyg", name)

    setTimeout(() => {
      response.data.pipe(
        sharp({
          failOnError: false,
          force: false,
          format: extension,
        }).flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .resize(1280, 720)
      ).pipe(
        fs.createWriteStream(pathname)
          .on('finish', () => {
            console.log('Image downloaded and saved successfully')
          })
          .on('error', (error) => {
            return error.message
          })
      );
    }, 0);


    return res.json({
      success: 1,
      file: {
        url: `${process.env.HOSTNAME}/uploads/wysiwyg/${name}`
      }
    })

  } catch (error) {
    console.log(error);
    return res.json({
      success: 0,
      error: error.message
    })
  }

}
