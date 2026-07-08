import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-8 py-5">

      <Link 
        href="/"
        className="text-2xl font-bold"
      >
        Eventos
      </Link>


      <div className="flex items-center gap-6">

        <Link 
          href="/events"
          className="text-sm font-medium hover:underline"
        >
          Etkinlikler
        </Link>


        <Link 
          href="/create-event"
          className="text-sm font-medium hover:underline"
        >
          Oluştur
        </Link>


        <Button>
          Giriş Yap
        </Button>

      </div>

    </nav>
  )
}