interface StatCardProps {
  title: string;
  value: number;
  change: number;
  isPositive: boolean;
  dateRange: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  dateRange,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-700 font-semibold">{title}</h3>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
          View Report
        </button>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">
        {value.toLocaleString()}
      </p>
      <p
        className={`text-sm font-medium mb-2 flex items-center gap-1 ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        <span>{isPositive ? "▲" : "▼"}</span>
        {Math.abs(change).toFixed(1)}% vs last week
      </p>
      <p className="text-xs text-gray-500">{dateRange}</p>
    </div>
  );
};
