import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

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
  title: "Horizons Statistical Consulting",
  description:
    "Horizons Statistical Consulting is a company specializing in providing statistical and research services.",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
