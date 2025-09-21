import type { FastifyInstance } from "fastify"

import {
  addProductController,
  getProductsController,
} from "../controllers/product-controller"

export function productRoutes(app: FastifyInstance) {
  app
    .get("/products", getProductsController)
    .post("/products", addProductController)
}
