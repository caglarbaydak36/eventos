"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  CreditCard,
  Megaphone,
  Settings
} from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r p-5">

      <h1 className="text-2xl font-bold mb-8">
        Eventos
      </h1>

      <nav className="space-y-2">

        <Link href="/dashboard" className="flex gap-3 p-3 rounded-lg hover:bg-gray-100">
          <LayoutDashboard size={20}/>
          Dashboard
        </Link>

        <Link href="/events" className="flex gap-3 p-3 rounded-lg hover:bg-gray-100">
          <CalendarDays size={20}/>
          Etkinlikler
        </Link>

        <Link href="/members" className="flex gap-3 p-3 rounded-lg hover:bg-gray-100">
          <Users size={20}/>
          Üyeler
        </Link>

        <Link href="/dues" className="flex gap-3 p-3 rounded-lg hover:bg-gray-100">
          <CreditCard size={20}/>
          Aidatlar
        </Link>

        <Link href="/announcements" className="flex gap-3 p-3 rounded-lg hover:bg-gray-100">
          <Megaphone size={20}/>
          Duyurular
        </Link>

        <Link href="/settings" className="flex gap-3 p-3 rounded-lg hover:bg-gray-100">
          <Settings size={20}/>
          Ayarlar
        </Link>

      </nav>

    </aside>
  )
}