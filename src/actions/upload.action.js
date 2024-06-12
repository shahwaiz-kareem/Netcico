"use server";
import { Bio } from "@/models/biography.model";
import { revalidatePath } from "next/cache";
import path from "path";
import sharp from "sharp";

export const uploadThumbnail = async (isUpdate, data, type, height, width) => {
  const file = data.get("file");

  if (isUpdate && data.getAll("file").length === 0)
    return {
      success: true,
    };

  if (!file || file.name == undefined)
    return {
      success: false,
      message: "no file uploaded",
    };

  try {
    const name = `thumbnail_${type}_${Date.now().toString()}.webp`;
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
        .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toFile(pathname);

      return {
        path: `/uploads/gallery/${name}`,
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };

  try {
    for (let i = 0; i < files.length; i++) {
      const urlObj = await writeImage(files[i]);

      await Bio.findOneAndUpdate(
        { itemId: id },
        {
          $push: { gallery: { caption: captionArr[i], url: urlObj.path } },
        }
      );
    }
    revalidatePath(pathname);
    return JSON.parse(JSON.stringify({ success: true }));
  } catch (error) {
    console.log(error);
    return JSON.parse(JSON.stringify({ success: false, error: error.message }));
  }
};
