import { Link, Outlet } from "@tanstack/react-router"
import { Settings, ShoppingCart, Star, Ticket } from "lucide-react"

import { Button } from "../ui/button"

export function Layout() {
  return (
    <div className="flex h-screen">
      {/* Barra Lateral */}
      <aside className="font-text flex w-82 flex-col items-center gap-88 rounded-r-lg bg-[#373539] pt-8 text-white">
        <Link to="/" className="font-heading text-4xl font-bold">
          ShopEasy
        </Link>

        <div className="flex flex-col gap-2">
          <Link to="/cart">
            <Button
              type="button"
              variant="link"
              className="flex cursor-pointer gap-4 text-white"
            >
              <ShoppingCart size={24} />
              <p className="font-semibold">Carrinho</p>
            </Button>
          </Link>

          <Link to="/favorites">
            <Button
              type="button"
              variant="link"
              className="flex cursor-pointer gap-4 text-white"
            >
              <Star size={24} />
              <p className="font-semibold">Favoritos</p>
            </Button>
          </Link>

          <Link to="/tickets">
            <Button
              type="button"
              variant="link"
              className="flex cursor-pointer gap-4 text-white"
            >
              <Ticket size={24} />
              <p className="font-semibold">Cupons</p>
            </Button>
          </Link>
        </div>

        <div>
          <Button
            type="button"
            variant="secondary"
            className="flex cursor-pointer gap-4"
          >
            <Settings size={24} />
            <p className="font-semibold">Configurações</p>
          </Button>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex flex-1 flex-col gap-6 bg-[#F0EDE5]">
        <Outlet />
      </main>
    </div>
  )
}
