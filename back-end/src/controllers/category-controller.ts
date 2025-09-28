import { FastifyReply, FastifyRequest } from "fastify"

import {
  bodyCategorySchema,
  paramsCategorySchema,
} from "../schemas/category-schema"
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../services/category-service"

// Rota GET | Retorna todos as categorias
export async function getCategoriesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const categories = await getAllCategories()

    reply.status(200).send(categories)
  } catch (error) {
    reply.status(500).send({ error: "Erro ao buscar categorias" })
  }
}

// Rota POST | Cria uma categoria
export async function addCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { name } = bodyCategorySchema.parse(request.body)
    const newCategory = createCategory({ name })

    reply.status(201).send(newCategory)
  } catch (error) {
    reply.status(500).send({ error: "Erro ao criar categoria" })
  }
}

// Rota DELETE | Deleta uma categoria
export async function removeCategoryController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = paramsCategorySchema.parse(request.params)

    await deleteCategory({ id })

    reply.status(200).send({ message: "Categoria deletada com sucesso" })
  } catch (error) {
    reply.status(500).send({ error: "Erro ao deletar categoria" })
  }
}
