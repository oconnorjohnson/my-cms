import dotenv from "dotenv";
dotenv.config();
import { resolve, dirname } from "path";
import { nodeDb } from "./tursoClients.js";
import { fileURLToPath } from "url";
import { migrate } from "drizzle-orm/libsql/migrator";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
(async () => {
  await migrate(nodeDb, {
    migrationsFolder: resolve(__dirname, "../../migrations"),
  });
})();
