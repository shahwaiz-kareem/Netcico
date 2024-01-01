"use server"
import path from "path"
import sharp from "sharp";

export const uploadThumbnail = async (data, type, height, width) => {
  console.log(data);
  const file = data.get("file");
  if (!file || file.name == 'undefined') return {
    success: false,
    message: "no file uploaded"
  }

  try {
    const name = `thumbnail_${type}_${Date.now().toString()}`;
    const pathname = path.join(process.cwd(), "/public/uploads/thumbnail", name)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await sharp(buffer)
      .webp()
      .resize(width, height)
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(pathname)
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
