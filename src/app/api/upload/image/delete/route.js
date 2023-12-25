import { NextResponse as res } from "next/server";
import { join } from "path";
import fs from "fs/promises"
export const DELETE = async (req) => {
  const data = await req.json()
  const imageUrl = data.url;
  const pathname = new URL(imageUrl).pathname;
  const path = join(process.cwd(), "public", pathname)
  try {
    await fs.unlink(path)
    return res.json({
      success: true,
      message: `image has been deleted from server `
    })
  } catch (error) {
    return res.json({
      success: false,
      error: error.message
    })
  }

}
