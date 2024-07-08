"use server";
import { getUserByEmail as getUser } from "@/lib/authjs/auth";
import bcrypt from "bcryptjs";
import { createUser } from "./user.action";
export const registerUserToDB = async ({ name, email, password }) => {
  const user = await getUser(email);
  if (user)
    return JSON.parse(
      JSON.stringify({
        success: false,
        message:
          "User with this email already exist. Please enter another email.",
      })
    );

  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = await createUser({ name, email, password: hashedPass });

    return JSON.parse(
      JSON.stringify({
        success: true,
        message: "You have been registered successfully!",
        user: newUser,
      })
    );
  } catch (error) {
    throw new Error({
      success: false,
      message: error.message,
    });
  }
};
