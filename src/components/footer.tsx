import { Link } from "react-router-dom";


const Footer = () => {

  const contactInfo = [
    { icon: "📞", text: "(11) 99777-6658" },
    { icon: "📧", text: "eduardo.gillung@gmail.com" },
    { icon: "📍", text: "EduardoGillung" },
  ];

  const socialLinks = [
    { href: "#", icon: "📱", label: "WhatsApp" },
    { href: "#", icon: "📘", label: "Facebook" },
  ];

  return (
    <footer className="bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <span className="bg-slate-200 bg-clip-text text-transparent font-semibold">Eduardo Gillung</span> 
            </Link>
            <p className="text-slate-200 text-4xl leading-relaxed">
               Vamos começar?
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Contato</h3>
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

        <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            &copy; 2025 Eduardo Gillung. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
