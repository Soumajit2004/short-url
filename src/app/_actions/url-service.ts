"use server"

import {getPrismaClient} from "@/utils/db";
import {getServerSession} from "next-auth";
import {nanoid} from "nanoid";

const getContext = async () => {
  const session = await getServerSession()
  const prisma = getPrismaClient()

  return [session, prisma] as const
}

export const createUrl = async (originalUrl: string) => {
  const [session, prisma] = await getContext()

  return prisma.link.create({
    //@ts-ignore
    data: {
      id: nanoid(),
      originalLink: originalUrl, owner: {
        connect: {
          email: session?.user?.email as string,
        }
      }
    }
  });
}

export const updateUrl = async (id: string, originalUrl: string) => {
  const [session, prisma] = await getContext()

  return prisma.link.update({
    //@ts-ignore
    where: {id: id},
    data: {originalLink: originalUrl}
  });
}

export const fetchUrls = async () => {
  const [session, prisma] = await getContext()

  return prisma.link.findMany({where: {owner: {email: session?.user?.email as string}}});
}

export const fetchUrlById = async (id: string) => {
  const [session, prisma] = await getContext()

  return prisma.link.findUniqueOrThrow({where: {id: id}})
}

export const deleteUrl = async (id: string) => {
  const [session, prisma] = await getContext()

  return prisma.link.delete({where: {id: id}});
}