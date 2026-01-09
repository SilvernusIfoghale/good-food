import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { OrderTimeMetric } from "../../types";

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
    <div className="bg-slate-900 text-white  px-4 py-3 min-w-44">
      <p className="text-xs font-semibold tracking-wide">{period}</p>
      {range ? <p className="text-[11px] text-white/70 mt-1">{range}</p> : null}
      <p className="text-lg font-bold mt-2">{count.toLocaleString()} orders</p>
    </div>
  );
};

export const OrderTimeChart: React.FC<OrderTimeChartProps> = ({ data }) => {
  const colors = ["#4F46E5", "#60A5FA", "#E5E7EB"];
  const pieData = data.map((d) => ({
    name: d.period,
    value: d.percentage,
    count: d.count,
  }));

  return (
    <div className="bg-white rounded-2xl p-6  ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-black text-[14px]">Order Time</h3>
          <p className="text-xs text-gray-500 mt-1">From 1-6 Dec, 2020</p>
        </div>
        <button className="text-[12px] text-primary-active-text font-medium bg-button-bg border-button-border rounded-[5px] h-8 w-27.25 text-center hover:bg-white border-[0.5px] hover:border-gray-300 transition-colors cursor-pointer px-3 py-1.5">
          View Report
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className="h-52 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<OrderTimeTooltip />} />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={58}
                outerRadius={82}
                paddingAngle={0}
                cornerRadius={0}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={colors[index % colors.length]}
                    stroke="transparent"
                    strokeWidth={0}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full mt-2 flex items-center justify-center gap-5">
          {data.map((item, index) => (
            <div key={item.period} className="flex flex-col items-center gap-2">
              <span className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                />
                <span className="text-xs font-medium text-slate-600">
                  {item.period}
                </span>
              </span>
              <span className="text-xs text-slate-400">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
