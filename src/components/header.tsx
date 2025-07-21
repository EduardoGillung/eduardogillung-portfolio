import { Link } from "react-router-dom";
import { useState } from "react";
import { MobileNav } from "./navigation/mobileNav";

const Header = () => {
  const navigationItems = [
    { to: "/", label: "Sobre min" },
    { to: "/aboutUs", label: "Projetos" },
    { to: "/contact", label: "Contato" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between h-24">
        <Link to="/" className="group">
          <div className="flex flex-col items-start">
            <span className="text-xl transition-colors text-slate-200 font-semibold">Eduardo Gillung</span>
            <span className="mt-1 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-gradient-to-tr from-green-600 to-green-300"></span>
              <span className="text-xs text-slate-400 font-semibold">Disponivel para trabalho</span>
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-cyan-300 hover:text-cyan-500 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </header>
  );
};

export default Header;
