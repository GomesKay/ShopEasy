import Decimal from "decimal.js"

export const mockedDataCategory = {
  id: "1",
  name: "Consoles",
  products: [],
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const mockedDataProduct = {
  id: "2",
  name: "Playstation 5",
  description: "Slim 1TB Edição Digital",
  price: new Decimal(3799),
  imageUrl: "ps5.png",
  categoryId: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
}
