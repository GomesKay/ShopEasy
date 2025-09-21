import { prisma } from "../lib/prisma"
import { CreateProductInput } from "../types/product"

export async function getAllProducts() {
  return await prisma.product.findMany()
}

export async function createProduct({
  name,
  description,
  price,
  imageUrl,
}: CreateProductInput) {
  return await prisma.product.create({
    data: {
      name,
      description,
      price,
      imageUrl,
    },
  })
}
