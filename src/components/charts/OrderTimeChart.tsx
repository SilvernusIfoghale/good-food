import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts";

import type { OrderTimeMetric } from "../../types";
import { useState } from "react";

interface OrderTimeChartProps {
  data: OrderTimeMetric[];
}

const TIME_RANGE: Record<string, string> = {
  Morning: "8am - 11am",
  Afternoon: "1pm - 4pm",
  Evening: "6pm - 9pm",
};

const OrderTimeTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload?: { name?: string; count?: number } }>;
}) => {
  if (!active || !payload?.length) return null;
  const item = payload[0]?.payload;
  const period = item?.name ?? "";
  const range = TIME_RANGE[period] ?? "";
  const count = item?.count ?? 0;

  return (
    <div className="relative -translate-x-1/2 -translate-y-[calc(100%+10px)]">
      <div className="bg-[#323B5C] text-white rounded-lg px-4 py-3 min-w-[140px] shadow-xl pointer-events-none">
        <p className="text-xs font-semibold text-white">{period}</p>
        {range ? (
          <p className="text-[10px] text-white/50 mt-1">{range}</p>
        ) : null}
        <p className="text-[15px] font-bold mt-2 text-white">
          {count.toLocaleString()} orders
        </p>
      </div>
      {/* Little pointer at the bottom */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#323B5C] rotate-45 pointer-events-none" />
    </div>
  );
};

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      {/* Highlight effect: larger semi-transparent background sector */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 6}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.2}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export const OrderTimeChart: React.FC<OrderTimeChartProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);

  const colors = ["#5A6ACF", "#8593ED", "#C7CEFF"];

  // Reorder data to match the screenshot positioning (Afternoon first)
  const orderedData = [...data].sort((a, b) => {
    const order = ["Afternoon", "Evening", "Morning"];
    return order.indexOf(a.period) - order.indexOf(b.period);
  });

  const pieData = orderedData.map((d) => ({
    name: d.period,
    value: d.percentage,
    count: d.count,
  }));

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieClick = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    // Keep the last active if clicked, or just clear on leave?
    // Usually highlight persists on hover in the design seen
    setActiveIndex(0); // Default to highlight Afternoon (index 0) to match image
  };

  return (
    <div className="bg-white rounded-2xl p-6  ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-black text-[14px]">Order Time</h3>
          <p className="text-[13px] text-light-gray mt-1">From 1-6 Dec, 2020</p>
        </div>
        <button className="text-[12px] text-primary-active-text font-medium bg-button-bg border-button-border rounded-[5px] h-8 w-27.25 text-center hover:bg-white border-[0.5px] hover:border-gray-300 transition-colors cursor-pointer px-3 py-1.5">
          View Report
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className="h-60 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={<OrderTimeTooltip />}
                cursor={false}
                allowEscapeViewBox={{ x: true, y: true }}
              />
              <Pie
                {...({
                  activeIndex,
                  activeShape: renderActiveShape,
                } as any)}
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={58}
                outerRadius={82}
                paddingAngle={0}
                stroke="none"
                startAngle={72}
                endAngle={-288}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                onClick={onPieClick}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={colors[index % colors.length]}
                    style={{ outline: "none" }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full mt-2 flex items-center justify-center gap-5">
          {orderedData.map((item, index) => (
            <div key={item.period} className="flex flex-col items-center">
              <span className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                />
                <span className="text-xs font-medium text-tag-brown">
                  {item.period}
                </span>
              </span>
              <span className="text-[11px] text-light-gray mt-1 font-medium">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
