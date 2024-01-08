import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  type: { type: String, required: true },
});

export const Category =
  mongoose.models.category || mongoose.model("category", categorySchema);
