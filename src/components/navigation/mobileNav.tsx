import React from "react";
import { Link } from "react-router-dom";
import logoDental from '../../assets/logo-dental.svg';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navigationItems: { to: string; label: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ open, onClose, navigationItems }) => {
  if (!open) return null;
  return (
    <div className="fixed z-50 flex 0 top-0 left-0">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      {/* Drawer */}
      <div className="relative bg-white w-72 max-w-[80vw] h-full shadow-2xl p-6 flex flex-col animate-slide-in-left border-r border-slate-100 rounded-r-xl">
        {/* Logo e fechar */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
            <img src={logoDental} alt="Logo Nome Empresa" className="w-10 h-10 rounded-full" />
            <span className="text-lg font-bold text-slate-700">
              <span className="text-secondary">Nome</span> <span>Empresa</span>
            </span>
          </Link>
          <button
            className="text-slate-700 hover:text-cyan-500 p-1"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Links */}
        <nav className="flex flex-col gap-2 mt-2">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block text-base font-semibold text-slate-700 rounded-lg px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
              onClick={onClose}
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
      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0.5; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  );
}; 