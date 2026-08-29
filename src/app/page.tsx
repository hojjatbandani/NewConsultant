import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnicalSolutionsSection from "@/components/TechnicalSolutionsSection";
import AcademicServicesSection from "@/components/AcademicServicesSection";
import ResearchServicesSection from "@/components/ResearchServicesSection";
import InstitutionServicesSection from "@/components/InstitutionServicesSection";
import StatsSection from "@/components/StatsSection";
import SuccessPartnersSection from "@/components/SuccessPartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// The header and footer sit outside <main> so the skip link has a real
// landmark to jump to, and so screen readers get one nav / main / contentinfo
// structure instead of a nav nested inside main.
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white">
        <HeroSection />
        <Reveal><AboutSection /></Reveal>
        <Reveal><TechnicalSolutionsSection /></Reveal>
        <Reveal><AcademicServicesSection /></Reveal>
        <Reveal><ResearchServicesSection /></Reveal>
        <Reveal><InstitutionServicesSection /></Reveal>
        <Reveal><StatsSection /></Reveal>
        <Reveal><SuccessPartnersSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </>
  );
}
