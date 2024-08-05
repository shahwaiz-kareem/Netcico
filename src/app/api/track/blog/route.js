import { connectToDb } from "@/db/db";
import { NextResponse as res } from "next/server";
import { Blog } from "@/models/blog.model";
import { revalidatePath } from "next/cache";

export const POST = async (request) => {
  try {
    await connectToDb();
    const headers = request.headers;
    const token = headers.get("user-token");
    const slug = headers.get("slug");

    if (token && typeof token === "string" && slug) {
      const viewsObj = await Blog.findOne({ slug }).select("views -_id");
      if (viewsObj.views.includes(token))
        return res.json({ success: false, message: "already exist" });
      await Blog.findOneAndUpdate({ slug }, { $push: { views: token } });
      revalidatePath("(root)/");

      return res.json({ success: true, message: "successfully added token" });
    } else {
      return res.json({ success: false, message: "token not found" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
