import { supabase } from "@/lib/supabase";
import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";

export default async function DashboardPage() {
  const { count } = await supabase
    .from("members")
    .select("*", { count: "exact", head: true });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Eventos Yönetim Paneline hoş geldiniz.
        </p>
      </div>

      <StatsCards totalMembers={count ?? 0} />

      <RevenueChart />

    </div>
  );
}