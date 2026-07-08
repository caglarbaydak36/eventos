import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon?: ReactNode;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="text-blue-600">
          {icon}
        </div>
      </div>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-3 text-sm text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}