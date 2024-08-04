import OverviewCard from "../../components/analytics/overviewCard";
import Header from "../../components/header";
import RevenueChart from "../../components/analytics/revenuechart";
import ChannelPerformance from "../../components/analytics/channelPerformance";
import ProductPerformance from "../../components/analytics/productPerformance";
import UserRetention from "../../components/analytics/userRetention";
import CustomerSegmentation from "../../components/analytics/customerSegmentation";
import AIPoweredInsights from "../../components/analytics/AIPoweredInsights";

const Analytics = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-900">
      <Header title="Analytics Dashboard" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCard />
        <RevenueChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
        <AIPoweredInsights />
      </main>
    </div>
  );
};

export default Analytics;
