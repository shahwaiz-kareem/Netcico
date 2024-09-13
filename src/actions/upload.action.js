"use server";
import { Bio } from "@/models/biography.model";
import { revalidatePath } from "next/cache";
import path from "path";
import sharp from "sharp";

export const uploadThumbnail = async (isUpdate, data, type, height, width) => {
  const file = data.get("file");

  if (isUpdate && data.getAll("file").length === 0) {
    return { success: true };
  }

  if (!file || file.name === undefined) {
    return { success: false, message: "No file uploaded" };
  }

  try {
    const timestamp = Date.now().toString();
    const webpName = `thumbnail_${type}_${timestamp}.webp`;
    const jpegName = `thumbnail_${type}_${timestamp}.jpeg`; // Fallback format
    const webpPath = path.join(
      process.cwd(),
      "/public/uploads/thumbnail",
      webpName
    );
    const jpegPath = path.join(
      process.cwd(),
      "/public/uploads/thumbnail",
      jpegName
    );

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // WebP Processing with aspect ratio preservation and quality optimization
    await sharp(buffer)
      .resize(width, height, { fit: "inside" })
      .webp({ quality: 85 })
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(webpPath);

    // Fallback JPEG Processing
    await sharp(buffer)
      .resize(width, height, { fit: "inside" })
      .jpeg({ quality: 80, progressive: true })
      .toFile(jpegPath);

    return {
      success: true,
      message: "Your image has been resized and uploaded successfully!",
      thumbnailUrl: `${process.env.NEXT_PUBLIC_HOST}/uploads/thumbnail/${webpName}`,
      fallbackUrl: `${process.env.NEXT_PUBLIC_HOST}/uploads/thumbnail/${jpegName}`, // Fallback URL
    };
  } catch (error) {
    console.error("Image upload error:", error);
    return {
      success: false,
      message: "Error uploading image: " + error.message,
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
        .webp({ quality: 85 })

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
