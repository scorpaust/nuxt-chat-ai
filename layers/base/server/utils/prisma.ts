// server/db.ts

import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Aqui usamos require puro para evitar o ESM resolver ".prisma/client/default"
const { PrismaClient } = require("@prisma/client") as {
  PrismaClient: typeof import("@prisma/client").PrismaClient;
};

const prisma = new PrismaClient();

export default prisma;
