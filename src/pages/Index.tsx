import { HeroSection } from "@/components/HeroSection";
import { ImpactStats } from "@/components/ImpactStats";
import { DonationCards } from "@/components/DonationCards";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactStats />
      <DonationCards />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
