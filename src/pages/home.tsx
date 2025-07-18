import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import dentistImage from "../assets/dentist-image.jpg";


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
    <div className="space-y-24 source-sans">
        {/* Hero Section */}

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-6">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-12 leading-tight">
              Seu Sorriso,
              <span className="block font-extrabold tracking-tight">
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
                  className="inline-block text-slate-200"
                  style={{ minWidth: 120 }}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-dark mb-12 leading-relaxed text-slate-500">

              Cuidamos da sua saúde bucal com excelência, tecnologia avançada e 
              atendimento humanizado. Sua confiança é nossa maior conquista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group bg-gradient-to-r from-[#C80000] via-white to-[#f1f5f9] rounded-3xl font-semibold text-lg px-8 py-4 
                shadow-lg hover:shadow-xl hover:from-white hover:via-[#C80000] hover:to-[#042A4C] hover:scale-105 hover:ring-1 hover:ring-[#00DAA7] focus:outline-none focus:ring-2 focus:ring-[#2A99E7] drop-shadow-[0_2px_8px_rgba(34,140,255,0.35)]"
                onClick={() => navigate('/contact')}
              >
                <span
                  className="shiny-text-white transition-all duration-300 hover:!text-slate-300"
                >
                  Entrar em contato
                </span>
              </button>
              <button
                className="bg-gradient-to-br from-[#C80000] via-white to-[#C80000] rounded-3xl font-semibold text-lg px-8 py-4 transition-all duration-300
                shadow-lg hover:shadow-xl hover:from-[#22d3ee] hover:via-[#f1f5f9] hover:to-[#f8fafc] hover:scale-105 hover:ring-2 hover:ring-[#CCE2FF] focus:outline-none focus:ring-2 focus:ring-[#22d3ee] drop-shadow-[0_2px_8px_rgba(34,140,255,0.35)]"
                onClick={() => navigate('/aboutUs')}
              >
                <span className="text-slate-200">Sobre nós</span>
              </button>
            </div>
          </div>
        </div>


      {/* Stats Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-200 mb-2">
                {stat.number}
              </div>
              <div className="bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-clip-text text-transparent font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">
            Nossos <span className="bg-gradient-to-t from-[#00DAA7] to-[#2A99E7] bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com a mais alta 
            qualidade e tecnologia disponível no mercado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg  hover:shadow-xl transition-all duration-300 group-hover:border-cyan-500/30">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-4">
                  {feature.title}
                </h3>
                <p className="bg-gradient-to-t from-[#2A99E7] to-[#2A99E7] bg-clip-text text-transparent">
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-8">
                <span>Por que Escolher a </span><span className="text-slate-200">Nome Empresa?</span>
              </h2>
              <p className="text-xl bg-gradient-to-r text-slate-500 mb-8 leading-relaxed">
                Há mais de 15 anos cuidando de sorrisos com excelência. Nossa equipe 
                é formada por profissionais experientes e comprometidos com a sua saúde bucal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">✓</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">Tecnologia de Ponta</span>
                    <p className="bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-clip-text text-transparent">Equipamentos modernos para diagnósticos precisos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">✓</span>
                  </div>
                  <div>
                  <span className="font-bold text-slate-200">Atendimento Humanizado</span>
                    <p className="bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-clip-text text-transparent">Cuidado personalizado para cada paciente</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-200">Preços Justos</h3>
                    <p className="bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-clip-text text-transparent">Planos de tratamento acessíveis</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl mx-auto w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl min-h-[18rem] sm:min-h-[22rem] md:min-h-[28rem] lg:min-h-[32rem]"
            >
              <img
                src={dentistImage}
                alt="Dentista cuidando de paciente"
                className="w-full h-[18rem] sm:h-[22rem] md:h-[28rem] lg:h-[32rem] object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end px-2 sm:px-8 pb-8 md:pb-12">
                <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none bg-gradient-to-t from-black/60 via-black/60 to-transparent" />
                <div className="relative z-10 flex flex-col items-center w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-200 drop-shadow mb-2 text-center">Sua Saúde Bucal em Primeiro Lugar</h3>
                  <p className="font-semibold bg-gradient-to-b from-slate-100 to-slate-200 bg-clip-text text-transparent leading-relaxed max-w-md text-center drop-shadow">
                    Cuidamos de você e de toda sua família com o mesmo carinho e profissionalismo que dedicamos aos nossos próprios familiares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - agora com imagem de fundo e textos sobrepostos */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="relative rounded-2xl overflow-hidden shadow-xl mx-auto w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl min-h-[18rem] sm:min-h-[22rem]">
          <div className="absolute inset-0 flex flex-col items-center justify-end px-2 sm:px-8 pb-8 md:pb-12">
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br via-[#2A99E7] to-[#00DAA7] from-[#042A4C]" />
            <div className="relative z-10 flex flex-col items-center w-full">
              <h2 className="text-4xl text-white md:text-5xl font-bold mb-6">Pronto para Transformar Seu Sorriso?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-white">
                Agende sua consulta hoje mesmo e descubra como podemos ajudar você 
                a ter um sorriso mais bonito e saudável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white px-8 py-4 rounded-xl font-bold text-lg transition-colors hover:bg-gradient-to-t hover:from-[#042A4C] hover:to-[#2A99E7] hover:border-2 hover:border-white">
                  <span className="text-slate-200 transition-colors group-hover:text-white"
                  >Entrar em contato</span>
                </button>
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors"
                  onClick={() => navigate('/contact')}
                >
                  Falar com Especialista
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
