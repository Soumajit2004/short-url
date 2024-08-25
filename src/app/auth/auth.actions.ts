"use server"

import {getPrismaClient} from "@/utils/db";
import bcrypt from "bcrypt";

const prismaClient = getPrismaClient()

export const signupUser = async (username: string, password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  await prismaClient.user.create({data: {username: username, password: hashedPassword}});
}