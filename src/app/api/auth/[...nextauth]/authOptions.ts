import type { NextAuthOptions, User } from "next-auth";

import { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        const { username } = credentials;

        try {
          const user: User = {
            name: username,
            id: username,
          };
          return user;
        } catch (error) {
          console.log("error", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ user, token }) {
      return { ...user, ...token };
    },
    session({ session, token }) {
      session.user = {
        ...token,
        ...session.user,
      };

      session.isLogged = !!token.name;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure to set this in your environment variables
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
