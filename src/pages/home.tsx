import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  const navigate = useNavigate();

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

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r
             from-blue-400 via-cyan-400 to-cyan-600 
             bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(34,211,238,0.25)] mb-8 leading-tight">
              Seu Sorriso,
              <span className="block font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                Nossa{' '}
                <TypeAnimation
                  sequence={[
                    'Missão', 2000,
                    'Inspiração', 2000,
                    'Paixão', 2000,
                    'Dedicação', 2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-600 to-blue-500 bg-clip-text text-transparent"
                  style={{ minWidth: 120 }}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(34,211,238,0.15)] mb-12 leading-relaxed">
              Cuidamos da sua saúde bucal com excelência, tecnologia avançada e 
              atendimento humanizado. Sua confiança é nossa maior conquista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-br from-cyan-200 via-white to-cyan-50 rounded-3xl font-bold text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:from-[#22d3ee] hover:via-[#f1f5f9] hover:to-[#f8fafc] hover:scale-105 hover:ring-2 hover:ring-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] drop-shadow-[0_2px_8px_rgba(34,140,255,0.35)]"
                onClick={() => navigate('/contact')}
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">Agendar Consulta</span>
              </button>
              <button
                className="bg-gradient-to-br from-cyan-200 via-white to-cyan-50 rounded-3xl font-bold text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:from-[#22d3ee] hover:via-[#f1f5f9] hover:to-[#f8fafc] hover:scale-105 hover:ring-2 hover:ring-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] drop-shadow-[0_2px_8px_rgba(34,140,255,0.35)]"
                onClick={() => navigate('/aboutUs')}
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">Sobre nós</span>
              </button>
            </div>
          </div>
        </div>


      {/* Stats Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-600 mb-6">
            Nossos <span className="text-cyan-400">Serviços</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com a mais alta 
            qualidade e tecnologia disponível no mercado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-b from-blue-500 via-blue-300 to-cyan-500 rounded-3xl p-8 shadow-lg  hover:shadow-xl transition-all duration-300 group-hover:border-cyan-500/30">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-cyan-50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="container mx-auto px-4 max-w-6xl py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-500 mb-8">
                Por que Escolher a <span className="text-cyan-500">Nome Empresa</span>?
              </h2>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Há mais de 15 anos cuidando de sorrisos com excelência. Nossa equipe 
                é formada por profissionais experientes e comprometidos com a sua saúde bucal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-700">Tecnologia de Ponta</h3>
                    <p className="text-slate-700">Equipamentos modernos para diagnósticos precisos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-700">Atendimento Humanizado</h3>
                    <p className="text-slate-700">Cuidado personalizado para cada paciente</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-700">Preços Justos</h3>
                    <p className="text-slate-700">Planos de tratamento acessíveis</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br via-blue-400 to-cyan-100 from-cyan-300 rounded-2xl p-12 text-white text-center shadow-xl">
                <div className="text-6xl mb-6">🦷</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Sua Saúde Bucal em Primeiro Lugar</h3>
                <p className="text-white leading-relaxed">
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
        <div className="bg-gradient-to-br via-blue-400 to-cyan-100 from-cyan-300 rounded-3xl p-12 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-6">
            Pronto para Transformar Seu Sorriso?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende sua consulta hoje mesmo e descubra como podemos ajudar você 
            a ter um sorriso mais bonito e saudável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
              Agendar Consulta
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
