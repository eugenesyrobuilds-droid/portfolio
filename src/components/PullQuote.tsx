type Props = { children: React.ReactNode };

export default function PullQuote({ children }: Props) {
  return (
    <blockquote className="not-prose my-12 border-l-4 border-accent-500 pl-6 sm:pl-8 py-2">
      <p className="font-serif italic text-[1.75rem] sm:text-[2.1rem] text-ink-800 leading-[1.2] tracking-tight">
        {children}
      </p>
    </blockquote>
  );
}
