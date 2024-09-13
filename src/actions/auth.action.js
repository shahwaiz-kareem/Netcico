"use server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
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

export const authenticateAdmin = async (password) => {
  try {
    const cookiesStore = cookies();

    if (password === process.env.ADMIN_PASS) {
      const token = await new SignJWT({ role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));
      cookiesStore.set("dashboard-token", token);
      return JSON.parse(JSON.stringify({ success: true }));
    } else {
      return JSON.parse(
        JSON.stringify({ success: false, error: "Password is incorrect" })
      );
    }
  } catch (err) {
    return JSON.parse(JSON.stringify({ success: false, error: err.message }));
  }
};
