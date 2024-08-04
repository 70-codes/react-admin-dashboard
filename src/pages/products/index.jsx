import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
//
import Header from "../../components/header";
import StatCard from "../../components/common/statscard";
import CategoryDistributionChart from "../../components/overview/categoryDistributionChart";
import SalesTrendChart from "../../components/products/salesTrendChart";
import ProductsTable from "../../components/products/productsTable";

const Products = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Products" />
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
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$543,210"}
            color="#EF4444"
          />
          {/* stat END */}
        </motion.div>
        {/* CHARTS START */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <ProductsTable />
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
        {/* CHARTS END*/}
      </main>
    </div>
  );
};

export default Products;
