import { createRoute } from "@tanstack/react-router"

import { Tickets } from "@/pages/tickets"

import { rootRoute } from "./root"

const ticketsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tickets",
  component: Tickets,
})

export const ticketsTreeRoute = ticketsRoute
