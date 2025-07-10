import Header from "../components/header";
import Footer from "../components/footer";
import { WavyBackground } from "../components/ui/wavy-background";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <WavyBackground
          colors={["#f8fafc", "#f8fafc", "#DFF9FF", "#92EBFF", "#92EBFF"]}
          backgroundFill="#ffff"
          blur={18}
          speed="fast"
          waveOpacity={0.30}
          containerClassName="w-full h-full"
          className="w-full h-full -translate-y-15"
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
