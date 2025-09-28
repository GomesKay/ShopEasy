import { Category } from "../models/category-model"

export type CreateCategoryInput = Pick<Category, "name">

export type DeleteCategoryInput = Pick<Category, "id">
