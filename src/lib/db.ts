import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import { Pool } from "@neondatabase/serverless";
import ws from "ws";

// neon + websocket
neonConfig.webSocketConstructor = ws;

/*The Neon connection pool
So the pool and neon prisma adapters use Websockets/connection pooling.
this allows many severless functions to share a small number of
database connections efficiently*/

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });

const adapter = new PrismaNeon(pool as any);

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, // The adapter is now MANDATORY in Prisma7
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;