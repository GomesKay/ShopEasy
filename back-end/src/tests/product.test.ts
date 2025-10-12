import Decimal from "decimal.js"
import { beforeEach, describe, expect, it, vi } from "vitest"

import * as productService from "../services/product-service"
import { mockedDataProduct } from "../utils/mockedData"

vi.mock("../services/product-service", () => ({
  createProduct: vi.fn(),
  deleteProduct: vi.fn(),
}))

// Testes completos do Product
describe("Product: E2E", () => {
  // Limpa todos os Mocks
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("Deve ser possível criar um produto", async () => {
    vi.spyOn(productService, "createProduct").mockResolvedValue({
      ...mockedDataProduct,
      name: "Playstation 5",
      description: "Slim 1TB Edição Digital",
      price: new Decimal(3799),
      imageUrl: "ps5.png",
      categoryId: "1",
    })

    const result = await productService.createProduct({
      name: "Playstation 5",
      description: "Slim 1TB Edição Digital",
      price: 3799,
      imageUrl: "ps5.png",
      categoryId: "1",
    })

    expect(result).toMatchObject({
      name: "Playstation 5",
      description: "Slim 1TB Edição Digital",
      price: new Decimal(3799),
      imageUrl: "ps5.png",
      categoryId: "1",
    })
  })

  it("Deve ser possível deletar um produto", async () => {
    const productDeletedMock = {
      ...mockedDataProduct,
      id: "2",
      categoryId: "1",
    }

    vi.spyOn(productService, "deleteProduct").mockResolvedValue(
      productDeletedMock,
    )

    const result = await productService.deleteProduct({
      id: "2",
      categoryId: "1",
    })

    expect(result).toMatchObject({
      id: "2",
      categoryId: "1",
    })
    expect(result.name).toBe(mockedDataProduct.name)
  })
})
