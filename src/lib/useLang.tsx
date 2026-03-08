"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ko";

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "ko", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");
  const toggle = () => setLang((l) => (l === "en" ? "ko" : "en"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick Korean or English text based on current language */
export function t(en: string, ko?: string, lang?: Lang) {
  if (!ko) return en;
  return lang === "ko" ? ko : en;
}
