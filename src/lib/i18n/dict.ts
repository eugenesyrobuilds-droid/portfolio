import type { Locale } from "./types";

export type Dict = {
  nav: { work: string; about: string; contact: string };
  cta: { seeWork: string; aboutMe: string; downloadCv: string };
  cvHref: string;
  selectedWork: string;
  fourProducts: string;
  workSubtitle: string;
  allWork: string;
  quickRead: string;
  howBuilt: string;
  ownership: string;
  collaboration: string;
  timeInvested: string;
  sections: {
    context: string;
    solution: string;
    impact: string;
    techStack: string;
    whatLearned: string;
    nextSteps: string;
  };
  status: { production: string; regulatoryPending: string };
  footer: { built: string };
  email: { copy: string; copied: string };
  reading: { onThisPage: string; minRead: string; backToTop: string; readNext: string };
};

export const dict: Record<Locale, Dict> = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    cta: { seeWork: "See work", aboutMe: "About me", downloadCv: "Download CV" },
    cvHref: "/cv/CV_Eugene_EN.pdf",
    selectedWork: "Selected work",
    fourProducts: "Four products in production.",
    workSubtitle:
      "Each case study covers the problem, the solution, screenshots, and measured impact.",
    allWork: "All work",
    quickRead: "Quick read",
    howBuilt: "How this was built",
    ownership: "Ownership",
    collaboration: "Collaboration",
    timeInvested: "Time invested",
    sections: {
      context: "Context",
      solution: "Solution",
      impact: "Impact",
      techStack: "Tech stack & architecture",
      whatLearned: "What I learned",
      nextSteps: "Next steps",
    },
    status: {
      production: "Production",
      regulatoryPending: "Functional · Pending regulatory approval",
    },
    footer: {
      built: "© 2026 Eugene Syromiatnikov. Built with Next.js + AI.",
    },
    email: { copy: "Copy email", copied: "Copied" },
    reading: {
      onThisPage: "On this page",
      minRead: "min read",
      backToTop: "Back to top",
      readNext: "Read next",
    },
  },
  uk: {
    nav: { work: "Роботи", about: "Про мене", contact: "Контакти" },
    cta: { seeWork: "Дивитися роботи", aboutMe: "Про мене", downloadCv: "Завантажити CV" },
    cvHref: "/cv/CV_Eugene_UA.pdf",
    selectedWork: "Вибрані роботи",
    fourProducts: "Чотири продукти в продакшені.",
    workSubtitle:
      "У кожному кейсі — проблема, рішення, скріншоти й виміряний результат.",
    allWork: "Усі роботи",
    quickRead: "Коротко",
    howBuilt: "Як це було збудовано",
    ownership: "Відповідальність",
    collaboration: "Співпраця",
    timeInvested: "Витрачений час",
    sections: {
      context: "Контекст",
      solution: "Рішення",
      impact: "Результат",
      techStack: "Технології та архітектура",
      whatLearned: "Що я зрозумів",
      nextSteps: "Що далі",
    },
    status: {
      production: "У продакшені",
      regulatoryPending: "Працює · Очікує регуляторного дозволу",
    },
    footer: {
      built: "© 2026 Євген Сиромятников. Збудовано на Next.js + AI.",
    },
    email: { copy: "Копіювати email", copied: "Скопійовано" },
    reading: {
      onThisPage: "На цій сторінці",
      minRead: "хв читання",
      backToTop: "Нагору",
      readNext: "Читати далі",
    },
  },
};

export function t(locale: Locale): Dict {
  return dict[locale];
}
