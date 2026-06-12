import { LogoMark } from "./Logo";

export function CardVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[1.586/1] w-full max-w-md overflow-hidden rounded-[20px] border border-white/10 p-6 shadow-2xl shadow-black/70 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #1a1c28 0%, #0c0d14 45%, #050507 100%)",
      }}
    >
      {/* Sheen */}
      <div
        className="pointer-events-none absolute -inset-x-10 -top-32 h-56 rotate-[18deg] opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(240,185,11,0.5), transparent)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <LogoMark className="h-9 w-9" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
          Zorian Card
        </span>
      </div>

      {/* Chip */}
      <div className="relative mt-9 flex items-center gap-3">
        <div className="h-8 w-11 rounded-md gold-gradient-bg" />
        <svg
          className="h-5 w-7 text-gold-light/70"
          viewBox="0 0 32 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 10c4-6 8-6 12 0s8 6 12 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mt-7 font-mono text-lg tracking-[0.3em] text-foreground/90">
        4129&nbsp; 88•• &nbsp;•••• &nbsp;7740
      </div>

      <div className="relative mt-7 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-2">
            Card Holder
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide text-foreground">
            A. ZORIAN
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-2">
            Expires
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">12/29</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest text-muted-2">
            Network
          </p>
          <p className="mt-1 text-sm font-bold gold-gradient-text">VISA</p>
        </div>
      </div>
    </div>
  );
}
