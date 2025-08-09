// load environment variables from .env file into process.env
import dotenv from "dotenv";
dotenv.config();

// utility function to ensure an environment variable is defined
function getEnvVarOrThrow(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable "${key}" is required but was not provided`);
    }
    return value;
}

// export validated environment variables
export const JWT_SECRET = getEnvVarOrThrow("JWT_SECRET");
export const REFRESH_SECRET = getEnvVarOrThrow("REFRESH_SECRET");
export const DATABASE_URL = getEnvVarOrThrow("DATABASE_URL");
export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || "3001";