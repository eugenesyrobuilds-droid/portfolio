"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleContext";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const { t } = useLocale();
  return (
    <header className="sticky top-0 z-50 pt-4 pb-2">
      <div className="container-wide">
        <div
          className="flex items-center justify-between h-14 px-6 rounded-pill border border-accent-border shadow-pill"
          style={{
            background: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <Link
            href="/"
            className="font-heading font-bold text-ink-900 text-base tracking-tight"
          >
            Eugene Syromiatnikov
          </Link>
          <div className="flex items-center gap-7">
            <nav className="hidden sm:flex items-center gap-7">
              <Link
                href="/"
                className="text-ink-700 hover:text-accent-600 text-small font-medium transition-colors"
              >
                {t.nav.work}
              </Link>
              <Link
                href="/about"
                className="text-ink-700 hover:text-accent-600 text-small font-medium transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                className="text-ink-700 hover:text-accent-600 text-small font-medium transition-colors"
              >
                {t.nav.contact}
              </Link>
            </nav>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
