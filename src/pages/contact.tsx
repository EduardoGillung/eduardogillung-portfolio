import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const contactMethods = [
    {
      icon: "📞",
      title: "Telefone",
      details: ["(11) 99999-9999", "(11) 88888-8888"],
      description: "Atendimento de segunda a sexta, das 8h às 18h"
    },
    {
      icon: "📧",
      title: "Email",
      details: ["contato@dentalcare.com", "agendamento@dentalcare.com"],
      description: "Resposta em até 24 horas"
    },
    {
      icon: "📍",
      title: "Endereço",
      details: ["Rua das Flores, 123", "Vila Madalena - São Paulo/SP", "CEP: 01234-567"],
      description: "Estacionamento gratuito disponível"
    },
    {
      icon: "🕒",
      title: "Horário de Funcionamento",
      details: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h", "Domingo: Fechado"],
      description: "Emergências: (11) 99999-9999"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulação de envio de email (substitua por EmailJS real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui você integraria com EmailJS
      // const result = await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-slate-800/80 via-slate-700/30 to-slate-800/80 rounded-2xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contato conosco</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Estamos aqui para ajudar você! Entre em contato conosco para agendar sua consulta, 
            tirar dúvidas ou solicitar um orçamento personalizado.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span className="font-medium">Resposta em até 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💬</span>
              <span className="font-medium">Atendimento Personalizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎯</span>
              <span className="font-medium">Soluções Específicas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="grid lg:grid-cols-2 gap-12">
        {/* Formulário de Contato */}
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Envie sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mensagem</span>
          </h2>
          
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-cyan-900/50 border border-cyan-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-cyan-100 font-medium">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </span>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-red-400 text-xl">⚠</span>
                <span className="text-red-100 font-medium">
                  Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-slate-700/50 text-slate-100 placeholder-slate-400"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-slate-700/50 text-slate-100 placeholder-slate-400"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-slate-700/50 text-slate-100 placeholder-slate-400"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-slate-700/50 text-slate-100"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="agendamento">Agendamento de Consulta</option>
                  <option value="orcamento">Solicitar Orçamento</option>
                  <option value="duvida">Tirar Dúvidas</option>
                  <option value="emergencia">Emergência</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-none bg-slate-700/50 text-slate-100 placeholder-slate-400"
                placeholder="Descreva sua necessidade ou dúvida..."
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                isFormValid && !isSubmitting
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </div>
              ) : (
                "Enviar Mensagem"
              )}
            </button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">
              Informações de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contato</span>
            </h2>
            <p className="text-slate-300 mb-8">
              Escolha a forma mais conveniente para entrar em contato conosco. 
              Nossa equipe está pronta para atender você!
            </p>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-100 mb-2">{method.title}</h3>
                    <div className="space-y-1">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-300 font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="bg-gradient-to-br from-slate-800/80 via-slate-700/30 to-slate-800/80 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Localização</span>
          </h2>
          <p className="text-lg text-slate-300">
            Venha nos visitar! Estamos localizados em uma região de fácil acesso com estacionamento gratuito.
          </p>
        </div>
        
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50">
          <div className="aspect-video bg-slate-700/50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🗺️</span>
              <p className="text-slate-300 font-medium">Mapa Interativo</p>
              <p className="text-sm text-slate-400">Rua das Flores, 123 - Vila Madalena, São Paulo/SP</p>
            </div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-cyan-900/30 rounded-lg">
              <span className="text-2xl block mb-2">🚗</span>
              <p className="font-medium text-slate-100">Estacionamento</p>
              <p className="text-sm text-slate-300">Gratuito</p>
            </div>
            <div className="p-4 bg-cyan-900/30 rounded-lg">
              <span className="text-2xl block mb-2">🚇</span>
              <p className="font-medium text-slate-100">Metrô</p>
              <p className="text-sm text-slate-300">Vila Madalena</p>
            </div>
            <div className="p-4 bg-cyan-900/30 rounded-lg">
              <span className="text-2xl block mb-2">🚌</span>
              <p className="font-medium text-slate-100">Ônibus</p>
              <p className="text-sm text-slate-300">Várias linhas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Frequentes</span>
          </h2>
          <p className="text-lg text-slate-300">
            Respostas rápidas para as dúvidas mais comuns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-100 mb-3">Como agendar uma consulta?</h3>
            <p className="text-slate-300 text-sm">
              Você pode agendar através do telefone, WhatsApp, email ou preenchendo o formulário acima. 
              Nossa equipe entrará em contato para confirmar o horário.
            </p>
          </div>
          
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-100 mb-3">Aceitam convênios?</h3>
            <p className="text-slate-300 text-sm">
              Sim! Trabalhamos com os principais convênios odontológicos. 
              Entre em contato para verificar se o seu convênio está na lista.
            </p>
          </div>
          
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-100 mb-3">Qual o prazo para resposta?</h3>
            <p className="text-slate-300 text-sm">
              Respondemos em até 24 horas em dias úteis. Para emergências, 
              temos um número específico disponível 24/7.
            </p>
          </div>
          
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-100 mb-3">Fazem atendimento de emergência?</h3>
            <p className="text-slate-300 text-sm">
              Sim! Para emergências odontológicas, temos um número específico 
              que funciona 24 horas por dia, 7 dias por semana.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
