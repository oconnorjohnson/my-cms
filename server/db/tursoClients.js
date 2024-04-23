import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient as createNodeClient } from "@libsql/client";
import { createClient as createEdgeClient } from "@libsql/client/web";

const tursoNodeClient = createNodeClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const tursoEdgeClient = createEdgeClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const nodeDb = drizzle(tursoNodeClient);
export const edgeDb = drizzle(tursoEdgeClient);
