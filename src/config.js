import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const db_HOST = process.env.db_host
export const db_USER = process.env.db_user 
export const db_PASSWORD = process.env.db_password
export const db_PORT = process.env.db_port 
export const db_DB = process.env.db_database