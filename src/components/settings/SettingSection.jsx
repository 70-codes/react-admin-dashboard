import { motion } from "framer-motion";

const SettingSection = ({ icon: Icon, title, children }) => {
  return (
    <motion.div
      className="bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg rounded-xl p-6 border border-slate-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-4 justify-center md:justify-start">
        <Icon className="text-indigo-400 mr-4" size="24" />
        <h2 className="text-xl font-semibold text-slate-200">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default SettingSection;
