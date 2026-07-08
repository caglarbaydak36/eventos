import Link from "next/link";
import {
  UserPlus,
  CalendarPlus,
  Megaphone,
  CreditCard,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  {
    title: "Yeni Üye",
    href: "/members",
    icon: UserPlus,
  },
  {
    title: "Etkinlik Oluştur",
    href: "/events",
    icon: CalendarPlus,
  },
  {
    title: "Duyuru Yayınla",
    href: "/announcements",
    icon: Megaphone,
  },
  {
    title: "Aidat Ekle",
    href: "/dues",
    icon: CreditCard,
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hızlı İşlemler</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-slate-50"
            >
              <Icon className="h-5 w-5 text-blue-600" />

              <span className="font-medium">
                {action.title}
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}