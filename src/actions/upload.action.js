"use server"
import path from "path"
import { writeFile } from "fs/promises"
import sharp from "sharp";

export const uploadThumbnail = async (data, type, height, width) => {
  const file = data.get("file");
  if (!file || file.name == 'undefined') return {
    success: false,
    message: "no file uploaded"
  }

  try {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const name = `thumbnail_${type}_${Date.now().toString()}.webp`;
    const pathname = path.join(process.cwd(), "/public/uploads/thumbnail", name)
    await writeFile(pathname, buffer)
    await sharp(pathname)
      .webp({ quality: 100, alphaQuality: 100 })
      .resize(width, height)
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })

    return {
      success: true,
      message: "Your image has been resized and uploaded successfully!",
      thumbnailUrl: `${process.env.HOSTNAME}/uploads/thumbnail/${name}`
    }

  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }

}
