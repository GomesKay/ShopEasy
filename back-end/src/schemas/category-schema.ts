import z from "zod"

export const bodyCategorySchema = z.object({
  name: z.string(),
})

export const paramsCategorySchema = z.object({
  id: z.uuid(),
})
