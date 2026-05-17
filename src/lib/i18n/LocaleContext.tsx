"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Locale } from "./types";
import { DEFAULT_LOCALE, LOCALES } from "./types";
import { dict, type Dict } from "./dict";

const STORAGE_KEY = "portfolio-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && (LOCALES as string[]).includes(stored)) {
        setLocaleState(stored);
      } else {
        const navLang = window.navigator.language?.toLowerCase() ?? "";
        if (navLang.startsWith("uk")) setLocaleState("uk");
      }
    } catch {
      // ignore (private mode, etc.)
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value: LocaleContextValue = {
    locale,
    setLocale,
    t: dict[locale],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}
