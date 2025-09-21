import { fastifyCors } from "@fastify/cors"
import { fastify } from "fastify"

import { productRoutes } from "./routes/routes"

export const app = fastify()

app.register(fastifyCors, {
  origin: true,
})

app.register(productRoutes)
