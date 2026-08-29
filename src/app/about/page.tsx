import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Horizons Statistical Consulting",
  description:
    "Horizons Statistical Consulting specializes in statistical and research services, helping individuals and organizations make accurate, data-driven decisions through innovative, confidential, and reliable solutions.",
  keywords: [
    "about Horizons",
    "statistical consulting company",
    "research services company",
    "data analysis consultancy",
    "statistical consultants",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Horizons Statistical Consulting",
    description:
      "Statistical and research consulting that turns data into confident, evidence-based decisions for academic and institutional clients.",
    type: "website",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
