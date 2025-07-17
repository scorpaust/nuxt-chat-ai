// server/db.ts
import { PrismaClient } from "@prisma/client";

// hold onto a single client instance
const prisma = PrismaClient;

export function getPrismaClient() {
  // if we're in a prerender build, bail out
  return prisma;
}
