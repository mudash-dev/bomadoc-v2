import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from "ws";

// neon + websocket
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables.");
}

/*The Neon connection pool: So the pool and neon prisma adapters use Websockets/connection pooling.
this allows many severless functions to share a small number of database connections efficiently*/

// Initialize the Neon serverless connection pool
const pool = new Pool({ connectionString });

const adapter = new PrismaNeon(pool as any );

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, // Mandatory adapter for Prisma 7 + Neon
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;