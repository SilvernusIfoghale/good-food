import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { SalesData } from "../../types";
import { ArrowDown, ArrowUp } from "lucide-react";

interface SalesChartProps {
  data: SalesData[];
  amount: number;
  change: number;
  dateRange: string;
}

const formatIdr = (value: number) => {
  return (
    "IDR " +
    new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  );
};

export const SalesChart: React.FC<SalesChartProps> = ({
  data,
  amount,
  change,
  dateRange,
}) => {
  const isPositive = change >= 0;
  const maxValue = Math.max(
    ...data.flatMap((d) => [d.lastDays || 0, d.lastWeek || 0])
  );
  const midValue = Math.ceil(maxValue / 2);
  const topValue = Math.ceil(maxValue * 0.82);
  const gridTicks = [midValue, topValue];

  return (
    <div className="bg-white  p-6  ">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-black text-[14px]">Revenue</h3>
          <p className="text-[20px] font-medium text-black mt-2">
            {formatIdr(amount)}
          </p>
          <p
            className={`text-[12px] font-semibold mt-2 flex items-center gap-1 ${
              isPositive ? "text-tertiary-green" : "text-tertiary-red"
            }`}
          >
            <span>
              {isPositive ? <ArrowUp width={16} /> : <ArrowDown width={16} />}
            </span>
            {Math.abs(change).toFixed(1)}%{" "}
            <span className="text-light-gray">vs last week</span>
          </p>
        </div>

        <button className="text-[12px] text-primary-active-text font-medium bg-button-bg border-button-border rounded-[5px] h-8 w-27.25 text-center hover:bg-white border-[0.5px] hover:border-gray-300 transition-colors cursor-pointer px-3 py-1.5">
          View Report
        </button>
      </div>

      <p className="text-[13px] text-light-gray mt-4 mb-4">{dateRange}</p>

      <div className="h-52 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 6, right: 8, left: -12, bottom: 0 }}
            barCategoryGap="20%"
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="var(--color-grid-line)"
            />
            <ReferenceLine
              y={0}
              stroke="var(--color-grid-line)"
              strokeWidth={1}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "var(--color-light-gray)" }}
              tickFormatter={(v) => String(v).padStart(2, "0")}
            />
            <YAxis
              hide
              domain={[0, maxValue * 1.1]}
              ticks={gridTicks}
              type="number"
            />
            <Tooltip
              cursor={{ fill: "rgba(229,231,235,0.35)" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
              }}
              labelFormatter={(v) => `Day ${String(v).padStart(2, "0")}`}
            />
            <Legend
              verticalAlign="bottom"
              align="left"
              iconType="circle"
              wrapperStyle={{
                fontSize: 12,
                color: "var(--color-primary-purple-300)",
              }}
            />
            <Bar
              dataKey="lastDays"
              name="Last 6 days"
              fill="var(--color-primary-active-text)"
            />
            <Bar
              dataKey="lastWeek"
              name="Last Week"
              fill="var(--color-primary-purple-300)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
