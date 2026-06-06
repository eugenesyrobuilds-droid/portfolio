"use client";

import FadeIn from "./FadeIn";

type Props = { children: React.ReactNode; level?: 2 | 3; id?: string };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9Ѐ-ӿ]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function deriveId(children: React.ReactNode, override?: string): string | undefined {
  if (override) return override;
  if (typeof children === "string") return slugify(children);
  if (typeof children === "number") return slugify(String(children));
  return undefined;
}

export default function SectionHeading({ children, level = 2, id }: Props) {
  const computedId = deriveId(children, id);
  if (level === 2) {
    return (
      <FadeIn>
        <h2
          id={computedId}
          className="font-heading font-bold text-h2 text-ink-900 mt-14 mb-5 leading-tight scroll-mt-24"
        >
          {children}
        </h2>
      </FadeIn>
    );
  }
  return (
    <FadeIn>
      <h3
        id={computedId}
        className="font-heading font-bold text-h3 text-ink-900 mt-10 mb-3 scroll-mt-24"
      >
        {children}
      </h3>
    </FadeIn>
  );
}
