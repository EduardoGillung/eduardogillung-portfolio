import Header from "../components/header";
import Footer from "../components/footer";
import DarkVeil from "../components/ui/darkVeil";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <DarkVeil />
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
