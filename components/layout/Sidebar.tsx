"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  Megaphone,
  QrCode,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Üyeler",
    href: "/members",
    icon: Users,
  },
  {
    name: "Etkinlikler",
    href: "/events",
    icon: CalendarDays,
  },
  {
    name: "Aidatlar",
    href: "/dues",
    icon: CreditCard,
  },
  {
    name: "Duyurular",
    href: "/announcements",
    icon: Megaphone,
  },
  {
    name: "QR",
    href: "/qr",
    icon: QrCode,
  },
  {
    name: "Raporlar",
    href: "/reports",
    icon: BarChart3,
  },
  {
    name: "Ayarlar",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-slate-950 text-white">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="text-blue-500">Event</span>OS
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Yönetim Paneli
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                active
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-sm font-medium">Çağlar Baydak</p>
          <p className="text-xs text-slate-400">
            Yönetici
          </p>
        </div>
      </div>
    </aside>
  );
}