import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ExternalLinksSection from "@/components/ExternalLinksSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <ExternalLinksSection />
      </main>
      
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
