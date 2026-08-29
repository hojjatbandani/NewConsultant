import type { Metadata, Viewport } from "next";
import { Inter, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

// Arabic / RTL font (placed in public/fonts).
const iranSans = localFont({
  src: [
    { path: "../../public/fonts/IRANSans_UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/IRANSans_Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/IRANSans.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/IRANSans_Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/IRANSans_Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://horizons-consulting.example",
  ),
  title: {
    default: "Horizons Statistical Consulting",
    template: "%s",
  },
  description:
    "Horizons Statistical Consulting is a company specializing in providing statistical and research services.",
  keywords: [
    "statistical consulting",
    "research services",
    "data analysis",
    "survey research",
    "data collection",
  ],
};

// `maximumScale`/`userScalable` are deliberately left at their defaults so the
// page stays pinch-zoomable (WCAG 1.4.4). Only the theme color is set here.
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} ${iranSans.variable}`}
    >
      <body className="min-h-screen bg-white antialiased">
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
