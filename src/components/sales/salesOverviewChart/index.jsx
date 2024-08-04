import { motion } from "framer-motion";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MONTHLY_SALES_DATA = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-200">Sales Overview</h2>
        <select
          className="bg-slate-700 text-white rounded-md px-3 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quater</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={MONTHLY_SALES_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type={"monotone"}
              dataKey={"sales"}
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
