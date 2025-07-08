import Header from "../components/header";
import Footer from "../components/footer";
import { WavyBackground } from "../components/ui/wavy-background";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Wavy background como camada de fundo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <WavyBackground
          colors={["#22d3ee", "#38bdf8", "#e0e7ef", "#f8fafc"]}
          backgroundFill="#f8fafc"
          blur={24}
          speed="fast"
          waveOpacity={0.25}
          containerClassName="w-full h-full"
          className="w-full h-full"
        />
      </div>
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
