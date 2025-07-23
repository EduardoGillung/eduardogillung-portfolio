import Header from "../components/header";
import Footer from "../components/footer";
import Balatro from "../components/ui/balatro";


interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Balatro Top Effect */}
      <div className="absolute left-0 top-0 w-full h-[100vh] -z-10 pointer-events-none">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={2000}
          color1="#940000"
          color2="#959595"
          color3="#3C0000"
        />
      </div>
      
      {/* Balatro Bottom Effect */}
      <div className="absolute left-0 bottom-0 w-full h-[120vh] -z-10 pointer-events-none rotate-180">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={2000}
          color1="#940000"
          color2="#959595"
          color3="#3C0000"
        />
      </div>
      {/* Balatro Central Effect (preto/cinza escuro) */}
      <div className="absolute left-0 top-[100vh] w-full h-[calc(100vh)] -z-10 pointer-events-none">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={2000}
          spinAmount={2.5}
          spinSpeed={5.0}
          spinRotation={2.0}
          color1="#111111"
          color2="#222222"
          color3="#000000"
        />
      </div>
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
