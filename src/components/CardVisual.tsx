import { LogoMark } from "./Logo";

export function CardVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[1.586/1] w-full max-w-md select-none overflow-hidden rounded-[22px] shadow-2xl shadow-black/70 ${className}`}
      style={{
        background:
          "linear-gradient(125deg, #23252f 0%, #15161e 38%, #0a0b10 70%, #060608 100%)",
      }}
    >
      {/* Outer hairline border */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/15" />
      <div className="pointer-events-none absolute inset-[3px] rounded-[19px] border border-gold/20" />

      {/* Diagonal sheen */}
      <div
        className="pointer-events-none absolute -inset-x-16 -top-40 h-72 rotate-[20deg] opacity-25"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,224,138,0.55), transparent)",
        }}
      />

      {/* Subtle guilloche-style arcs */}
      <svg
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.07]"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={30 + i * 14}
            stroke="#f0b90b"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Giant Z watermark */}
      <div className="pointer-events-none absolute -bottom-10 -right-4 text-[180px] font-black leading-none text-white/[0.03]">
        Z
      </div>

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        {/* Top row: brand */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9" />
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-white">
                Zorian<span className="text-gold-light">Pay</span>
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Crypto Card
              </p>
            </div>
          </div>
          <span
            className="rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black"
            style={{
              background:
                "linear-gradient(120deg, #ffe08a 0%, #f0b90b 55%, #c8930a 100%)",
            }}
          >
            Black
          </span>
        </div>

        {/* Middle row: chip + contactless */}
        <div className="flex items-center gap-4">
          {/* EMV chip */}
          <svg className="h-9 w-12" viewBox="0 0 48 36" aria-hidden="true">
            <defs>
              <linearGradient id="chip-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffe08a" />
                <stop offset="50%" stopColor="#f0b90b" />
                <stop offset="100%" stopColor="#c8930a" />
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="46" height="34" rx="6" fill="url(#chip-gold)" />
            <g stroke="#7a5c06" strokeWidth="1.2" fill="none" opacity="0.8">
              <path d="M1 13h14a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H1" />
              <path d="M47 13H33a5 5 0 0 0-5 5v0a5 5 0 0 0 5 5h14" />
              <path d="M20 1v9M28 1v9M20 35v-9M28 35v-9" />
            </g>
          </svg>
          {/* Contactless symbol */}
          <svg
            className="h-7 w-7 rotate-90 text-white/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M8.5 15.5a5 5 0 0 1 0-7" />
            <path d="M5.5 18a9 9 0 0 1 0-12" />
            <path d="M11.5 13a2 2 0 0 1 0-2" />
          </svg>
        </div>

        {/* Card number */}
        <p
          className="font-mono text-xl tracking-[0.22em] text-white sm:text-2xl"
          style={{ textShadow: "0 1px 1px rgba(0,0,0,0.7), 0 -1px 1px rgba(255,255,255,0.12)" }}
        >
          4129 8804 7591 7740
        </p>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-8">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Card Holder
              </p>
              <p
                className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                style={{ textShadow: "0 1px 1px rgba(0,0,0,0.7)" }}
              >
                Aarav Zorian
              </p>
            </div>
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Valid Thru
              </p>
              <p className="mt-1 font-mono text-sm font-semibold text-white">
                12/29
              </p>
            </div>
          </div>
          {/* Visa mark */}
          <p
            className="text-2xl font-extrabold italic tracking-tight text-white"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}
          >
            VISA
          </p>
        </div>
      </div>
    </div>
  );
}
