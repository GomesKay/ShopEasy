import z from "zod"

export const paramsProductSchema = z.object({
  categoryId: z.uuid(),
})

export const paramsIdsProductSchema = z.object({
  id: z.uuid(),
  categoryId: z.uuid(),
})

export const bodyProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  imageUrl: z.string(),
})
