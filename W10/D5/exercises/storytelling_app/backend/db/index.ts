import { Pool } from 'pg';
import { DATABASE_URL, NODE_ENV } from "../helpers/envVarChecker";

if (NODE_ENV !== "production") {
    console.log("🔌 Connected to local PostgreSQL database");
}

// create a new pool instance using database url
const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false
});

export default pool;