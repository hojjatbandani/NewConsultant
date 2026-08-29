import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Horizons Statistical Consulting",
  description:
    "Get in touch with Horizons Statistical Consulting. Send us a message about your statistical or research project and our consultants will get back to you.",
  keywords: [
    "contact Horizons",
    "statistical consulting contact",
    "request a consultation",
    "research services contact",
    "data analysis consultation",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Horizons Statistical Consulting",
    description:
      "Send us a message about your statistical or research project and our consultants will get back to you.",
    type: "website",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
