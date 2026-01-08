import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { SalesData } from "../../types";

interface SalesChartProps {
  data: SalesData[];
  amount: number;
  change: number;
  dateRange: string;
}

const formatIdr = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const SalesChart: React.FC<SalesChartProps> = ({
  data,
  amount,
  change,
  dateRange,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-gray-700 font-semibold">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {formatIdr(amount)}
          </p>
          <p
            className={`text-sm font-medium mt-2 flex items-center gap-1 ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            <span>{isPositive ? "▲" : "▼"}</span>
            {Math.abs(change).toFixed(1)}% vs last week
          </p>
        </div>

        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
          View Report
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 mb-4">{dateRange}</p>

      <div className="h-52 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 6, right: 8, left: -12, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              tickFormatter={(v) => String(v).padStart(2, "0")}
            />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: "rgba(229,231,235,0.35)" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 10px 20px rgba(0,0,0,0.06)",
              }}
              labelFormatter={(v) => `Day ${String(v).padStart(2, "0")}`}
            />
            <Legend
              verticalAlign="bottom"
              align="left"
              iconType="circle"
              wrapperStyle={{ fontSize: 12, color: "#6B7280" }}
            />
            <Bar
              dataKey="lastDays"
              name="Last 6 days"
              fill="#4F46E5"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="lastWeek"
              name="Last Week"
              fill="#E5E7EB"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
