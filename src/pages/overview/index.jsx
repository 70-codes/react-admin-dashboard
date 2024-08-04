import { motion } from "framer-motion";

import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Header from "../../components/header";
import StatCard from "../../components/common/statscard";
import SalesOverviewChart from "../../components/overview/salesOverviewChart";
import CategoryDistributionChart from "../../components/overview/categoryDistributionChart";
import SalesChannelChart from "../../components/overview/salesChannelChart";

const Overview = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* stat card START*/}
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366f1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="$12,345"
            color="#8b5cf6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="345"
            color="#ec4899"
          />
          <StatCard
            name="Conversion Sales"
            icon={BarChart2}
            value="12.3%"
            color="#10b981"
          />
          {/* stat END */}
        </motion.div>
        {/* CHARTS START */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
        {/* CHARTS END */}
      </main>
    </div>
  );
};

export default Overview;
