import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword, getUserByEmail } from "@/lib/authjs/auth";

export const providerOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "youremail@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUserByEmail(credentials.email);
        if (
          user &&
          (await verifyPassword(credentials.password, user.password))
        ) {
          return user;
        } else {
          throw new Error("Invalid credentials!");
        }
      },
    }),
  ],
};
