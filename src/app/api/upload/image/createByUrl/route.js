import { NextResponse as res } from "next/server";
import path from "path";
import sharp from "sharp";

export const POST = async (req) => {
  const data = await req.json();
  const imageUrl = data.url;
  try {
    const fetchImage = await fetch(imageUrl);
    const bytes = await fetchImage.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const name = `wysiwyg_${Date.now().toString()}`;
    const pathname = path.join(process.cwd(), "/public/uploads/wysiwyg", name);
    let jsonResponse = {};

    const { format } = await sharp(buffer).metadata();
    if (format == "gif") {
      await writeFile(pathname, buffer);
      jsonResponse = {
        success: 1,
        file: {
          url: `${process.env.NEXT_PUBLIC_HOST}/uploads/wysiwyg/${imageName}`,
        },
      };
    } else {
      await sharp(buffer, { animated: true }).webp().toFile(pathname);
      jsonResponse = {
        success: 1,
        file: {
          url: `${process.env.NEXT_PUBLIC_HOST}/uploads/wysiwyg/${imageName}`,
        },
      };
    }
    return res.json(jsonResponse);
  } catch (error) {
    console.log(error);
    return res.json({
      success: 0,
      error: error.message,
    });
  }
};
