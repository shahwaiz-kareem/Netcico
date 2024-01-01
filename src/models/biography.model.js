import mongoose from "mongoose";

const BioSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 2, max: 30 },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true, },
  thumbnail: { type: String, required: true, },
  altText: { type: String, required: true, },
  metaTitle: { type: String, required: true, },
  metaDescription: { type: String, required: true, },
  category: { type: String, required: true },
  isActive: {
    type: Boolean,
    default: false
  }
})


export const Biography = mongoose.models.Biography || mongoose.model("Biography", BioSchema)
