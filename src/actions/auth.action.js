"use server";

import bcrypt from "bcryptjs";
import { createUser } from "./user.action";
import { User } from "@/models/user.model";
export const registerUserToDB = async ({ name, email, password }) => {
  const user = await User.findOne({ email });
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
