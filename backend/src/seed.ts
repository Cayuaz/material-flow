import { prisma } from "./lib/prisma.js";

try {
  prisma.$connect();
  console.log("db ok");
} catch (error) {
  console.log(error);
}
