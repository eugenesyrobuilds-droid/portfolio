"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";

type Props = {
  ownership: string;
  timeSpent: string;
  collaboration: string;
};

export default function ProcessNote({ ownership, timeSpent, collaboration }: Props) {
  const { t } = useLocale();
  return (
    <aside className="not-prose my-10 bg-accent-50 rounded-card p-7">
      <p className="text-label uppercase text-accent-600 mb-4">{t.howBuilt}</p>
      <dl className="space-y-3 text-body text-ink-700">
        <div>
          <dt className="inline font-semibold text-ink-900">{t.ownership}. </dt>
          <dd className="inline">{ownership}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-ink-900">{t.collaboration}. </dt>
          <dd className="inline">{collaboration}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-ink-900">{t.timeInvested}. </dt>
          <dd className="inline">{timeSpent}</dd>
        </div>
      </dl>
    </aside>
  );
}
