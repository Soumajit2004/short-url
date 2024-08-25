"use server"

import {getPrismaClient} from "@/utils/db";
import {getServerSession} from "next-auth";

export const createUrl = async (originalUrl: string) => {
  const session = await getServerSession()
  const prisma = getPrismaClient()

  return prisma.link.create({
    //@ts-ignore
    data: {
      originalLink: originalUrl, owner: {
        connect: {
          email: session?.user?.email as string,
        }
      }
    }
  });
}

export const fetchUrls = async () => {
  const prisma = getPrismaClient()
  const session = await getServerSession()


  return prisma.link.findMany({where: {owner: {id: session?.user?.email as string}}});
}