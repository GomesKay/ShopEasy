import { prisma } from "../lib/prisma"
import { CreateProductInput, DeleteProductInput } from "../types/product"

export async function createProduct({
  name,
  description,
  price,
  imageUrl,
  categoryId,
}: CreateProductInput) {
  return await prisma.product.create({
    data: {
      name,
      description,
      price,
      imageUrl,
      categoryId,
    },
  })
}

export async function deleteProduct({ id, categoryId }: DeleteProductInput) {
  return await prisma.product.delete({
    where: { id, categoryId },
  })
}
