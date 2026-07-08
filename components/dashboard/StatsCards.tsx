import {
  Users,
  CalendarDays,
  CreditCard,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  totalMembers: number;
}

export default function StatsCards({ totalMembers }: Props) {
  const cards = [
    {
      title: "Toplam Üye",
      value: totalMembers,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Etkinlik",
      value: 12,
      icon: CalendarDays,
      color: "text-green-600",
    },
    {
      title: "Aidatlar",
      value: "₺24.500",
      icon: CreditCard,
      color: "text-amber-600",
    },
    {
      title: "Bu Ay",
      value: "+18%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                {card.title}
              </CardTitle>

              <Icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold text-slate-900">
                {card.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}