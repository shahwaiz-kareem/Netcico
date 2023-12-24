import { Blog } from "@/models/blog.model";


export const updateBlog = async (userData, _id) => {
  try {
    const data = await Blog.findOneAndUpdate(_id, userData, { upsert: true })
    return data
  } catch (error) {
    return error.message
  }

}
export const getBlogs = async (_id) => {
  try {

    const data = await Blog.findOneAndUpdate(_id, userData, { upsert: true })
    return data
  } catch (error) {
    return error.message
  }

}
