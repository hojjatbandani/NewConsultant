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

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-clip">
      <Navbar />
      <Reveal><HeroSection /></Reveal>
      <Reveal><AboutSection /></Reveal>
      <Reveal><TechnicalSolutionsSection /></Reveal>
      <Reveal><AcademicServicesSection /></Reveal>
      <Reveal><ResearchServicesSection /></Reveal>
      <Reveal><InstitutionServicesSection /></Reveal>
      <Reveal><StatsSection /></Reveal>
      <Reveal><SuccessPartnersSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
      <Reveal><Footer /></Reveal>
    </main>
  );
}
