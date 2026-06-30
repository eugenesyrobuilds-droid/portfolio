import type { Locale } from "@/lib/i18n/types";

export type Priority = "Must" | "Should" | "Could";

export type StoryCopy = {
  title: string;
  userStory: string;
  criteria: string[];
};

export type UserStory = {
  id: string;
  priority?: Priority;
  en: StoryCopy;
  uk: StoryCopy;
};

export type Epic = {
  number: string | number;
  en: { title: string };
  uk: { title: string };
  stories: UserStory[];
};

export type PersonaCopy = { name: string; description: string };

export type Section = {
  number: string | number;
  en: { title: string };
  uk: { title: string };
  epics: Epic[];
};

export type UserStoriesMeta = {
  intro: { en: string; uk: string };
  personas: {
    en: PersonaCopy[];
    uk: PersonaCopy[];
  };
  legend?: { en: string; uk: string };
};

export type UserStoriesData = {
  meta: UserStoriesMeta;
  /** Flat list of epics (used by docs with single role-set). */
  epics?: Epic[];
  /** Grouped sections (used by docs split by persona / area). */
  sections?: Section[];
};

export function totalStories(data: UserStoriesData): number {
  if (data.sections) {
    return data.sections.reduce(
      (sum, s) => sum + s.epics.reduce((sub, e) => sub + e.stories.length, 0),
      0,
    );
  }
  return (data.epics ?? []).reduce((sum, e) => sum + e.stories.length, 0);
}

export function totalEpics(data: UserStoriesData): number {
  if (data.sections) {
    return data.sections.reduce((sum, s) => sum + s.epics.length, 0);
  }
  return (data.epics ?? []).length;
}

export function getMeta(data: UserStoriesData, locale: Locale) {
  return {
    intro: data.meta.intro[locale],
    personas: data.meta.personas[locale],
    legend: data.meta.legend?.[locale],
  };
}
