"use server";
import { connectToDb } from "@/db/db";
import { User } from "@/models/user.model";
export const createUser = async ({ name, email, password }) => {
  await connectToDb();
  try {
    let user = await User.create({
      name,
      email,
      password,
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
export const getUserByEmail = async (email) => {
  await connectToDb();
  try {
    let user = await User.findOne({ email }).lean();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
