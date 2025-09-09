import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectDB } from "../../../../lib/mongodb";
import User from "../../../models/User";
import { verifyPassword } from "../../../../lib/auth";

export const { handlers: { GET, POST }, auth, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials.email }).lean();

        if (!user) throw new Error("No user found with this email.");
        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password.");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        await connectDB();
        await User.findOneAndUpdate(
          { email: user.email },
          {
            $setOnInsert: {
              email: user.email,
              name: user.name || profile?.name,
              image: user.image || profile?.picture,
              provider: "google",
            },
          },
          { upsert: true, new: true }
        );
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name || token.name;
        token.email = user.email || token.email;
        token.picture = user.image || token.picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
