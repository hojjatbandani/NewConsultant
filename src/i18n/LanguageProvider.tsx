"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dict, type Lang } from "./dictionary";

type LanguageContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Restore saved preference once, after hydration. Done in an effect (not a
  // lazy initializer) so SSR and first client render both start from "en",
  // avoiding a hydration mismatch.
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time restore from browser storage
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  // Reflect language on <html> (dir + lang) and persist it.
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    setLang,
    t: dictionary[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
