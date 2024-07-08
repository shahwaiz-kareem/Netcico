import NextAuth from "next-auth";
import { providerOptions } from "./options";

const handler = NextAuth(providerOptions);

export { handler as GET, handler as POST };
