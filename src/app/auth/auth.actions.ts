"use server"

import {getPrismaClient} from "@/utils/db";
import bcrypt from "bcrypt";

export const signupUser = async (username: string, password: string) => {
  const prismaClient = getPrismaClient()

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return prismaClient.user.create({data: {username, password: hashedPassword}});
}