"use server"
import { connectToDb } from "@/db/db";
import { Blog } from "@/models/blog.model";
export const updateBlog = async (userData, _id) => {
  await connectToDb()
  try {
    const data = await Blog.findOneAndUpdate(_id, userData, { upsert: true })
    console.log(data)
    return {
      success: true,
      data: data
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }

}
export const getBlogs = async (_id) => {
  await connectToDb()
  try {

    const data = await Blog.findOneAndUpdate(_id, userData, { upsert: true })
    return {
      success: true,
      data: data
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }

  }
}
