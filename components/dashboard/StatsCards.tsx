import DashboardCard from "@/components/layout/DashboardCard";
import {
  Users,
  CalendarDays,
  CreditCard,
  TrendingUp,
} from "lucide-react";

interface Props {
  totalMembers: number;
}

export default function StatsCards({ totalMembers }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <DashboardCard
        title="Toplam Üye"
        value={totalMembers}
        subtitle="Kayıtlı üyeler"
        icon={<Users size={24} />}
      />

      <DashboardCard
        title="Etkinlik"
        value={0}
        subtitle="Yaklaşan etkinlik"
        icon={<CalendarDays size={24} />}
      />

      <DashboardCard
        title="Aidatlar"
        value="₺0"
        subtitle="Toplam tahsilat"
        icon={<CreditCard size={24} />}
      />

      <DashboardCard
        title="Katılım"
        value="%0"
        subtitle="Ortalama katılım"
        icon={<TrendingUp size={24} />}
      />

    </div>
  );
}