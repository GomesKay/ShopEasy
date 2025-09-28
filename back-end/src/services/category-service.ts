import { prisma } from "../lib/prisma"
import { CreateCategoryInput, DeleteCategoryInput } from "../types/category"

export async function getAllCategories() {
  return await prisma.category.findMany({
    include: { products: true },
  })
}

export async function createCategory({ name }: CreateCategoryInput) {
  return await prisma.category.create({
    data: {
      name,
    },
  })
}

export async function deleteCategory({ id }: DeleteCategoryInput) {
  return await prisma.category.delete({
    where: { id },
  })
}
