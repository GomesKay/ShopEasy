import z from "zod"

export const bodyProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  imageUrl: z.string(),
})
