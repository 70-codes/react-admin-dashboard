import { motion } from "framer-motion";

import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import Header from "../../components/header";
import StatCard from "../../components/common/statscard";
import UsersTable from "../../components/users/userTable";
import UserGrowthChart from "../../components/users/userGrowthChart";
import UserActivityHeatmap from "../../components/users/userActivityHeatmap";
import UserdemographicsChart from "../../components/users/userdemographicsChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const Users = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATs END */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        {/* STATs END */}
        {/* USER TABLE */}
        <UsersTable />
        {/* USER Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserdemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default Users;
