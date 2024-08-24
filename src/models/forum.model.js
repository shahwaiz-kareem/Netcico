import mongoose from "mongoose";

const forumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Forum",
      default: null,
    },
    upvotes: [],
    text: { type: String, required: true },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Forum" }],
    category: { type: String },
  },
  { timestamps: true }
);

export const Forum =
  mongoose.models.Forum || mongoose.model("Forum", forumSchema);
