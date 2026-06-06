"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import {
  caseStudies,
  getNextCaseStudies,
  type CaseSlug,
} from "@/lib/caseStudies";

type Props = { currentSlug: CaseSlug };

export default function ReadNext({ currentSlug }: Props) {
  const { locale, t } = useLocale();
  const next = getNextCaseStudies(currentSlug, 2);

  return (
    <section className="container-wide max-w-prose-wide">
      <p className="text-eyebrow mb-4">{t.reading.readNext}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {next.map((slug) => {
          const copy = caseStudies[slug][locale];
          return (
            <Link
              key={slug}
              href={`/case-studies/${slug}`}
              className="group block bg-paper rounded-card shadow-card p-6 transition-colors hover:bg-accent-50/40"
            >
              <h3 className="font-heading font-bold text-h3 text-ink-900 group-hover:text-accent-600 transition-colors leading-tight mb-2">
                {copy.title}
              </h3>
              <p className="text-small text-ink-500 mb-4">{copy.subtitle}</p>
              <span className="inline-flex items-center gap-1.5 text-small text-accent-600 font-medium">
                {locale === "uk" ? "Читати" : "Read"}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
