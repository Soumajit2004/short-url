import NextAuth, {NextAuthOptions} from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import {getPrismaClient} from "@/utils/db";

const authOptions: NextAuthOptions = {
  pages:{
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
  callbacks: {
    async signIn({user}) {
      const prisma = getPrismaClient()

      const fetchedUser = await prisma.user.findUnique({where: {id: user.id as string}})

      if (!fetchedUser) {
        await prisma.user.create({
          data: {
            id: user.id,
            email: user.email as string,
            name: user.name as string,
            image: user.image as string
          }
        })
      }

      return true
    }
  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}