"use server"
import { connectToDb } from "@/db/db";
import { Blog } from "@/models/blog.model";


export const updateBlog = async ({ title, slug, category, itemId, isActive, thumbnail, altText, content, metaTitle, metaDescription, tags, author }) => {
  await connectToDb()
  try {
    const data = await Blog.findOneAndUpdate({ itemId }, { title, itemId, slug, category, thumbnail, altText, content, isActive, metaTitle, metaDescription, tags, author }, { upsert: true, timestamps: true, new: true })

    return JSON.parse(JSON.stringify({
      success: true,
      data: data
    }))
  } catch (error) {
    throw new Error({
      success: false,
      error: error.message
    })

  }

}

export const getAllBlogs = async (_id) => {
  await connectToDb()
  try {

    const data = await Blog.find()
    return JSON.parse(JSON.stringify(data))


  } catch (error) {
    throw new Error({
      success: false,
      error: error.message
    })
  }
}

export const getPublishedBlogs = async () => {
  await connectToDb()
  try {
    const data = await Blog.find({ isActive: true })
    return JSON.parse(JSON.stringify(data))

  } catch (error) {
    throw new Error({
      success: false,
      error: error.message
    })

  }
}
export const getDraftBlogs = async (_id) => {
  await connectToDb()
  try {

    const data = await Blog.find({ isActive: false })
    return JSON.parse(JSON.stringify(data))


  } catch (error) {
    throw new Error({
      success: false,
      error: error.message
    })

  }
}
export const getBlogById = async (_id) => {
  await connectToDb()
  try {

    const data = await Blog.findOne({ _id })
    return JSON.parse(JSON.stringify(data))

  } catch (error) {
    throw new Error({
      success: false,
      error: error.message
    })

  }
}
export const getPopularBlogs = async () => {
  await connectToDb()
  try {

    const data = await Blog.find().sort({ likes: "desc" })
    return JSON.parse(JSON.stringify(data))

  } catch (error) {
    throw new Error({
      success: false,
      error: error.message
    })
  }
}

