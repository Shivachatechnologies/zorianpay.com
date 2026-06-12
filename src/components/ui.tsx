import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  className = "",
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
      <span className="h-1.5 w-1.5 rounded-full gold-gradient-bg" />
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "submit" | "button";
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer";
  const styles = {
    primary:
      "gold-gradient-bg text-black hover:shadow-[0_0_40px_-8px_rgba(240,185,11,0.65)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "border border-border-strong bg-surface text-foreground hover:border-gold/50 hover:text-gold hover:-translate-y-0.5",
    ghost: "text-foreground hover:text-gold",
  };
  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left mx-0"
      }`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-balance text-lg leading-8 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`card-surface rounded-2xl p-6 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-gold ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
}: {
  value: ReactNode;
  label: string;
}) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
