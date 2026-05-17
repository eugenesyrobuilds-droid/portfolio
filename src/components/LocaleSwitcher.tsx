"use client";

import clsx from "clsx";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { Locale } from "@/lib/i18n/types";

const options: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UK" },
];

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="inline-flex items-center rounded-pill bg-accent-50 p-0.5 text-label">
      {options.map((opt) => {
        const active = opt.code === locale;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className={clsx(
              "rounded-pill px-3 py-1.5 uppercase transition-colors",
              active
                ? "bg-paper text-accent-600 shadow-soft"
                : "text-ink-500 hover:text-accent-600"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
