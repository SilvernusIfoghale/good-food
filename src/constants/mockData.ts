import type {
  MenuItem,
  FoodItem,
  SalesData,
  OrdersSeriesPoint,
  OrderTimeMetric,
  RatingMetric,
  DashboardStats,
} from "../types";
import chart from "../assets/icons/Chart.svg";
import info from "../assets/icons/Info Square.svg";
import account from "../assets/icons/Profile.svg";
import payment from "../assets/icons/Wallet.svg";
import settings from "../assets/icons/Setting.svg";
import customerReview from "../assets/icons/Chat.svg";
import manage from "../assets/icons/Document.svg";
import food from "../assets/icons/Buy.svg";

import freshSalad from "../assets/icons/fresh.svg";
import chickenNoodles from "../assets/icons/chicken.svg";
import smoothie from "../assets/icons/smoothie.svg";
import chickenWings from "../assets/icons/hotchiken.svg";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "dashboard",
    icon: chart,
    label: "Dashboard",
    href: "#/dashboard",
  },
  {
    id: "food-order",
    icon: food,
    label: "Food Order",
    href: "#/food-order",
  },
  {
    id: "manage-menu",
    icon: manage,
    label: "Manage Menu",
    href: "#/manage-menu",
  },
  {
    id: "customer-review",
    icon: customerReview,
    label: "Customer Review",
    href: "#/customer-review",
  },
];

export const OTHERS_MENU: MenuItem[] = [
  {
    id: "settings",
    icon: settings,
    label: "Settings",
    href: "#/settings",
  },
  {
    id: "payment",
    icon: payment,
    label: "Payment",
    href: "#/payment",
  },
  {
    id: "accounts",
    icon: account,
    label: "Accounts",
    href: "#/accounts",
  },
  {
    id: "help",
    icon: info,
    label: "Help",
    href: "#/help",
  },
];

export const SALES_DATA: SalesData[] = [
  { date: 1, lastDays: 280, lastWeek: 200 },
  { date: 2, lastDays: 200, lastWeek: 180 },
  { date: 3, lastDays: 350, lastWeek: 220 },
  { date: 4, lastDays: 240, lastWeek: 190 },
  { date: 5, lastDays: 380, lastWeek: 230 },
  { date: 6, lastDays: 420, lastWeek: 280 },
  { date: 7, lastDays: 320, lastWeek: 240 },
  { date: 8, lastDays: 290, lastWeek: 210 },
  { date: 9, lastDays: 360, lastWeek: 260 },
  { date: 10, lastDays: 400, lastWeek: 300 },
  { date: 11, lastDays: 340, lastWeek: 250 },
  { date: 12, lastDays: 450, lastWeek: 350 },
];

export const ORDERS_DATA: OrdersSeriesPoint[] = [
  { date: 1, current: 320, previous: 450 },
  { date: 2, current: 280, previous: 580 },
  { date: 3, current: 520, previous: 300 },
  { date: 4, current: 480, previous: 560 },
  { date: 5, current: 350, previous: 480 },
  { date: 6, current: 750, previous: 520 },
];

export const ORDER_TIME_METRICS: OrderTimeMetric[] = [
  { period: "Afternoon", percentage: 40, count: 1890 },
  { period: "Evening", percentage: 32, count: 1512 },
  { period: "Morning", percentage: 28, count: 1323 },
];

export const RATING_METRICS: RatingMetric[] = [
  { label: "Hygiene", value: 85, color: "rgba(100, 99, 214, 0.9)" },
  { label: "Food Taste", value: 85, color: "rgba(255, 171, 81, 0.9)" },
  { label: "Packaging", value: 92, color: "rgba(70, 199, 226, 0.9)" },
];

export const MOST_ORDERED_FOODS: FoodItem[] = [
  {
    id: "1",
    name: "Fresh Salad Bowl",
    price: 45000,
    image: freshSalad,
  },
  {
    id: "2",
    name: "Chicken Noodles",
    price: 75000,
    image: chickenNoodles,
  },
  {
    id: "3",
    name: "Smoothie Fruits",
    price: 45000,
    image: smoothie,
  },
  {
    id: "4",
    name: "Hot Chicken Wings",
    price: 45000,
    image: chickenWings,
  },
];

export const DASHBOARD_STATS: DashboardStats = {
  revenue: 7852000,
  revenueChange: 2.1,
  orders: 2568,
  ordersChange: -2.1,
  dateRange: "Sales from 1-12 Dec, 2020",
};
