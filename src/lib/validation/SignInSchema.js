import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a correct email" }),
  password: z.string(),
});
