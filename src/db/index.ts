import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../config/env";

const pool = new Pool({
  connectionString: env.DB_URL,
  ssl: true,
});

export const db = drizzle(pool);
