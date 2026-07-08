import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Eventos Yönetim Paneline hoş geldiniz.
        </p>
      </div>

      <Button className="w-fit gap-2">
        <Bell className="h-4 w-4" />
        Bildirimler
      </Button>
    </div>
  );
}