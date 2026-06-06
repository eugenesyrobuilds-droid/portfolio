"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { caseStudies, caseStudyOrder } from "@/lib/caseStudies";

const hero = {
  en: {
    eyebrow: "Healthcare Product Builder",
    titleBefore: "Family physician shipping",
    titleAccent: "production",
    titleAfter: "healthcare software.",
    body: "I'm a practicing family doctor managing 1,828 patient declarations in rural Ukraine. In parallel I design and ship working healthtech tools through AI-assisted development. Below — four products currently in production.",
  },
  uk: {
    eyebrow: "Healthcare Product Builder",
    titleBefore: "Сімейний лікар, що запускає",
    titleAccent: "робочий",
    titleAfter: "healthcare-софт у продакшен.",
    body: "Я практикуючий сімейний лікар у сільській місцевості. Паралельно проєктую й запускаю робочі healthtech-інструменти за допомогою AI. Нижче — чотири продукти, що зараз у продакшені.",
  },
};

export default function HomeContent() {
  const { locale, t } = useLocale();
  const h = hero[locale];

  return (
    <>
      {/* Hero */}
      <section>
        <div className="container-wide pt-12 lg:pt-20 pb-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="chip mb-6">{h.eyebrow}</span>
              <h1 className="font-heading text-display text-ink-900 mb-8">
                {h.titleBefore}{" "}
                <span className="font-serif italic font-normal accent-text-gradient">
                  {h.titleAccent}
                </span>{" "}
                {h.titleAfter}
              </h1>
              <p className="text-body-lg text-ink-700 mb-10 max-w-prose-narrow">{h.body}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="#work" className="btn-primary">
                  {t.cta.seeWork} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  {t.cta.aboutMe}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 order-first lg:order-last">
              <figure className="relative max-w-sm mx-auto lg:max-w-none lg:ml-auto">
                <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-card bg-paper">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Eugene Syromiatnikov"
                    fill
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    className="object-cover"
                    priority
                  />
                  <div className="vignette-portrait pointer-events-none absolute inset-0" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24">
        <div className="container-wide py-section">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-eyebrow mb-3">{t.selectedWork}</p>
              <h2 className="font-heading text-h2 text-ink-900">{t.fourProducts}</h2>
            </div>
            <p className="text-small text-ink-500 max-w-sm">{t.workSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudyOrder.map((slug) => {
              const copy = caseStudies[slug][locale];
              return <ProjectCard key={slug} slug={slug} {...copy} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
