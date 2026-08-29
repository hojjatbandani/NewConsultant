import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { getService, serviceSlugs } from "@/data/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  // Metadata is resolved on the server, where the visitor's language (stored
  // client-side) is unknown, so we use English — the site's default language —
  // as the canonical SEO content.
  const { metaTitle, metaDescription, keywords } = service.en;
  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white">
        <ServiceDetail slug={slug} />
      </main>
      <Footer />
    </>
  );
}
