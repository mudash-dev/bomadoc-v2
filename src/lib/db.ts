import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig, ws } from "@neondatabase/serverless";
import { Pool } from "@neondatabase/serverless";

neonConfig.webSocketConstructor = ws;

/*The Neon connection pool
So the pool and neon prisma adapters use Websockets/connection pooling.
this allows many severless functions to share a small number of
database connections efficiently*/

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });

const adapter = new PrismaNeon(pool as any);

const prismaClientSingleton = () => { 
    return new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error",]
    });
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const db = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;