import mongoose from "mongoose";

const BioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, min: 2, max: 30 },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    itemId: { type: String, unique: true, required: true },
    thumbnail: { type: String, required: true },

    altText: { type: String, required: true },
    table: [
      {
        heading: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    gallery: [
      {
        caption: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    category: { type: String, required: true },
    fans: [],
    views: [],
    share: [],
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Bio =
  mongoose.models.Biography || mongoose.model("Biography", BioSchema);
