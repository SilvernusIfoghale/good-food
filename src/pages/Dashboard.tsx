import { useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import { SalesChart } from "../components/charts/SalesChart";
import { OrderTimeChart } from "../components/charts/OrderTimeChart";
import { RatingChart } from "../components/charts/RatingChart";
import { MostOrderedFoods } from "../components/sections/MostOrderedFoods";
import { OrdersChartCard } from "../components/sections/OrdersChartCard";
import {
  DASHBOARD_STATS,
  SALES_DATA,
  ORDER_TIME_METRICS,
  RATING_METRICS,
  MOST_ORDERED_FOODS,
  ORDERS_DATA,
} from "../constants/mockData";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
              <div className="xl:col-span-2 min-w-0">
                <SalesChart
                  data={SALES_DATA}
                  amount={DASHBOARD_STATS.revenue}
                  change={DASHBOARD_STATS.revenueChange}
                  dateRange={DASHBOARD_STATS.dateRange}
                />
              </div>
              <div className="xl:col-span-1 min-w-0">
                <OrderTimeChart data={ORDER_TIME_METRICS} />
              </div>
            </div>

            {/* Bottom Row - Rating and Most Ordered */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-1 min-w-0">
                <RatingChart
                  metrics={RATING_METRICS}
                  title="Your Rating"
                  description="Lorem ipsum dolor sit amet, consectetur"
                />
              </div>
              <div className="xl:col-span-1 min-w-0">
                <MostOrderedFoods foods={MOST_ORDERED_FOODS} />
              </div>
              <div className="xl:col-span-1 min-w-0">
                <OrdersChartCard
                  title="Order"
                  value={DASHBOARD_STATS.orders}
                  change={DASHBOARD_STATS.ordersChange}
                  dateRange="Sales from 1-6 Dec, 2020"
                  data={ORDERS_DATA}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
