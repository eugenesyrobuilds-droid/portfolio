"use client";

import { Mail, Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { useCopy } from "@/lib/useCopy";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const EMAIL = "eugene.syro.builds@gmail.com";

const copy = {
  en: {
    eyebrow: "Contact",
    titleBefore: "The fastest way is",
    titleAccent: "email",
    lede: "I respond within a day.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    githubBody:
      "Code samples available on request. Most repos are private (client work).",
  },
  uk: {
    eyebrow: "Контакти",
    titleBefore: "Найшвидше —",
    titleAccent: "email",
    lede: "Відповідаю протягом доби.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    githubBody:
      "Приклади коду — на запит. Більшість репозиторіїв приватні (клієнтська робота).",
  },
};

export default function ContactContent() {
  const { locale, t } = useLocale();
  const c = copy[locale];
  const { copied, copy: copyEmail } = useCopy(EMAIL);

  return (
    <div className="container-wide max-w-prose-narrow py-section">
      <span className="chip mb-4">{c.eyebrow}</span>
      <h1 className="font-heading font-bold text-h1 text-ink-900 mb-4 leading-tight">
        {c.titleBefore}{" "}
        <span className="font-serif italic font-normal accent-text-gradient">
          {c.titleAccent}
        </span>
        .
      </h1>
      <p className="text-body-lg text-ink-700 mb-12">{c.lede}</p>

      <div className="space-y-4">
        <button
          type="button"
          onClick={copyEmail}
          aria-label={t.email.copy}
          className="w-full text-left flex items-center gap-5 p-5 bg-paper rounded-card shadow-soft hover:shadow-card transition-shadow group"
        >
          <span className="w-11 h-11 rounded-full bg-accent-50 flex items-center justify-center shrink-0">
            {copied ? (
              <Check className="w-5 h-5 text-accent-500" />
            ) : (
              <Mail className="w-5 h-5 text-accent-500" />
            )}
          </span>
          <div className="flex-1">
            <p className="text-label uppercase text-ink-500 mb-1">
              {copied ? t.email.copied : c.emailLabel}
            </p>
            <p className="text-body text-ink-900 group-hover:text-accent-600 transition-colors">
              {EMAIL}
            </p>
          </div>
        </button>

        <a
          href="https://www.linkedin.com/in/eugene-siromyatnikov/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 p-5 bg-paper rounded-card shadow-soft hover:shadow-card transition-shadow group"
        >
          <span className="w-11 h-11 rounded-full bg-accent-50 flex items-center justify-center shrink-0">
            <LinkedinIcon className="w-5 h-5 text-accent-500" />
          </span>
          <div className="flex-1">
            <p className="text-label uppercase text-ink-500 mb-1">{c.linkedinLabel}</p>
            <p className="text-body text-ink-900 group-hover:text-accent-600 transition-colors">
              linkedin.com/in/eugene-siromyatnikov
            </p>
          </div>
        </a>

        <div className="flex items-start gap-5 p-5 bg-paper/60 rounded-card shadow-soft">
          <span className="w-11 h-11 rounded-full bg-accent-50/60 flex items-center justify-center shrink-0">
            <GithubIcon className="w-5 h-5 text-ink-500" />
          </span>
          <div className="flex-1">
            <p className="text-label uppercase text-ink-500 mb-1">{c.githubLabel}</p>
            <p className="text-body text-ink-700">{c.githubBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
