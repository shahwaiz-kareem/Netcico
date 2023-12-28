import mongoose from "mongoose"

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true)
  if (!process.env.MONGODB_URI) return console.log("Mongo URI no found!")
  if (isConnected) return
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
  } catch (error) {
    isConnected = false;
    console.log(error)
  }
}
