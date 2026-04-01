import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { StakeholdersSection } from './components/StakeholdersSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ServicesSection } from './components/ServicesSection';
import { OtherServicesSection } from './components/OtherServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-[#0A2E3D] min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <StakeholdersSection />
      <DifferentiatorSection />
      <StakeholdersSection />
      <ServicesSection />
      <OtherServicesSection />
      <BenefitsSection /> 
      <HowItWorksSection />
      <PartnersSection />
      <SolutionSection />
      <TestimonialsSection />
      <ProblemSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}