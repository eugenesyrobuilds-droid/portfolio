"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function BackToTop() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.reading.backToTop}
      className={`fixed bottom-8 right-8 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 hover:bg-accent-400 text-paper shadow-glow transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
