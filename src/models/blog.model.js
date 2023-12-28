import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true, min: 2, max: 30 },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true, },
  author: { type: String, required: true, },
  thumbnail: { type: String, required: true, },
  tags: { type: String, required: true },
  altText: { type: String, required: true, },
  metaTitle: { type: String, required: true, },
  metaDescription: { type: String, required: true, },
  category: { type: String, required: true },
  active: {
    type: Boolean,
    default: false
  }
})


export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema)
