const Header = ({ title }) => {
  return (
    <header className="bg-slate-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-slate-700">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-slate-100">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
