"use server";

import { Category } from "@/models/category.model";
import { revalidatePath } from "next/cache";

export const getCategories = async (type) => {
  try {
    const data =
      type === "all" ? await Category.find() : await Category.find({ type });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        error: error.message,
      })
    );
  }
};
export const addCategory = async (category, type) => {
  try {
    await Category.create({ category, type });
    return JSON.parse(
      JSON.stringify({
        success: true,
        message: "Category has been added to database!",
      })
    );
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        message: error.message,
      })
    );
  }
};

export const deleteCategory = async (_id) => {
  try {
    const data = await Category.findByIdAndDelete({ _id });
    revalidatePath("/dashboard/category");
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        error: error.message,
      })
    );
  }
};
