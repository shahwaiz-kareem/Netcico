"use server";
import { connectToDb } from "@/db/db";
import { Bio } from "@/models/biography.model";
import { revalidatePath } from "next/cache";
import { unlink } from "fs/promises";
import { join } from "path";

export const updateBio = async ({
  name,
  slug,
  category,
  itemId,
  isActive,
  table,
  thumbnail,
  altText,
  content,
  metaTitle,
  metaDescription,
  tags,
  author,
}) => {
  await connectToDb();
  try {
    const data = await Bio.findOneAndUpdate(
      { itemId },
      {
        name,
        itemId,
        slug,
        category,
        table,
        thumbnail,
        altText,
        content,
        isActive,
        metaTitle,
        metaDescription,
        tags,
        author,
      },
      { upsert: true, timestamps: true, new: true }
    );

    return JSON.parse(
      JSON.stringify({
        success: true,
        data: data,
      })
    );
  } catch (error) {
    console.log(error);
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};

export const getAllBios = async () => {
  await connectToDb();
  try {
    const data = await Bio.find();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};

export const getPublishedBios = async () => {
  await connectToDb();
  try {
    const data = await Bio.find({ isActive: true });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getPublishedBiosByCategory = async (category) => {
  await connectToDb();
  try {
    const data = await Bio.find({ isActive: true, category });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getDraftBios = async (_id) => {
  await connectToDb();
  try {
    const data = await Bio.find({ isActive: false });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getBioById = async (_id) => {
  await connectToDb();
  try {
    const data = await Bio.findOne({ _id });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getPopularBiosByFans = async () => {
  await connectToDb();
  try {
    const data = await Bio.find({ isActive: true }).sort({ fans: "desc" });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getPopularBiosByViews = async () => {
  await connectToDb();
  try {
    const data = await Bio.find({ isActive: true }).sort({ views: "desc" });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const deleteBio = async (id, pathname) => {
  await connectToDb();
  try {
    const { thumbnail } = await Bio.findOne({ _id: id });
    const thumbnailPath = join(
      process.cwd(),
      "public",
      new URL(thumbnail).pathname
    );

    await unlink(thumbnailPath);
    await Bio.findByIdAndRemove(id);
    revalidatePath(pathname);
    return JSON.parse(
      JSON.stringify({
        success: true,
        message: "Your item has been deleted successfully from the database!",
      })
    );
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const deleteImageFromGallery = async (id, index, pathname) => {
  await connectToDb();

  try {
    const { gallery } = await Bio.findOne({ itemId: id });
    const imagePathname = gallery[index].url;
    const newGallery = gallery.filter((item, i) => {
      return index !== i;
    });

    const data = await Bio.findOneAndUpdate(
      { itemId: id },
      { $set: { gallery: newGallery } },
      { new: true }
    );

    const imagePath = join(process.cwd(), "public", imagePathname);
    await unlink(imagePath);
    revalidatePath(pathname);
    return JSON.parse(JSON.stringify(data.gallery));
  } catch (error) {
    console.log(error);
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
