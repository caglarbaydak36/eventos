"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Eventos Yönetim Paneli
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 rounded-xl border bg-slate-50 px-3 py-2">
          <Search size={18} className="text-slate-400" />
          <input
            placeholder="Ara..."
            className="bg-transparent outline-none"
          />
        </div>

        <button className="rounded-xl border p-2 hover:bg-slate-100">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            Ç
          </div>

          <div>
            <p className="font-semibold">
              Çağlar Baydak
            </p>

            <p className="text-sm text-slate-500">
              Yönetici
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}