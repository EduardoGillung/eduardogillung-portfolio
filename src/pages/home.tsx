const Home = () => {

  return (
    <div className="space-y-24 source-sans">
        {/* Hero Section */}

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-6">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-200 mb-12 leading-tight">
              Interfaces, websites e identidades visuais
            
              <span className="block font-extrabold tracking-tight">
              que elevam a percepção da sua marca.
              </span>
            </h1>
          </div>
        </div>

      {/* Showcase de Projetos */}
      <section className="container mx-auto max-w-4xl">
        <h2 className="text-lg font-bold text-slate-200 mb-8">Ultimos Projetos</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="aspect-w-16 aspect-h-10 bg-slate-700 flex items-center justify-center">
                {/* Imagem do projeto */}
                <img src="" alt="Projeto" className="object-cover w-full h-full" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Título do Projeto</h3>
                <p className="text-slate-400 text-sm flex-1">Breve descrição do projeto. Você pode personalizar este texto para cada card.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t-2 border-slate-300 w-full max-w-6xl mx-auto my-8" />

      <section className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-8 text-center">Perguntas Frequentes</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Como posso entrar em contato para um orçamento?</h3>
            <p className="text-slate-400">Você pode utilizar o formulário na página de contato ou me chamar diretamente pelo WhatsApp disponível no rodapé do site.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Quais tipos de projetos você desenvolve?</h3>
            <p className="text-slate-400">Desenvolvo interfaces, sites institucionais, landing pages, identidades visuais e soluções personalizadas para marcas e negócios.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Qual o prazo médio para entrega de um projeto?</h3>
            <p className="text-slate-400">O prazo depende do escopo, mas normalmente projetos de site levam de 1 a 3 semanas após alinhamento inicial.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Você faz manutenção ou suporte após a entrega?</h3>
            <p className="text-slate-400">Sim! Ofereço planos de manutenção e suporte para garantir que seu projeto continue funcionando perfeitamente.</p>
          </div>
        </div>
      </section>
      
      <hr className="border-t-2 border-slate-300 w-full max-w-6xl mx-auto my-8" />
      
    </div>
  );
};

export default Home;
