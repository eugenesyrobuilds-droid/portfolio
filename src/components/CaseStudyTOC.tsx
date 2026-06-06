"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";

type Item = { id: string; label: string };

export default function CaseStudyTOC() {
  const { t, locale } = useLocale();
  const [items, setItems] = useState<Item[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = document.querySelector("[data-case-study-prose]");
    if (!container) return;
    // wait one frame so prose re-renders with new locale before we scan
    let observer: IntersectionObserver | null = null;
    const raf = requestAnimationFrame(() => {
      const headings = Array.from(
        container.querySelectorAll<HTMLHeadingElement>("h2[id]"),
      );
      const newItems: Item[] = headings.map((h) => ({
        id: h.id,
        label: h.textContent ?? "",
      }));
      setItems(newItems);
      setActiveId(headings[0]?.id ?? null);

      if (headings.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            visible.sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            );
            setActiveId(visible[0].target.id);
          }
        },
        { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
      );

      headings.forEach((h) => observer!.observe(h));
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [locale]);

  if (items.length === 0) return null;

  return (
    <aside className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="text-label uppercase text-ink-500 mb-4">{t.reading.onThisPage}</p>
      <ul className="space-y-1.5">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-small leading-snug border-l-2 pl-3 py-1 transition-colors ${
                  active
                    ? "border-l-accent-500 text-accent-600 font-medium"
                    : "border-l-accent-border text-ink-500 hover:text-accent-600 hover:border-l-accent-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
