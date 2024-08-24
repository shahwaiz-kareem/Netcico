"use server";
import { connectToDb } from "@/db/db";
import { Newsletter } from "@/models/newsletter.model";

export const sendEmail = async (onPage, slug, feedback) => {
  await connectToDb();
  try {
    await Newsletter.create({ slug, feedback, onPage });
  } catch (error) {
    throw new Error(error);
  }
};
