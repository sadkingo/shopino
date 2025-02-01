import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import hashPassword from "@/lib/util/hashPassword";
import { prisma } from "@/prisma/client";
import { User } from "@prisma/client"
import { loginSchema } from "@/lib/schema/loginSchema";

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {label: 'Email', type: 'string'},
        password: {label: 'Password', type: 'string'},
      },
      authorize: async (credentials) => {
        const {email, password} = await loginSchema.parseAsync(credentials);
        let user: User | null = null

        // logic to salt and hash password
        const pwHash = hashPassword(password)
        // logic to verify if the user exists
        user = await prisma.user.findFirst({
          where: {
            email: email,
            password: pwHash,
          },
        });
        console.log(user);
        if (!user) {
          throw new Error("Invalid credentials.")
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
})