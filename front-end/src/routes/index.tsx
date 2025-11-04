import { createRoute, createRouter } from "@tanstack/react-router"

import { Home } from "@/pages/home"

import { cartTreeRoute } from "./cart"
import { favoritesTreeRoute } from "./favorites"
import { rootRoute } from "./root"
import { ticketsTreeRoute } from "./tickets"

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  cartTreeRoute,
  favoritesTreeRoute,
  ticketsTreeRoute,
])

export const router = createRouter({
  routeTree,
})

// Tipagem de Rotas
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
