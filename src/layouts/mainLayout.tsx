import Header from "../components/header";
import Footer from "../components/footer";
import DarkVeil from "../components/ui/darkVeil";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative pt-24">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <DarkVeil />
      </div>
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {children}
        </div>
      </main>
      <div className="relative w-full">
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
