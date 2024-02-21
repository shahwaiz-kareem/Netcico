"use server";
import { Bio } from "@/models/biography.model";
import { revalidatePath } from "next/cache";
import path from "path";
import sharp from "sharp";

export const uploadThumbnail = async (data, type, height, width) => {
  console.log(data);
  const file = data.get("file");
  if (!file || file.name == "undefined")
    return {
      success: false,
      message: "no file uploaded",
    };

  try {
    const name = `thumbnail_${type}_${Date.now().toString()}`;
    const pathname = path.join(
      process.cwd(),
      "/public/uploads/thumbnail",
      name
    );
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await sharp(buffer)
      .webp()
      .resize(width, height)
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(pathname);
    return {
      success: true,
      message: "Your image has been resized and uploaded successfully!",
      thumbnailUrl: `${process.env.NEXT_PUBLIC_HOST}/uploads/thumbnail/${name}`,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
export const uploadGallery = async (id, formData, captionArr, pathname) => {
  const files = formData.getAll("file");
  if (!files)
    return {
      success: false,
      message: "no file uploaded",
    };

  const writeImage = async (file) => {
    try {
      const name = `image_gallery_${Date.now().toString()}`;
      const pathname = path.join(
        process.cwd(),
        "/public/uploads/gallery",
        name
      );
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await sharp(buffer)
        .webp()
        // .resize(width, height)
        .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toFile(pathname);

      return `/uploads/gallery/${name}`;
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };

  for (let i = 0; i < files.length; i++) {
    const url = await writeImage(files[i]);

    const data = await Bio.findOneAndUpdate(
      { itemId: id },
      {
        $push: { gallery: { caption: captionArr[i], url } },
      }
    );
  }
  revalidatePath(pathname);
  return JSON.parse(JSON.stringify({ success: true }));
};
