type Props = {
  label: string;
  value: string;
  delta?: string;
  emphasis?: boolean;
};

export default function MetricCard({ label, value, delta, emphasis }: Props) {
  return (
    <div
      className={`rounded-card p-5 ${
        emphasis ? "bg-accent-50 shadow-soft" : "bg-paper shadow-soft"
      }`}
    >
      <p className="text-label uppercase text-ink-500 mb-2">{label}</p>
      <p
        className={`font-heading font-bold text-h2 leading-none ${
          emphasis ? "text-accent-600" : "text-ink-900"
        }`}
      >
        {value}
      </p>
      {delta && <p className="text-small text-ink-500 mt-2">{delta}</p>}
    </div>
  );
}
