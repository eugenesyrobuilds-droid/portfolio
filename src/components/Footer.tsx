"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { useCopy } from "@/lib/useCopy";

const EMAIL = "eugene.syro.builds@gmail.com";

export default function Footer() {
  const { t } = useLocale();
  const { copied, copy } = useCopy(EMAIL);
  return (
    <footer className="mt-section">
      <div className="container-wide pb-10">
        <div className="border-t border-accent-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-small text-ink-500">{t.footer.built}</p>
          <div className="flex items-center gap-6 text-small text-ink-500">
            <button
              type="button"
              onClick={copy}
              aria-label={t.email.copy}
              className="hover:text-accent-600 transition-colors"
            >
              {copied ? t.email.copied : "Email"}
            </button>
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
