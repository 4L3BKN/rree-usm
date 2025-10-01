import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { NewsSection } from "@/components/home/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesGrid />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
