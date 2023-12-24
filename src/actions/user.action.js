"use server"
import { connectToDb } from "@/db/db";
import { User } from "@/models/user.model";
export const createUser = async ({ name, email, password, image, pathname }) => {
  await connectToDb()
  try {
    let user = await User.create({
      name,
      email,
      password,
      image
    })
    return user
  } catch (error) {
    return error
  }
}
