import mongoose from "mongoose";

const forumSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, required: true, },
  text: { type: String, required: true, unique: true },
  parentId: { type: mongoose.Schema.Types.ObjectId },
  children: [{ type: mongoose.Schema.Types.ObjectId }],
  metaTitle: { type: String, required: true, },
  metaDescription: { type: String, required: true, },
  category: { type: String, required: true },
})


export const Forum = mongoose.models.Forum || mongoose.model("Forum", forumSchema)
