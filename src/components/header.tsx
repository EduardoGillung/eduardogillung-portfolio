import { Link } from "react-router";

const Header = () => {
  const navigationItems = [
    { to: "/", label: "Pagina inicial" },
    { to: "/aboutUs", label: "Sobre nós" },
    { to: "/contact", label: "Contato" },
  ];

  return (
    <header className="bg-slate-800 shadow-lg border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <span className="text-white font-bold text-lg">🦷</span>
            </div>
            <span className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              DentalCare
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-slate-300 hover:text-emerald-400 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-emerald-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
