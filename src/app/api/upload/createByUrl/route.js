import { NextResponse as res } from "next/server";
import https from "https"
import { createWriteStream } from "fs";
import path from "path";

export const POST = async (req) => {
  const url = await req.url;
  const name = `${Date.now().toString()}.png`;
  const pathname = path.join(__dirname, process.env.EDITOR_URL_PATH, name)
  const file = await createWriteStream(pathname);
  https.get(url, (responce) => {
    responce.pipe(file)

  })
  return res.json({
    msg: "ok"
  })
}
