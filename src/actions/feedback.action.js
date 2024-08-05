"use server";
import { connectToDb } from "@/db/db";
import { FeedBack } from "@/models/feedback.model";

export const sendFeedback = async (onPage, slug, feedback) => {
  await connectToDb();
  try {
    await FeedBack.create({ slug, feedback, onPage });
  } catch (error) {
    throw new Error(error);
  }
};
