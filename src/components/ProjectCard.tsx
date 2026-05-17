import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StatusBadge from "./StatusBadge";

type Props = {
  slug: string;
  title: string;
  subtitle: string;
  hook: string;
  tags: string[];
  status: string;
  statusVariant?: "production" | "regulatory";
};

export default function ProjectCard({
  slug,
  title,
  subtitle,
  hook,
  tags,
  status,
  statusVariant = "production",
}: Props) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group block bg-paper rounded-card shadow-card p-8 transition-colors hover:bg-accent-50/40"
    >
      <div className="flex items-start justify-between mb-3 gap-4">
        <h3 className="font-heading font-bold text-h3 text-ink-900 group-hover:text-accent-600 transition-colors leading-tight">
          {title}
        </h3>
        <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 text-ink-300 group-hover:text-accent-500 transition-colors" />
      </div>
      <p className="text-small text-ink-500 mb-5">{subtitle}</p>
      <p className="text-body text-ink-700 mb-6">{hook}</p>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-accent-border">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="chip !text-[0.625rem] !px-2.5 !py-1">
              {tag}
            </span>
          ))}
        </div>
        <StatusBadge label={status} variant={statusVariant} />
      </div>
    </Link>
  );
}
