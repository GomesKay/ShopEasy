import { createRoute } from "@tanstack/react-router"

import { Favorites } from "@/pages/favorites"

import { rootRoute } from "./root"

const favoritesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/favorites",
  component: Favorites,
})

export const favoritesTreeRoute = favoritesRoute
