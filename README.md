# Good Food - Dashboard Application

A sophisticated, responsive dashboard application built for food enterprise management. This platform provides real-time insights into sales performance, customer ordering habits, and product popularity.

## 🚀 Overview

Good Food Dashboard is designed to help restaurant owners and managers monitor their business metrics through an intuitive and clean user interface. It features interactive data visualizations for revenue tracking, peak order times, and customer satisfaction.

## ✨ Features

- **Revenue Analysis:** Track sales performance with detailed bar charts comparing current periods with historical data.
- **Order Timing:** Visualize peak ordering hours through interactive pie charts to optimize staffing and operations.
- **Product Insights:** Monitor "Most Ordered Foods" to understand customer preferences and inventory needs.
- **Customer Feedback:** Keep track of service quality with a dedicated Rating Chart.
- **Responsive Layout:** fully optimized for Desktop, Tablet, and Mobile views using a unified grid system.
- **Reusable Component Architecture:** Built with maintenance in mind using modular components and common UI elements like the `ViewReportButton`.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```
src/
├── components/
│   ├── cards/       # Stat and Revenue cards
│   ├── charts/      # Recharts implementations (Sales, OrderTime, Rating)
│   ├── common/      # Reusable UI components (ViewReportButton)
│   ├── layout/      # Sidebar and Header
│   └── sections/    # Aggregated dashboard sections
├── constants/       # Mock data and configuration
├── pages/           # Main view components (Dashboard)
├── types/           # TypeScript interfaces
└── assets/          # Static resources
```

## 🚦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 License

This project is licensed under the MIT License.
