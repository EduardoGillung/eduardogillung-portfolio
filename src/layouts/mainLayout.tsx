import Header from "../components/header";
import Footer from "../components/footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30">
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
