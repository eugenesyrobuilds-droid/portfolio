type Props = {
  date: string;
  children: React.ReactNode;
};

export default function Upd({ date, children }: Props) {
  return (
    <aside className="not-prose my-8 rounded-input border border-accent-border bg-accent-50/60 border-l-4 border-l-accent-500 px-6 py-5">
      <span className="inline-block rounded-pill bg-accent-100 text-accent-700 text-[0.7rem] uppercase tracking-[0.12em] font-semibold px-3 py-1 mb-4">
        UPD · {date}
      </span>
      <div className="text-[0.95em] leading-relaxed text-ink-800 space-y-3 [&_strong]:font-semibold [&_strong]:text-ink-900">
        {children}
      </div>
    </aside>
  );
}
