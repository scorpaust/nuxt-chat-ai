// server/db.ts
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// hold onto a single client instance
let prisma: import("@prisma/client").PrismaClient | null = import(
  "@prisma/client"
).PrismaClient;

export function getPrismaClient() {
  // if we're in a prerender build, bail out
  if (import.meta.env.NITRO_PRENDERING) {
    throw new Error("PrismaClient is not available during prerender");
  }

  if (!prisma) {
    // use CommonJS require to avoid ESM name‑export issues
    const pkg = require("@prisma/client") as typeof import("@prisma/client");
    prisma = new pkg.PrismaClient();
  }
  return prisma;
}
