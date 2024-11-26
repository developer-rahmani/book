/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    username: string;
    password: string;
    isLogged: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string;
    password: string;
    isLogged: boolean;
  }
}
