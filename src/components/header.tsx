import { Link } from "react-router-dom";
import logoDental from '../assets/logo-dental.svg';
import { useState, useEffect } from "react";
import { MobileNav } from "./navigation/mobileNav";

const Header = () => {
  const navigationItems = [
    { to: "/", label: "Pagina Inicial" },
    { to: "/aboutUs", label: "Sobre nós" },
    { to: "/contact", label: "Entrar em contato" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#042A4C]/90 backdrop-blur-md transition-shadow duration-300 border-b ${scrolled ? "shadow-lg border-[#2A99E7]/20" : "border-transparent shadow-none"}`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img src={logoDental} alt="Logo Nome Empresa" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold transition-colors">
            <span className="bg-gradient-to-t from-[#00DAA7] to-[#00E1FF] bg-clip-text text-transparent font-semibold">Nome </span> 
            <span className="text-cyan-50 font-semibold">Empresa</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-cyan-50 hover:text-cyan-400 font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-t from-[#00DAA7] to-[#00E1FF] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-cyan-300 hover:text-cyan-100 transition-colors"
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
