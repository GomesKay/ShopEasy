import { Product } from "./product-model"

export type Category = {
  id: string
  name: string
  products: Product[]
  createdAt: Date
  updatedAt: Date
}
