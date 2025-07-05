import { Link } from "react-router";

const Footer = () => {

  const contactInfo = [
    { icon: "📞", text: "(11) 99999-9999" },
    { icon: "📧", text: "contato@dentalcare.com" },
    { icon: "📍", text: "Rua das Flores, 123 - São Paulo" },
    { icon: "🕒", text: "Seg-Sex: 8h às 18h" },
  ];

  const socialLinks = [
    { href: "#", icon: "📱", label: "WhatsApp" },
    { href: "#", icon: "📘", label: "Facebook" },
    { href: "#", icon: "📷", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-950/95 backdrop-blur-sm text-white mt-auto border-t border-slate-700/50">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:from-cyan-600 group-hover:to-blue-700 transition-all duration-300">
                <span className="text-white font-bold text-sm">🦷</span>
              </div>
              <span className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                DentalCare
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Cuidando do seu sorriso com tecnologia de ponta e profissionais experientes. 
              Sua saúde bucal é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Contato</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-300 text-sm">
                  <span className="text-lg">{contact.icon}</span>
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; 2024 DentalCare. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
