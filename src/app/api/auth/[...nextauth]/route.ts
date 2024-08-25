import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import {getPrismaClient} from "@/utils/db";


const handler = NextAuth({
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {label: "Username", type: "text"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials, req) {
        const prismaClient = getPrismaClient()

        const user = await prismaClient.user.findFirst({where: {username: credentials!.username}})

        if (!user) {
          throw new Error("Invalid username.")
        }

        if (!(await bcrypt.compare(credentials!.password, user.password))) {
          throw new Error("Invalid password")
        }

        if (user) {
          return {id: user.id, username: user.username}
        } else {
          return null
        }
      },

    })
  ]
})

export {handler as GET, handler as POST}