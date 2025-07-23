import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const Home = () => {

  return (
    <div className="space-y-24 source-sans">
        {/* Hero Section */}
        <div className="relative z-10 container mx-auto px-4 max-w-5xl py-6">
          <div className="text-center max-w-5xl mx-auto">
            <TextGenerateEffect
              words={
                "Interfaces, websites e identidades visuais que elevam a percepção da sua marca."
              }
              className="text-4xl font-bold text-slate-200 mb-12 leading-tight"
              filter={true}
              duration={0.5}
            />
          </div>
        </div>

        {/* Fundo escuro para Showcase de Projetos em diante */}
        <div className="w-full bg-black pt-12 pb-12 rounded-3xl border ">
          {/* Showcase de Projetos */}
          <section className="container mx-auto max-w-4xl">
            <h2 className="text-lg font-semibold text-slate-600">Ultimos Projetos</h2>
            <div className="space-y-6">
              <InfiniteMovingCards
                items={[
                  {
                    quote: "Breve descrição do projeto 1. Você pode personalizar este texto para cada card.",
                    name: "Título do Projeto 1",
                    title: "Categoria ou tecnologia"
                  },
                  {
                    quote: "Breve descrição do projeto 2. Você pode personalizar este texto para cada card.",
                    name: "Título do Projeto 2",
                    title: "Categoria ou tecnologia"
                  },
                  {
                    quote: "Breve descrição do projeto 3. Você pode personalizar este texto para cada card.",
                    name: "Título do Projeto 3",
                    title: "Categoria ou tecnologia"
                  }
                ]}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                className="border border-slate-800 rounded-xl bg-[#181818]"
              />
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
        </div>
    </div>
  );
};

export default Home;
