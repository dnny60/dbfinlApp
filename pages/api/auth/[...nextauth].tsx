import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import prisma from "../../../lib/prisma";
// import { compare } from 'bcrypt'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "credentials",
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const { email, password } = credentials as any;
        // console.log(email, password);
        // const res = await fetch("http://localhost:3000/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email, password }),
        // });
        // // console.log(res);

        // const user = await res.json();
        // console.log({ user });
        // if (res.ok && user) {
        //   return user;
        // } else return "dasd";
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.CARPOOLUSER.findFirst({
          where: {
            Email: credentials.email,
          },
        });
        console.log(user);
        // const isPasswordValid = await (compare)(
        //   credentials.password,
        //   user.password
        // )
        const isPasswordValid = await function () {
          if (credentials.password == user.Password) {
            console.log(isPasswordValid);
            return true;
          } else {
            console.log(isPasswordValid);
            return false;
          }
        };

        if (!isPasswordValid) {
          console.log(isPasswordValid);
          return null;
        }

        return {
          id: user.CarpoolUserID,
          email: user.Email,
          name: user.Name,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },

  pages: {
    signIn: "/signin",
    signOut: "/",
  },
};
export default NextAuth(authOptions);
