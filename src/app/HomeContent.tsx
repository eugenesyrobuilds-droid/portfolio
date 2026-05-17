"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useLocale } from "@/lib/i18n/LocaleContext";

type ProjectCopy = {
  title: string;
  subtitle: string;
  hook: string;
  tags: string[];
  status: string;
  statusVariant: "production" | "regulatory";
};

const projects: Record<
  "medics-quality-indicators" | "tb-module" | "studioverse-platform" | "driver-medical-checkups",
  { en: ProjectCopy; uk: ProjectCopy }
> = {
  "medics-quality-indicators": {
    en: {
      title: "Medics Quality Indicators",
      subtitle: "Chrome extension for Ukrainian primary care EMR",
      hook: "Cancer screening referrals grew ×27 in 3 months across a 5-physician cohort.",
      tags: ["Healthcare", "Chrome Extension", "AI-assisted dev"],
      status: "Production",
      statusVariant: "production",
    },
    uk: {
      title: "Medics Quality Indicators",
      subtitle: "Розширення Chrome для української ЕМК первинної ланки",
      hook: "Направлення на онкоскринінги зросли ×27 за 3 місяці в когорті з 5 лікарів.",
      tags: ["Healthcare", "Розширення Chrome", "AI-розробка"],
      status: "У продакшені",
      statusVariant: "production",
    },
  },
  "tb-module": {
    en: {
      title: "TB Module",
      subtitle: "Full digital replacement of paper TB documentation",
      hook: "1,851 patients migrated from 28 Excel sheets + paper. Used by my nurse and me daily.",
      tags: ["Healthcare", "Full-stack web app", "Supabase"],
      status: "Production",
      statusVariant: "production",
    },
    uk: {
      title: "ТБ-модуль",
      subtitle: "Повна цифрова заміна паперової документації з туберкульозу",
      hook: "1 851 пацієнт перенесений з 28 Excel-таблиць і паперу. Я і медсестра користуємось щодня.",
      tags: ["Healthcare", "Full-stack веб-застосунок", "Supabase"],
      status: "У продакшені",
      statusVariant: "production",
    },
  },
  "studioverse-platform": {
    en: {
      title: "Multi-Tenant Platform for AI Video Production Agency",
      subtitle: "SaaS for managing artist hiring, studio operations, and client projects",
      hook: "37 users, 6 studios, $1,752 revenue in first revenue month. 181 commits in 7 weeks.",
      tags: ["B2B SaaS", "AI integrations", "Multi-tenant"],
      status: "Production",
      statusVariant: "production",
    },
    uk: {
      title: "Multi-tenant платформа для агенції AI-відеопродакшену",
      subtitle: "SaaS для найму артистів, операцій студій і клієнтських проєктів",
      hook: "37 користувачів, 6 студій, $1 752 виторгу за перший повний місяць. 181 коміт за 7 тижнів.",
      tags: ["B2B SaaS", "AI-інтеграції", "Multi-tenant"],
      status: "У продакшені",
      statusVariant: "production",
    },
  },
  "driver-medical-checkups": {
    en: {
      title: "Pre-Trip Driver Medical Checkups",
      subtitle: "Digital pre-trip medical screening with breathalyzer integration",
      hook: "USB-synced Drager breathalyzer + structured logs replacing paper journal.",
      tags: ["Healthcare", "Device integration", "Compliance"],
      status: "Functional · Pending regulatory approval",
      statusVariant: "regulatory",
    },
    uk: {
      title: "Передрейсові медогляди водіїв",
      subtitle: "Цифровий передрейсовий медогляд з інтеграцією алкотестера",
      hook: "Алкотестер iBlow 10 через USB + структуровані записи замість паперового журналу.",
      tags: ["Healthcare", "Інтеграція пристроїв", "Compliance"],
      status: "Працює · Очікує регуляторного дозволу",
      statusVariant: "regulatory",
    },
  },
};

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
  const slugs = Object.keys(projects) as Array<keyof typeof projects>;

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
      <section id="work">
        <div className="container-wide py-section">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-eyebrow mb-3">{t.selectedWork}</p>
              <h2 className="font-heading text-h2 text-ink-900">{t.fourProducts}</h2>
            </div>
            <p className="text-small text-ink-500 max-w-sm">{t.workSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slugs.map((slug) => {
              const copy = projects[slug][locale];
              return <ProjectCard key={slug} slug={slug} {...copy} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
