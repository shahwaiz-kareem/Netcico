import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    feedback: { type: String, required: true },
    onPage: { type: String, required: true },
  },
  { timestamps: true }
);

export const FeedBack =
  mongoose.models.FeedBack || mongoose.model("FeedBack", FeedbackSchema);
