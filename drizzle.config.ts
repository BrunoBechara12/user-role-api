import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { env } from "./src/config/env";

export default defineConfig({
  out: "./migrations",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DB_URL || "",
    database: "postgres",
    port: 5432,
  },
  verbose: true,
  strict: true,
});
