export interface MenuItem {
  id: string;
  icon: string;
  label: string;
  href: string;
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface SalesData {
  date: number;
  lastDays: number;
  lastWeek: number;
}

export interface OrdersSeriesPoint {
  date: number;
  current: number;
  previous: number;
}

export interface OrderTimeMetric {
  period: string;
  percentage: number;
  count: number;
}

export interface RatingMetric {
  label: string;
  value: number;
  color: string;
}

export interface DashboardStats {
  revenue: number;
  revenueChange: number;
  orders: number;
  ordersChange: number;
  dateRange: string;
}
