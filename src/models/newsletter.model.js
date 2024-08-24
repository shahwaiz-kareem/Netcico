import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    email: { type: String, required: true },
    onPage: { type: String, required: true },
  },
  { timestamps: true }
);

export const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);
