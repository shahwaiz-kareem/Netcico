import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail as getUser } from "@/actions/user.action";

export const providerOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return { ...profile, id: profile.sub };
      },
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
        const user = await getUser(credentials.email);
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (user && isValid) {
          return user;
        } else {
          throw new Error(
            "Wrong credentails! Please check your email and password"
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id || user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};
