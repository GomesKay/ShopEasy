import { createRoute } from "@tanstack/react-router"

import { Cart } from "@/pages/cart"

import { rootRoute } from "./root"

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
})

export const cartTreeRoute = cartRoute
