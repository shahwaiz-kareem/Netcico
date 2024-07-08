import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }) // Adjusted to 3 characters
    .max(30, { message: "Name must be smaller than 30 characters" }),

  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#_^(){}:';,."/?&.-]+$/, {
      message:
        "Password must contain at least one letter, one number, and one special character",
    }),
  confirmPassword: z.string(),
});
