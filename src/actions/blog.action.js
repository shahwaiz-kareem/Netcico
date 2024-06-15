"use server";
import { connectToDb } from "@/db/db";
import { Blog } from "@/models/blog.model";
import { revalidatePath } from "next/cache";
import { unlink } from "fs/promises";
import { join } from "path";

export const updateBlog = async ({
  title,
  slug,
  category,
  itemId,
  isActive,
  thumbnail,
  altText,
  content,
  metaTitle,
  metaDescription,

  author,
}) => {
  await connectToDb();
  try {
    const data = await Blog.findOneAndUpdate(
      { itemId },
      {
        title,
        itemId,
        slug,
        category,
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
        data: data,
      })
    );
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};

export const getAllBlogs = async (_id) => {
  await connectToDb();
  try {
    const data = await Blog.find();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};

export const getPublishedBlogs = async () => {
  await connectToDb();
  try {
    const data = await Blog.find({ isActive: true });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getDraftBlogs = async (_id) => {
  await connectToDb();
  try {
    const data = await Blog.find({ isActive: false });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getPublishedBlogsByCategory = async (category) => {
  await connectToDb();
  try {
    const data = await Blog.find({ isActive: true, category });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getBlogById = async (_id) => {
  await connectToDb();
  try {
    const data = await Blog.findById(_id).select(
      "-share -views -likes -createdAt -updatedAt -__v -_id -isActive"
    );
    revalidatePath(`/dashboard/blogs/update/${_id}`);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getBlogBySlug = async (slug) => {
  await connectToDb();
  try {
    const data = await Blog.findOne({ slug }).select(
      "-_id -itemId  -altText -isActive"
    );
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getPopularBlogsByLikes = async () => {
  await connectToDb();
  try {
    const data = await Blog.find({ isActive: true }).sort({ likes: "desc" });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const getPopularBlogsByViews = async (pageNumber, pageLimit) => {
  await connectToDb();
  try {
    const skipAmount = (pageNumber - 1) * pageLimit;
    const data = await Blog.find({ isActive: true })
      .sort({ views: "desc" })
      .skip(skipAmount)
      .limit(pageLimit);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message,
    });
  }
};
export const deleteBlog = async (id, pathname) => {
  await connectToDb();
  try {
    const { thumbnail } = await Blog.findOne({ _id: id });
    const thumbnailPath = join(
      process.cwd(),
      "public",
      new URL(thumbnail).pathname
    );
    console.log(thumbnail, thumbnailPath);
    await unlink(thumbnailPath);
    await Blog.findByIdAndRemove(id);
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
