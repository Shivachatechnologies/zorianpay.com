import type { LucideIcon } from "lucide-react";

interface OrbitNode {
  icon: LucideIcon;
  label: string;
}

export function NetworkOrbit({
  nodes,
  centerLabel = "ZorianPay",
  className = "",
}: {
  nodes: OrbitNode[];
  centerLabel?: string;
  className?: string;
}) {
  const radius = 40;
  const positions = nodes.map((_, i) => {
    const angle = (i / nodes.length) * 2 * Math.PI - Math.PI / 2;
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  });

  return (
    <div className={`relative aspect-square w-full select-none ${className}`}>
      {/* Concentric orbit rings */}
      <div className="absolute inset-[6%] rounded-full border border-border" />
      <div className="pointer-events-none absolute inset-[20%] animate-orbit-spin rounded-full border border-dashed border-border-strong" />
      <div className="pointer-events-none absolute inset-0 animate-orbit-spin-reverse rounded-full border border-border/60" />

      {/* Connecting lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {positions.map((p, i) => (
          <line
            key={i}
            x1={50}
            y1={50}
            x2={p.x}
            y2={p.y}
            strokeWidth="0.4"
            className="orbit-line"
            style={{ stroke: "var(--gold)", strokeOpacity: 0.35, animationDelay: `${i * 150}ms` }}
          />
        ))}
      </svg>

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full gold-gradient-bg text-black shadow-[0_0_40px_-6px_rgba(240,185,11,0.6)] sm:h-20 sm:w-20">
          <span className="text-lg font-black sm:text-xl">Z</span>
        </div>
        <span className="mt-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">
          {centerLabel}
        </span>
      </div>

      {/* Orbit nodes */}
      {nodes.map((node, i) => {
        const p = positions[i];
        return (
          <div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-surface text-gold sm:h-12 sm:w-12">
              <span
                className="pulse-ring"
                style={{ animationDelay: `${i * 420}ms` }}
                aria-hidden="true"
              />
              <node.icon className="relative h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <span className="whitespace-nowrap rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-semibold text-foreground">
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
