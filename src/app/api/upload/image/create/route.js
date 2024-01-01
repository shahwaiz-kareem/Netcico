import { writeFile } from "fs/promises";
import { NextResponse as res } from "next/server";
import path from "path"
import sharp from "sharp";

export const POST = async (request,) => {
  const data = await request.formData()
  const file = data.get("file");
  if (!file) return "no file found!"
  try {
    const date = Date.now().toString();
    const imageName = `_wysiwyg_${date}`;
    const pathname = path.join(process.cwd(), "/public/uploads/wysiwyg", imageName);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    let jsonResponse = {};
    const { format, } = await sharp(buffer).metadata();
    if (format == "gif") {
      await writeFile(pathname, buffer)
      jsonResponse = {
        success: 1,
        file: { url: `${process.env.HOSTNAME}/uploads/wysiwyg/${imageName}` }
      };
    }
    else {
      await sharp(buffer, { animated: true })
        .webp()
        .toFile(pathname);
      jsonResponse = {
        success: 1,
        file: { url: `${process.env.HOSTNAME}/uploads/wysiwyg/${imageName}` }
      };
    }
    return res.json(jsonResponse);
  } catch (error) {
    return res.json({
      success: 0,
      error: error.message
    });
  }


}
