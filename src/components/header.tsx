import { useState } from "react";
import { Link } from "react-router-dom";
import logoDental from '../assets/logo-dental.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <img src={logoDental} alt="Logo Nome Empresa" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold transition-colors">
              <span className="text-secondary">Nome</span> <span className="text-slate-700">Empresa</span>
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
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="relative bg-white w-72 max-w-[80vw] h-full shadow-2xl p-6 flex flex-col animate-slide-in-left">
            {/* Logo e fechar */}
            <div className="flex items-center justify-between mb-10">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                <img src={logoDental} alt="Logo Nome Empresa" className="w-10 h-10 rounded-full" />
                <span className="text-lg font-bold text-slate-700">
                  <span className="text-secondary">Nome</span> <span>Empresa</span>
                </span>
              </Link>
              <button
                className="text-slate-700 hover:text-cyan-500 p-1"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Links */}
            <nav className="flex flex-col gap-4">
              {navigationItems.slice(1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-lg font-semibold text-slate-700 rounded-xl px-4 py-3 hover:bg-cyan-100 hover:text-cyan-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex-1" />
            <div className="text-xs text-slate-400 text-center mt-8">
              © {new Date().getFullYear()} Nome Empresa
            </div>
          </div>
        </div>
      )}
      {/* Animation */}
      <style>
        {`
          @keyframes slide-in-left {
            from { transform: translateX(-100%); opacity: 0.5; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </header>
  );
};

export default Header;
