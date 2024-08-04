const ToggleSwitch = ({ label, isOn, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-slate-300">{label}</span>
      <button
        className={`
        relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none
        ${isOn ? "bg-indigo-600" : "bg-slate-600"}
        `}
        onClick={onToggle}
      >
        <span
          className={`inline-block size-4 transform transition-transform bg-white rounded-full 
            ${isOn ? "translate-x-6" : "translate-x-1"}
            `}
        />
      </button>
    </div>
  );
};
export default ToggleSwitch;
