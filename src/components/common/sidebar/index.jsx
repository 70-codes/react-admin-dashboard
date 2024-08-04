import {
  BarChart2,
  CircleDollarSign,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    id: 1,
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    id: 2,
    name: "Products",
    icon: ShoppingBag,
    color: "#8B5CF6",
    path: "/products",
  },
  {
    id: 7,
    name: "Users",
    icon: Users,
    color: "#e83e8c",
    path: "/users",
  },
  {
    id: 4,
    name: "Sales",
    icon: DollarSign,
    color: "#10b981",
    path: "/sales",
  },
  {
    id: 5,
    name: "Orders",
    icon: ShoppingCart,
    color: "#f59e0b",
    path: "/orders",
  },
  {
    id: 6,
    name: "Analytics",
    icon: TrendingUp,
    color: "#3b82f6",
    path: "/analytics",
  },
  {
    id: 7,
    name: "Expenses",
    icon: CircleDollarSign,
    color: "#E9C46A",
    path: "/expenses",
  },

  {
    id: 3,
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    path: "/settings",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-12"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-slate-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-slate-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className="p-2 rounded-full hover:bg-slate-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        {/* Nav */}
        <div className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.id} to={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors mb-2 ">
                <item.icon
                  className=""
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap "
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
