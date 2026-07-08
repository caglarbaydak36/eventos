"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { month: "Ocak", revenue: 12000 },
  { month: "Şubat", revenue: 18000 },
  { month: "Mart", revenue: 15000 },
  { month: "Nisan", revenue: 24000 },
  { month: "Mayıs", revenue: 22000 },
  { month: "Haziran", revenue: 31000 },
];

const totalRevenue = data.reduce(
  (sum, item) => sum + item.revenue,
  0
);

export default function RevenueChart() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Aylık Aidat Geliri</CardTitle>

          <CardDescription>
            Son 6 aylık aidat tahsilat grafiği
          </CardDescription>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-500">
            Toplam
          </p>

          <p className="text-2xl font-bold text-blue-600">
            ₺{totalRevenue.toLocaleString("tr-TR")}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip
                formatter={(value: number) =>
                  `₺${value.toLocaleString("tr-TR")}`
                }
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}