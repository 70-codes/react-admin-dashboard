import { Route, Routes } from "react-router-dom";
import Overview from "./pages/overview";
import Products from "./pages/products";
import Sidebar from "./components/common/sidebar";
import Users from "./pages/users";
import Sales from "./pages/sales";
import Orders from "./pages/orders";
import Analytics from "./pages/analytics";
import Settings from "./pages/settings";

function App() {
  return (
    <div className="flex h-screen bg-slate-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm " />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
