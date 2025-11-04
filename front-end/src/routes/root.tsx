import { createRootRoute } from "@tanstack/react-router"

import { Layout } from "@/components/layout"

const RootLayout = () => <Layout />

export const rootRoute = createRootRoute({ component: RootLayout })
