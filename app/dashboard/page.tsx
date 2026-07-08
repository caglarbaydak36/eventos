import { supabase } from "@/lib/supabase";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import QuickActions from "@/components/dashboard/QuickActions";

export default async function DashboardPage() {
  const { count, error } = await supabase
    .from("members")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) {
    console.error(error);
  }

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsCards totalMembers={count ?? 0} />

      <RevenueChart />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Son Etkinlikler burada olacak */}
        </div>

        <QuickActions />
      </div>
    </div>
  );
}