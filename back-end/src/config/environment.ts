import dotenv from "dotenv"

dotenv.config()

interface EnvConfig {
  PORT: number
  DATABASE_URL: string
}

export const environment: EnvConfig = {
  PORT: Number(process.env.PORT) || 3333,
  DATABASE_URL: process.env.DATABASE_URL ?? "",
}
