"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { useLocale } from "@/lib/i18n/LocaleContext";

type Props = {
  title: string;
  subtitle: string;
  status: string;
  statusVariant?: "production" | "regulatory";
  tags: string[];
  tldr: string;
  metaLine?: string;
  children: React.ReactNode;
};

export default function CaseStudyLayout({
  title,
  subtitle,
  status,
  statusVariant = "production",
  tags,
  tldr,
  metaLine,
  children,
}: Props) {
  const { t } = useLocale();
  return (
    <article>
      <div className="container-wide pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-pill bg-paper shadow-soft border border-accent-border text-small text-ink-700 hover:text-accent-600 px-4 py-2 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> {t.allWork}
        </Link>
      </div>

      <header className="container-wide pt-10 max-w-prose-wide">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <StatusBadge label={status} variant={statusVariant} />
          {tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-heading font-bold text-h1 text-ink-900 mb-5 leading-[1.08]">
          {title}
        </h1>
        <p className="text-body-lg text-ink-700 max-w-prose-narrow">{subtitle}</p>
        {metaLine && (
          <p className="text-small text-ink-500 max-w-prose-narrow mt-3">{metaLine}</p>
        )}
      </header>

      <section className="container-wide max-w-prose-wide mt-10">
        <div className="bg-paper rounded-card shadow-card p-7 mb-12">
          <p className="text-label uppercase text-accent-600 mb-3">{t.quickRead}</p>
          <p className="text-body-lg text-ink-800 leading-relaxed">{tldr}</p>
        </div>
      </section>

      <div className="container-wide max-w-prose-wide pb-section">
        <div className="bg-paper rounded-card shadow-card p-8 sm:p-12 prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-ink-900 prose-p:text-ink-800 prose-li:text-ink-800 prose-strong:text-ink-900 prose-strong:font-semibold prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline prose-em:italic prose-code:font-mono prose-code:text-accent-700 prose-code:bg-accent-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.9em] prose-code:before:content-none prose-code:after:content-none max-w-none">
          {children}
        </div>
      </div>
    </article>
  );
}
