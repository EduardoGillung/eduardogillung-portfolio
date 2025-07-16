import bodyHero from "../assets/body-hero.jpg";
import FadeContent from "../components/ui/fadeContent";

const AboutUs = () => {
  const services = [
    {
      icon: "🦷",
      title: "Clínica Geral",
      description: "Atendimento completo para toda a família com tecnologia de ponta e profissionais experientes.",
      features: ["Limpeza Profissional", "Restaurações", "Tratamento de Cáries", "Exames Preventivos"]
    },
    {
      icon: "✨",
      title: "Estética Dental",
      description: "Transforme seu sorriso com procedimentos estéticos modernos e resultados naturais.",
      features: ["Clareamento Dental", "Lentes de Contato", "Aparelhos Invisíveis", "Harmonização Facial"]
    },
    {
      icon: "🦴",
      title: "Cirurgia Oral",
      description: "Procedimentos cirúrgicos seguros com anestesia local e recuperação rápida.",
      features: ["Extração de Dentes", "Implantes Dentários", "Cirurgia Ortognática", "Enxertos Ósseos"]
    },
    {
      icon: "👶",
      title: "Odontopediatria",
      description: "Cuidado especializado para crianças com ambiente lúdico e técnicas gentis.",
      features: ["Primeira Consulta", "Prevenção de Cáries", "Tratamento de Traumas", "Orientação aos Pais"]
    }
  ];

  const benefits = [
    {
      icon: "🏆",
      title: "Excelência Médica",
      description: "Equipe com mais de 15 anos de experiência e formação nas melhores universidades."
    },
    {
      icon: "🔬",
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes."
    },
    {
      icon: "💝",
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado com foco no conforto e bem-estar do paciente."
    },
    {
      icon: "💰",
      title: "Preços Justos",
      description: "Planos de tratamento acessíveis com opções de parcelamento facilitado."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Paciente há 5 anos",
      content: "A DentalCare transformou meu sorriso! A equipe é incrível e o tratamento foi perfeito. Recomendo para todos!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Paciente há 3 anos",
      content: "Excelente atendimento! Os doutores são muito profissionais e o ambiente é super acolhedor.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Paciente há 2 anos",
      content: "Minha filha adora ir ao dentista aqui! A odontopediatra é maravilhosa e muito paciente.",
      rating: 5
    }
  ];

  return (
    <FadeContent duration={900} easing="ease-out" initialOpacity={0}>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#042A4C] mb-6 text-left max-w-xl">
                Sua Saúde Bucal em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Primeiro Lugar</span>
              </h1>
              <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-xl">
              Nossa empresa desenvolve soluções tecnológicas que facilitam a gestão e a organização da sua clínica. 
              Sabemos que eficiência e controle são essenciais para oferecer um atendimento de qualidade e manter a saúde financeira do seu negócio.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-80 lg:w-96">
              <div className="relative w-full">
                <div className="absolute inset-0 rounded-3xl bg-cyan-100/60 blur-xl opacity-70 -z-10"></div>
                <img 
                  src={bodyHero} 
                  alt="Equipe de dentistas" 
                  className="rounded-3xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-cover shadow-lg -translate-x-16 -translate-y-8"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
            
        </section>

        {/* Missão e Valores */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#042A4C] mb-6">
              Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Missão</span>
            </h2>
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              Proporcionar saúde bucal de qualidade para toda a família, através de tratamentos 
              personalizados, tecnologia avançada e atendimento humanizado, contribuindo para 
              a autoestima e bem-estar de nossos pacientes.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-slate-700">Atendimento personalizado para cada paciente</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-slate-700">Tecnologia de ponta para diagnósticos precisos</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 text-xl">✓</span>
                <span className="text-slate-700">Ambiente acolhedor e seguro</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-[#042A4C]">Nossos Valores</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💙</span>
                <span className="text-[#2A99E7]">Ética e Transparência</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎯</span>
                <span className="text-[#2A99E7]">Excelência em Tudo</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🤝</span>
                <span className="text-[#2A99E7]">Respeito ao Paciente</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔬</span>
                <span className="text-[#2A99E7]">Inovação Constante</span>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-600 mb-4">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Serviços</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos odontológicos com a mais alta 
              qualidade e tecnologia disponível no mercado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-tertiary mb-3 text-[#042A4C]">{service.title}</h3>
                <p className="text-[#2A99E7] mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-[#042A4C] flex items-center space-x-2">
                      <span className="text-cyan-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-gradient-to-br via-blue-400 to-cyan-100 from-cyan-300 rounded-3xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Por que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-100">DentalCare</span>?
            </h2>
            <p className="text-lg text-slate-200">
              Nossos diferenciais garantem o melhor tratamento para você e sua família.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{benefit.title}</h3>
                <p className="text-slate-200 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        

        {/* Depoimentos */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-600 mb-4">
              O que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pacientes</span> Dizem
            </h2>
            <p className="text-lg text-slate-500">
              A satisfação dos nossos pacientes é nossa maior recompensa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-700/50">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-slate-600">{testimonial.name}</p>
                  <p className="text-xs text-slate-400 mb-2">{testimonial.role}</p>
                  <p className="text-lg text-slate-700 mb-4 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </FadeContent>
  );
};

export default AboutUs;
