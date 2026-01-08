import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { OrdersSeriesPoint } from "../../types";

interface OrdersChartCardProps {
  title: string;
  value: number;
  change: number;
  dateRange: string;
  data: OrdersSeriesPoint[];
}

const formatCompact = (value: number) => {
  const hasThousands = value >= 1000;
  if (!hasThousands) return value.toString();

  const formatted = new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0,
  }).format(value);

  return formatted;
};

export const OrdersChartCard: React.FC<OrdersChartCardProps> = ({
  title,
  value,
  change,
  dateRange,
  data,
}) => {
  const isPositive = change >= 0;

  const legendFormatter = (value: string) => (
    <span className="text-xs text-slate-500">{value}</span>
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-gray-900 font-semibold">{title}</h3>
        </div>
        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white">
          View Report
        </button>
      </div>

      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900">
          {formatCompact(value)}
        </p>
        <p
          className={`text-sm font-medium mt-2 flex items-center gap-1 ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          <span>{isPositive ? "▲" : "▼"}</span>
          {Math.abs(change).toFixed(1)}% vs last week
        </p>
        <p className="text-xs text-gray-500 mt-2">{dateRange}</p>
      </div>

      <div className="h-44 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 8, left: -12, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E5E7EB"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              tickFormatter={(v) => String(v).padStart(2, "0")}
            />
            <YAxis hide />
            <Tooltip
              cursor={{ stroke: "#E5E7EB" }}
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
              formatter={legendFormatter}
              wrapperStyle={{ paddingTop: 6 }}
            />
            <Line
              type="linear"
              dataKey="current"
              name="Last 6 days"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="linear"
              dataKey="previous"
              name="Last Week"
              stroke="#D1D5DB"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
