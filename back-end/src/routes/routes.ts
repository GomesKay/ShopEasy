import type { FastifyInstance } from "fastify"

import {
  addCategoryController,
  getCategoriesController,
  removeCategoryController,
} from "../controllers/category-controller"
import {
  addProductController,
  removeProductController,
} from "../controllers/product-controller"

export function productRoutes(app: FastifyInstance) {
  // Rotas Categorias
  app
    .get("/categories", getCategoriesController)
    .post("/categories", addCategoryController)
    .delete("/categories/:id", removeCategoryController)

  // Rotas Produtos
  app
    .post("/categories/:categoryId/products", addProductController)
    .delete("/categories/:categoryId/products/:id", removeProductController)
}
