import Header from "../components/header";
import Footer from "../components/footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative pt-24">
      <div className="absolute inset-0 -z-10 w-full h-full">
     
      </div>
      <Header />
      {/* Efeito de transição suave abaixo do header */}
      <div className="w-full h-4 -mt-1 z-10">
        <div className="w-full h-4 bg-gradient-to-b from-[#042A4C]/40 to-transparent" />
      </div>
      {/* Efeito de luz Lamp no topo, começando abaixo do header */}
      <div className="pointer-events-none absolute left-0 w-full h-20 z-0" style={{ top: '6rem' }}>
        <div className="w-full h-20 bg-gradient-to-b from-[#2A99E7]/40 to-transparent" />
      </div>
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {children}
        </div>
      </main>
      {/* Efeito de luz Lamp acima do footer, sem afetar o footer */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 -top-20 w-full h-20 z-0">
          <div className="w-full h-20 bg-gradient-to-t from-[#2A99E7]/40 to-transparent" />
        </div>
        <Footer />
      </div>

    </div>
  );
};

export default MainLayout;
