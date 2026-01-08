interface RevenueCardProps {
  title: string;
  amount: number;
  change: number;
  dateRange: string;
  isPositive: boolean;
}

export const RevenueCard: React.FC<RevenueCardProps> = ({
  title,
  amount,
  change,
  dateRange,
  isPositive,
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-gray-700 font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900">
          {formatCurrency(amount)}
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
      <p className="text-xs text-gray-500">{dateRange}</p>
    </div>
  );
};
