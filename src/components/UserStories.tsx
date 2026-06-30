"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import {
  getMeta,
  totalEpics,
  totalStories,
  type Epic,
  type Priority,
  type Section,
  type UserStoriesData,
  type UserStory,
} from "@/data/userStoriesTypes";

const PRIORITY_STYLE: Record<Priority, string> = {
  Must: "bg-accent-100 text-accent-700",
  Should: "bg-warning-50 text-warning-500",
  Could: "bg-paper-tint text-ink-500",
};

function StoryItem({ story }: { story: UserStory }) {
  const { locale } = useLocale();
  const copy = story[locale];
  return (
    <li className="border-t border-accent-border first:border-t-0 py-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="font-mono text-[0.7rem] text-ink-500 bg-paper-tint rounded px-1.5 py-0.5">
          {story.id}
        </span>
        {story.priority && (
          <span
            className={`text-[0.7rem] uppercase tracking-wider font-semibold rounded-pill px-2 py-0.5 ${PRIORITY_STYLE[story.priority]}`}
          >
            {story.priority}
          </span>
        )}
        <h4 className="font-heading font-semibold text-ink-900 text-base m-0">
          {copy.title}
        </h4>
      </div>
      <p className="text-body text-ink-800 mb-3">{copy.userStory}</p>
      {copy.criteria.length > 0 && (
        <>
          <p className="text-label uppercase text-ink-500 mb-2">
            {locale === "uk" ? "Критерії приймання" : "Acceptance criteria"}
          </p>
          <ul className="space-y-1.5 text-small text-ink-700 list-disc pl-5 marker:text-accent-500">
            {copy.criteria.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

function EpicBlock({
  epic,
  defaultOpen = true,
}: {
  epic: Epic;
  defaultOpen?: boolean;
}) {
  const { locale } = useLocale();
  const [open, setOpen] = useState(defaultOpen);
  const epicCopy = epic[locale];
  const storyWord =
    locale === "uk"
      ? `${epic.stories.length} історій`
      : `${epic.stories.length} stories`;

  return (
    <section className="bg-paper rounded-card shadow-soft overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 hover:bg-accent-50/40 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-small text-accent-600 shrink-0">
            {locale === "uk" ? "Епік" : "Epic"} {epic.number}
          </span>
          <h3 className="font-heading font-bold text-h3 text-ink-900 m-0 leading-tight">
            {epicCopy.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-label uppercase text-ink-500">{storyWord}</span>
          <ChevronDown
            className={`w-5 h-5 text-ink-500 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {open && (
        <ul className="px-6 pb-4">
          {epic.stories.map((s) => (
            <StoryItem key={s.id} story={s} />
          ))}
        </ul>
      )}
    </section>
  );
}

function SectionBlock({ section }: { section: Section }) {
  const { locale } = useLocale();
  const sectionCopy = section[locale];
  const totalInSection = section.epics.reduce(
    (sum, e) => sum + e.stories.length,
    0,
  );
  return (
    <div className="space-y-3">
      <div className="flex items-baseline gap-3 mt-8 first:mt-0">
        <span className="font-mono text-small text-accent-600">
          {section.number}
        </span>
        <h3 className="font-heading font-bold text-h3 text-ink-900 leading-tight m-0">
          {sectionCopy.title}
        </h3>
        <span className="text-label uppercase text-ink-500 ml-auto">
          {locale === "uk"
            ? `${totalInSection} історій`
            : `${totalInSection} stories`}
        </span>
      </div>
      <div className="space-y-3">
        {section.epics.map((e) => (
          <EpicBlock key={`${section.number}-${e.number}`} epic={e} defaultOpen={false} />
        ))}
      </div>
    </div>
  );
}

export default function UserStories({ data }: { data: UserStoriesData }) {
  const { locale } = useLocale();
  const m = getMeta(data, locale);

  return (
    <div className="not-prose my-10">
      <div className="bg-accent-50 rounded-card p-6 mb-6">
        <p className="text-body text-ink-800 mb-3">{m.intro}</p>
        <p className="text-small text-ink-700 mb-4">{m.format}</p>
        <div className="space-y-2 mb-4">
          <p className="text-label uppercase text-accent-600">
            {locale === "uk" ? "Персони" : "Personas"}
          </p>
          <ul className="space-y-1 text-small text-ink-800">
            {m.personas.map((p) => (
              <li key={p.name}>
                <strong className="text-ink-900">{p.name}</strong> — {p.description}
              </li>
            ))}
          </ul>
        </div>
        {m.legend && (
          <div className="space-y-2">
            <p className="text-label uppercase text-accent-600">
              {locale === "uk" ? "Легенда вердикту" : "Verdict legend"}
            </p>
            <p className="text-small text-ink-800">{m.legend}</p>
          </div>
        )}
        <p className="text-label uppercase text-ink-500 mt-4">
          {locale === "uk"
            ? `Усього: ${totalStories(data)} історій у ${totalEpics(data)} епіках`
            : `Total: ${totalStories(data)} stories across ${totalEpics(data)} epics`}
        </p>
      </div>

      {data.sections ? (
        <div className="space-y-4">
          {data.sections.map((s) => (
            <SectionBlock key={s.number} section={s} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {(data.epics ?? []).map((e) => (
            <EpicBlock key={e.number} epic={e} />
          ))}
        </div>
      )}
    </div>
  );
}
