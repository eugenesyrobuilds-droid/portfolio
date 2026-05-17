type Row = {
  label: string;
  values: (string | number)[];
  emphasis?: boolean;
};

type Props = {
  headers: string[];
  rows: Row[];
};

export default function MetricsTable({ headers, rows }: Props) {
  return (
    <div className="my-8 not-prose rounded-card overflow-hidden shadow-soft bg-paper">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-accent-50">
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  className="px-5 py-3 text-left text-label uppercase text-accent-600"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-accent-border">
            {rows.map((row, i) => (
              <tr key={i} className={row.emphasis ? "bg-accent-50/40" : ""}>
                <td className="px-5 py-3.5 text-small text-ink-800 font-semibold">
                  {row.label}
                </td>
                {row.values.map((v, j) => (
                  <td key={j} className="px-5 py-3.5 text-small text-ink-900 tabular-nums">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
