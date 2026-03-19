import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PartnersSection } from './components/PartnersSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ServicesSection } from './components/ServicesSection';
import { OtherServicesSection } from './components/OtherServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { AboutSection } from './components/AboutSection';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-[#0A2E3D] min-h-screen">
      <Header />
      <HeroSection />
      <PartnersSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <OtherServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <AboutSection />
      <DifferentiatorSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
