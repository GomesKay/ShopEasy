import { beforeEach, describe, expect, it, vi } from "vitest"

import * as categoryService from "../services/category-service"
import { mockedDataCategory } from "../utils/mockedData"

vi.mock("../services/category-service", () => ({
  getAllCategories: vi.fn(),
  createCategory: vi.fn(),
  deleteCategory: vi.fn(),
}))

// Testes completos do Category
describe("Category: E2E", () => {
  // Limpa todos os Mocks
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("Deve ser possível retornar a lista de categorias", async () => {
    vi.spyOn(categoryService, "getAllCategories").mockResolvedValue([
      mockedDataCategory,
    ])

    const result = await categoryService.getAllCategories()

    expect(result).toHaveLength(1)
    expect(result[0].name).toBe("Consoles")
  })

  it("Deve ser possível criar uma categoria", async () => {
    const newCategoryMock = { ...mockedDataCategory, name: "Games" }

    vi.spyOn(categoryService, "createCategory").mockResolvedValue(
      newCategoryMock,
    )

    const result = await categoryService.createCategory({ name: "Games" })

    expect(result.name).toBe("Games")
  })

  it("Deve ser possível deletar uma categoria", async () => {
    vi.spyOn(categoryService, "deleteCategory").mockResolvedValue(
      mockedDataCategory,
    )

    const result = await categoryService.deleteCategory({ id: "1" })

    expect(result).toMatchObject({ id: "1", name: "Consoles" })
  })
})
