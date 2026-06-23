type Props = { children: React.ReactNode };

export default function PrefaceNote({ children }: Props) {
  return (
    <aside className="mt-6 max-w-prose-narrow border-l-2 border-accent-400 pl-5 py-1 text-small italic text-ink-500 leading-relaxed">
      {children}
    </aside>
  );
}
