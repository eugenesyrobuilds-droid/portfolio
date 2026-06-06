"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import StatusBadge from "./StatusBadge";
import CaseStudyTOC from "./CaseStudyTOC";
import ReadingProgressBar from "./ReadingProgressBar";
import BackToTop from "./BackToTop";
import ReadNext from "./ReadNext";
import FadeIn from "./FadeIn";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { CaseSlug } from "@/lib/caseStudies";

type Props = {
  slug?: CaseSlug;
  title: string;
  subtitle: string;
  status: string;
  statusVariant?: "production" | "regulatory";
  tags: string[];
  tldr: string;
  metaLine?: string;
  readingTimeMin?: number;
  children: React.ReactNode;
};

export default function CaseStudyLayout({
  slug,
  title,
  subtitle,
  status,
  statusVariant = "production",
  tags,
  tldr,
  metaLine,
  readingTimeMin,
  children,
}: Props) {
  const { t } = useLocale();
  const tldrParagraphs = tldr.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <ReadingProgressBar />
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
            {readingTimeMin && (
              <span className="inline-flex items-center gap-1.5 rounded-pill bg-paper-tint text-ink-500 text-label uppercase px-3 py-1.5">
                <Clock className="w-3 h-3" />
                {readingTimeMin} {t.reading.minRead}
              </span>
            )}
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
          <FadeIn>
            <div className="bg-paper rounded-card shadow-card p-7 mb-12">
              <p className="text-label uppercase text-accent-600 mb-3">{t.quickRead}</p>
              <div className="text-body-lg text-ink-800 leading-relaxed space-y-4">
                {tldrParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <div className="container-wide pb-section">
          <div className="lg:grid lg:grid-cols-[minmax(0,52rem)_minmax(0,200px)] lg:gap-12 lg:justify-center">
            <div
              data-case-study-prose
              className="bg-paper rounded-card shadow-card p-8 sm:p-12 prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-ink-900 prose-p:text-ink-800 prose-li:text-ink-800 prose-strong:text-ink-900 prose-strong:font-semibold prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline prose-em:italic prose-code:font-mono prose-code:text-accent-700 prose-code:bg-accent-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.9em] prose-code:before:content-none prose-code:after:content-none max-w-none"
            >
              {children}
            </div>
            <div className="hidden lg:block">
              <CaseStudyTOC />
            </div>
          </div>
        </div>

        {slug && <ReadNext currentSlug={slug} />}
      </article>
      <BackToTop />
    </>
  );
}
