import { Product } from "../models/product-model"

export type CreateProductInput = Pick<
  Product,
  "name" | "description" | "price" | "imageUrl"
>
