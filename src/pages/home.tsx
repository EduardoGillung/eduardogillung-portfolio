const Home = () => {
  const features = [
    {
      icon: "🦷",
      title: "Clínica Geral",
      description: "Atendimento completo para toda a família com tecnologia de ponta."
    },
    {
      icon: "✨",
      title: "Estética Dental",
      description: "Transforme seu sorriso com procedimentos estéticos modernos."
    },
    {
      icon: "🦴",
      title: "Cirurgia Oral",
      description: "Procedimentos cirúrgicos seguros com recuperação rápida."
    },
    {
      icon: "👶",
      title: "Odontopediatria",
      description: "Cuidado especializado para crianças com ambiente lúdico."
    }
  ];

  const stats = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "5.000+", label: "Pacientes Atendidos" },
    { number: "4.9", label: "Avaliação dos Pacientes" },
    { number: "100%", label: "Satisfação Garantida" }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-slate-50"></div>
        <div className="relative container mx-auto px-4 max-w-6xl py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Seu Sorriso, 
              <span className="text-emerald-600 block">Nossa Missão</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
              Cuidamos da sua saúde bucal com excelência, tecnologia avançada e 
              atendimento humanizado. Sua confiança é nossa maior conquista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                Agendar Consulta
              </button>
              <button className="border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                Conhecer Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Nossos <span className="text-emerald-600">Serviços</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com a mais alta 
            qualidade e tecnologia disponível no mercado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group-hover:border-emerald-200">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Por que Escolher a <span className="text-emerald-600">DentalCare</span>?
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Há mais de 15 anos cuidando de sorrisos com excelência. Nossa equipe 
                é formada por profissionais experientes e comprometidos com a sua saúde bucal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Tecnologia de Ponta</h3>
                    <p className="text-slate-600">Equipamentos modernos para diagnósticos precisos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Atendimento Humanizado</h3>
                    <p className="text-slate-600">Cuidado personalizado para cada paciente</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Preços Justos</h3>
                    <p className="text-slate-600">Planos de tratamento acessíveis</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-emerald-600 rounded-2xl p-12 text-white text-center">
                <div className="text-6xl mb-6">🦷</div>
                <h3 className="text-2xl font-bold mb-4">Sua Saúde Bucal em Primeiro Lugar</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Cuidamos de você e de toda sua família com o mesmo carinho e 
                  profissionalismo que dedicamos aos nossos próprios familiares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Seu Sorriso?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende sua consulta hoje mesmo e descubra como podemos ajudar você 
            a ter um sorriso mais bonito e saudável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
              Agendar Consulta
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
