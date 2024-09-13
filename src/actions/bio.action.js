"use server";
import { connectToDb } from "@/db/db";
import { Bio } from "@/models/biography.model";
import { revalidatePath } from "next/cache";
import { unlink } from "fs/promises";
import { join } from "path";
import { constants } from "http2";

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
        author,
      },
      { upsert: true, timestamps: true, new: true }
    );

    return JSON.parse(
      JSON.stringify({
        success: true,
        message: "Form data has been sent!",
      })
    );
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        error: error.message,
      })
    );
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

export const getBioBySlug = async (slug) => {
  await connectToDb();
  try {
    if (!slug || slug.length === 0) return {};

    const data = await Bio.findOne({ slug }).select(
      " -itemId  -altText -isActive -views -share -fans"
    );
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
    const data = await Bio.findOne({ _id }).select(
      "-share -views -fans -createdAt -updatedAt -__v -_id -isActive"
    );
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

export const getPopularBiosByViews = async (pageNumber, pageLimit) => {
  await connectToDb();
  try {
    const skipAmount = (pageNumber - 1) * pageLimit;
    const data = await Bio.find({ isActive: true })
      .sort({ views: "desc" })
      .skip(skipAmount)
      .limit(pageLimit)
      .lean();

    const newDocs = data.map((document) => {
      document.viewsCount = document.views.length;
      document.fansCount = document.fans.length;
      delete document.views;
      delete document.fans;
      return document;
    });

    return JSON.parse(JSON.stringify(newDocs));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};

export const countFansAndViews = async (_id) => {
  await connectToDb();
  try {
    const doc = await Bio.findById(_id, { views: 1, fans: 1 });
    const fansCount = doc.fans.length;
    const viewsCount = doc.views.length;

    return JSON.parse(JSON.stringify({ success: true, fansCount, viewsCount }));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};

export const checkBioFan = async (_id, user_id) => {
  await connectToDb();

  try {
    const bio = await Bio.findOne({ _id }, { fans: 1 });
    let isLiked = false;

    if (bio && bio.fans.includes(user_id)) {
      isLiked = true;
    }

    return {
      success: true,
      isFan: isLiked,
    };
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const searchBio = async (pageNumber, pageLimit, text) => {
  await connectToDb();
  try {
    const skipAmount = (pageNumber - 1) * pageLimit;
    const data = await Bio.find({
      name: { $regex: text, $options: "i" },
      isActive: true,
    })
      .sort({ views: "desc" })
      .skip(skipAmount)
      .limit(pageLimit)
      .lean();

    const newDocs = data.map((document) => {
      document.viewsCount = document.views.length;
      document.fansCount = document.fans.length;
      delete document.views;
      delete document.fans;
      return document;
    });

    return JSON.parse(JSON.stringify(newDocs));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};

export const addBioFan = async (_id, user_id, path) => {
  await connectToDb();

  try {
    const update = await Bio.findOneAndUpdate(
      { _id, fans: { $elemMatch: { $eq: user_id } } },
      { $pull: { fans: user_id } },
      { new: true }
    );

    let action = "removed";

    if (!update) {
      await Bio.findByIdAndUpdate(
        _id,
        { $push: { fans: user_id } },
        { new: true }
      );
      action = "added";
    }
    revalidatePath(path);
    revalidatePath("(root)/");
    return { success: true, action };
  } catch (error) {
    return { success: false, error: error.message };
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
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
