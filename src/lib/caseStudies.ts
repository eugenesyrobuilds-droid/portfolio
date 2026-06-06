import type { Locale } from "./i18n/types";

export type CaseSlug =
  | "medics-quality-indicators"
  | "tb-module"
  | "studioverse-platform"
  | "driver-medical-checkups";

export const caseStudyOrder: CaseSlug[] = [
  "medics-quality-indicators",
  "tb-module",
  "studioverse-platform",
  "driver-medical-checkups",
];

export type CaseSummary = {
  title: string;
  subtitle: string;
  hook: string;
  tags: string[];
  status: string;
  statusVariant: "production" | "regulatory";
};

export const caseStudies: Record<CaseSlug, Record<Locale, CaseSummary>> = {
  "medics-quality-indicators": {
    en: {
      title: "Medics Quality Indicators",
      subtitle: "Chrome extension for Ukrainian primary care EMR",
      hook: "Cancer screening referrals grew ×27 in 3 months across a primary care cohort.",
      tags: ["Healthcare", "Chrome Extension", "AI-assisted dev"],
      status: "Production",
      statusVariant: "production",
    },
    uk: {
      title: "Medics Quality Indicators",
      subtitle: "Розширення Chrome для української МІС первинної ланки",
      hook: "Направлення на онкоскринінги зросли ×27 за 3 місяці в когорті первинної ланки.",
      tags: ["Healthcare", "Розширення Chrome", "AI-розробка"],
      status: "У продакшені",
      statusVariant: "production",
    },
  },
  "tb-module": {
    en: {
      title: "TB Module",
      subtitle: "Digital replacement of paper TB documentation",
      hook: "Paper-to-digital migration of clinical TB documentation. Adopted at the clinic where I practice.",
      tags: ["Healthcare", "Full-stack web app", "Managed Postgres"],
      status: "Production",
      statusVariant: "production",
    },
    uk: {
      title: "ТБ-модуль",
      subtitle: "Цифрова заміна паперової документації з туберкульозу",
      hook: "Перехід з паперу на цифру для документації з ТБ. Прийнято в амбулаторії, де я практикую.",
      tags: ["Healthcare", "Full-stack веб-застосунок", "Managed Postgres"],
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

export function getNextCaseStudies(currentSlug: CaseSlug, count = 2): CaseSlug[] {
  const idx = caseStudyOrder.indexOf(currentSlug);
  const result: CaseSlug[] = [];
  for (let i = 1; i <= count; i++) {
    result.push(caseStudyOrder[(idx + i) % caseStudyOrder.length]);
  }
  return result;
}
