import { Link } from "react-router-dom";
import logoDental from '../assets/logo-dental.svg';

const Header = () => {
  const navigationItems = [
    { to: "/", label: "Pagina Inicial" },
    { to: "/aboutUs", label: "Sobre nós" },
    { to: "/contact", label: "Entrar em contato" },
  ];

  return (
    <header className="bg-white backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logoDental} alt="Logo Dental Solutions" className="w-10 h-10" />
            <span className="text-xl font-bold transition-colors">
              <span className="text-secondary">Dental</span> <span className="text-slate-700">Solutions</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-slate-700 hover:text-cyan-400 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-800 hover:text-cyan-400 transition-colors">
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
