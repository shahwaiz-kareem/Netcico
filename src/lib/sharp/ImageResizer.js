import sharp from "sharp"

export const imageResizer = async (data, desiredWidth, desiredHeight) => {
  const metadata = await sharp(`${inputPath}/${fileName}`).metadata();
  console.log(metadata);
  try {
    await sharp(data)
      .resize(desiredWidth, desiredHeight, {
        fit: "fill",
        kernel: "nearest"
      }).png(16)
      .toFile("../../public/upload/image")
    return {
      success: true
    };
  } catch (error) {
    return error.message
  }
}
