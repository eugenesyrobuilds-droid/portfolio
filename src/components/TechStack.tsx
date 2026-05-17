type Group = {
  label: string;
  items: string[];
};

type Props = { groups: Group[] };

export default function TechStack({ groups }: Props) {
  return (
    <div className="my-8 not-prose bg-paper rounded-card shadow-soft divide-y divide-accent-border overflow-hidden">
      {groups.map((g) => (
        <div
          key={g.label}
          className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-6 py-4"
        >
          <p className="text-label uppercase text-accent-600 sm:w-44 shrink-0">
            {g.label}
          </p>
          <p className="text-small text-ink-800">{g.items.join(" · ")}</p>
        </div>
      ))}
    </div>
  );
}
