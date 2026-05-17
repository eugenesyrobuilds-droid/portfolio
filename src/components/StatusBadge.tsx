import clsx from "clsx";

type Variant = "production" | "regulatory";

type Props = {
  label: string;
  variant?: Variant;
};

export default function StatusBadge({ label, variant = "production" }: Props) {
  const isProduction = variant === "production";
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-pill text-label uppercase px-3 py-1.5",
        isProduction ? "bg-success-50 text-success-500" : "bg-warning-50 text-warning-500"
      )}
    >
      <span
        className={clsx(
          "w-1.5 h-1.5 rounded-full",
          isProduction ? "bg-success-500" : "bg-warning-500"
        )}
      />
      {label}
    </span>
  );
}
