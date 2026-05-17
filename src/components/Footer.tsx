"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-section">
      <div className="container-wide pb-10">
        <div className="border-t border-accent-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-small text-ink-500">{t.footer.built}</p>
          <div className="flex items-center gap-6 text-small text-ink-500">
            <a
              href="mailto:[contact email]"
              className="hover:text-accent-600 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/eugene-siromyatnikov/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
