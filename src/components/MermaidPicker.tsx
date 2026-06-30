"use client";

import { useState } from "react";
import MermaidDiagram from "@/components/MermaidDiagram";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { DiagramOption } from "@/data/tbModuleMermaid";

type Props = {
  diagrams: DiagramOption[];
  height?: number;
};

export default function MermaidPicker({ diagrams, height }: Props) {
  const { locale } = useLocale();
  const [selectedId, setSelectedId] = useState(diagrams[0]?.id ?? "");
  const selected = diagrams.find((d) => d.id === selectedId) ?? diagrams[0];
  if (!selected) return null;

  return (
    <div className="not-prose my-8">
      <div className="flex flex-wrap gap-2 mb-3">
        {diagrams.map((d) => {
          const active = d.id === selected.id;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => setSelectedId(d.id)}
              aria-pressed={active}
              className={`text-small font-medium rounded-pill px-4 py-1.5 border transition-colors ${
                active
                  ? "bg-accent-500 text-paper border-accent-500"
                  : "bg-paper text-ink-700 border-accent-border hover:bg-accent-50"
              }`}
            >
              {d.label[locale]}
            </button>
          );
        })}
      </div>
      <p className="text-small text-ink-600 mb-3">{selected.description[locale]}</p>
      <MermaidDiagram
        key={selected.id}
        code={selected.code}
        caption={selected.label[locale]}
        height={height}
      />
    </div>
  );
}
