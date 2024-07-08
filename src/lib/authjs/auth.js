import bcrypt from "bcryptjs";
import { getUserByEmail as getUser } from "@/actions/user.action";

export async function getUserByEmail(email) {
  const user = await getUser(email);
  return user;
}

export async function verifyPassword(plainPassword, hashedPassword) {
  const isValid = await bcrypt.compare(plainPassword, hashedPassword);
  return isValid;
}
