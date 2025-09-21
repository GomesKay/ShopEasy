import { FastifyReply, FastifyRequest } from "fastify"

import { bodyProductSchema } from "../schemas/product-schema"
import { createProduct, getAllProducts } from "../services/product-service"

export async function getProductsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const products = await getAllProducts()

    reply.status(200).send(products)
  } catch (error) {
    reply.status(500).send({ error: "Erro ao buscar produtos" })
  }
}

export async function addProductController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { name, description, price, imageUrl } = bodyProductSchema.parse(
      request.body,
    )
    const newProduct = createProduct({ name, description, price, imageUrl })

    reply.status(201).send(newProduct)
  } catch (error) {
    reply.status(500).send({ error: "Erro ao criar produto" })
  }
}
