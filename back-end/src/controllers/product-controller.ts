import { FastifyReply, FastifyRequest } from "fastify"

import {
  bodyProductSchema,
  paramsIdsProductSchema,
  paramsProductSchema,
} from "../schemas/product-schema"
import { createProduct, deleteProduct } from "../services/product-service"

// Rota POST | Cria um produto
export async function addProductController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { categoryId } = paramsProductSchema.parse(request.params)
    const { name, description, price, imageUrl } = bodyProductSchema.parse(
      request.body,
    )
    const newProduct = createProduct({
      name,
      description,
      price,
      imageUrl,
      categoryId,
    })

    reply.status(201).send(newProduct)
  } catch (error) {
    reply.status(500).send({ error: "Erro ao criar produto" })
  }
}

// Rota DELETE | Deleta um produto
export async function removeProductController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id, categoryId } = paramsIdsProductSchema.parse(request.params)

    await deleteProduct({ id, categoryId })

    reply.status(200).send({ message: "Produto deletado com sucesso" })
  } catch (error) {
    reply.status(500).send({ error: "Erro ao deletar produto" })
  }
}
