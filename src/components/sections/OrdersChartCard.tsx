import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

import type { OrdersSeriesPoint } from "../../types";
import { ArrowDown, ArrowUp } from "lucide-react";

interface OrdersChartCardProps {
  title: string;
  value: number;
  change: number;
  dateRange: string;
  data: OrdersSeriesPoint[];
}

const formatCompact = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0,
  }).format(value);
};

export const OrdersChartCard: React.FC<OrdersChartCardProps> = ({
  title,
  value,
  change,
  dateRange,
  data,
}) => {
  const isPositive = change >= 0;
  const minValue = Math.min(
    ...data.flatMap((d) => [d.current || 0, d.previous || 0])
  );
  const maxValue = Math.max(
    ...data.flatMap((d) => [d.current || 0, d.previous || 0])
  );

  const gridTicks = [
    Math.ceil(minValue + (maxValue - minValue) * 0.15),
    Math.ceil(minValue + (maxValue - minValue) * 0.5),
    Math.ceil(minValue + (maxValue - minValue) * 0.85),
  ];

  const legendFormatter = (value: string) => (
    <span className="text-[14px] text-gray-500 font-medium ml-1">{value}</span>
  );

  return (
    <div className="bg-white rounded-2xl p-6 ">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-black text-[14px] font-normal">{title}</h3>
        </div>
        <button className="text-[12px] text-primary-active-text font-medium bg-button-bg border-button-border rounded-[5px] h-8 w-27.25 text-center hover:bg-white border-[0.5px] hover:border-gray-300 transition-colors cursor-pointer px-3 py-1.5">
          View Report
        </button>
      </div>

      <div className="mb-6">
        <p className="text-[20px] font-medium text-black leading-none">
          {formatCompact(value)}
        </p>
        <p
          className={`text-[12px] font-semibold mt-3 flex items-center gap-1 ${
            isPositive ? "text-tertiary-green" : "text-tertiary-red"
          }`}
        >
          <span>
            {isPositive ? <ArrowUp width={15} /> : <ArrowDown width={15} />}
          </span>
          {Math.abs(change).toFixed(1)}%
          <span className="text-light-gray font-normal"> vs last week</span>
        </p>
        <p className="text-[13px] text-light-gray mt-6">
          Sales from {dateRange}
        </p>
      </div>

      <div className="h-48 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="var(--color-grid-line)"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "var(--color-light-gray)" }}
              tickFormatter={(v) => String(v).padStart(2, "0")}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              hide
              domain={[minValue - 50, maxValue + 50]}
              ticks={gridTicks}
            />
            <ReferenceLine
              y={minValue - 50}
              stroke="var(--color-grid-line)"
              strokeWidth={1}
            />
            <Tooltip
              cursor={{ stroke: "var(--color-grid-line)", strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--color-grid-line)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              labelFormatter={(v) => `Day ${String(v).padStart(2, "0")}`}
            />
            <Legend
              verticalAlign="bottom"
              align="left"
              iconType="circle"
              iconSize={8}
              formatter={legendFormatter}
              wrapperStyle={{ paddingTop: 20 }}
            />
            <Line
              type="linear"
              dataKey="current"
              name="Last 6 days"
              stroke="var(--color-primary-active-text)"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
                fill: "var(--color-primary-active-text)",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
            <Line
              type="linear"
              dataKey="previous"
              name="Last Week"
              stroke="var(--color-graph-line)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: "var(--color-graph-line)",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
