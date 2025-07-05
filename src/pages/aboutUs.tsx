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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Sua Saúde Bucal em <span className="text-emerald-600">Primeiro Lugar</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Há mais de 15 anos cuidando de sorrisos com excelência, tecnologia de ponta e 
            atendimento humanizado. Sua confiança é nossa maior conquista.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👨‍⚕️</span>
              <span className="font-medium">15+ Anos de Experiência</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏥</span>
              <span className="font-medium">5.000+ Pacientes Atendidos</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⭐</span>
              <span className="font-medium">4.9/5 Avaliação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Nossa <span className="text-emerald-600">Missão</span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Proporcionar saúde bucal de qualidade para toda a família, através de tratamentos 
            personalizados, tecnologia avançada e atendimento humanizado, contribuindo para 
            a autoestima e bem-estar de nossos pacientes.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 text-xl">✓</span>
              <span className="text-slate-700">Atendimento personalizado para cada paciente</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 text-xl">✓</span>
              <span className="text-slate-700">Tecnologia de ponta para diagnósticos precisos</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 text-xl">✓</span>
              <span className="text-slate-700">Ambiente acolhedor e seguro</span>
            </div>
          </div>
        </div>
        <div className="bg-emerald-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Nossos Valores</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💙</span>
              <span>Ética e Transparência</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎯</span>
              <span>Excelência em Tudo</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🤝</span>
              <span>Respeito ao Paciente</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔬</span>
              <span>Inovação Constante</span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Nossos <span className="text-emerald-600">Serviços</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com a mais alta 
            qualidade e tecnologia disponível no mercado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-center space-x-2">
                    <span className="text-emerald-600">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-slate-50 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Por que Escolher a <span className="text-emerald-600">DentalCare</span>?
          </h2>
          <p className="text-lg text-slate-600">
            Nossos diferenciais garantem o melhor tratamento para você e sua família.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            O que Nossos <span className="text-emerald-600">Pacientes</span> Dizem
          </h2>
          <p className="text-lg text-slate-600">
            A satisfação dos nossos pacientes é nossa maior recompensa.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex text-amber-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para Transformar Seu Sorriso?
        </h2>
        <p className="text-xl mb-6 opacity-90">
          Agende sua consulta hoje mesmo e descubra como podemos ajudar você 
          a ter um sorriso mais bonito e saudável.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
            Agendar Consulta
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-emerald-600 transition-colors">
            Falar com Especialista
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
