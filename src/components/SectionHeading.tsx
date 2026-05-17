type Props = { children: React.ReactNode; level?: 2 | 3 };

export default function SectionHeading({ children, level = 2 }: Props) {
  if (level === 2) {
    return (
      <h2 className="font-heading font-bold text-h2 text-ink-900 mt-14 mb-5 leading-tight">
        {children}
      </h2>
    );
  }
  return (
    <h3 className="font-heading font-bold text-h3 text-ink-900 mt-10 mb-3">{children}</h3>
  );
}
