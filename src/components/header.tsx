import { Link } from "react-router-dom";
import { useState } from "react";
import { MobileNav } from "./navigation/mobileNav";
import GlassSurface from "./ui/glassSurface";

const Header = () => {
  const navigationItems = [
    { to: "/", label: "Sobre min" },
    { to: "/aboutUs", label: "Projetos" },
    { to: "/contact", label: "Contato" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto max-w-4xl grid grid-cols-3 items-center h-24">
        {/* Logo */}
        <Link to="/" className="group flex items-center">
          <div className="flex flex-col items-start">
            <span className="text-2xl transition-colors text-slate-200 font-semibold">Eduardo Gillung</span>
          </div>
        </Link>

        {/* Navigation */}
        <GlassSurface
          width="100%"
          height="60%"
          borderWidth={0.1}
          borderRadius={32}
          blur={24}
          opacity={0.8}
          brightness={100}
          style={{ background: 'rgba(255,255,255,0.65)' }}
        >
          <nav className="flex justify-center items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-slate-200 transition-all duration-200 transform hover:scale-110 hover:text-red-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </GlassSurface>

        {/* Mobile Menu Button */}
        <div className="flex justify-end">
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
