import { LogoMark } from "./Logo";

export function CardVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[1.586/1] w-full max-w-md rounded-2xl border border-gold/30 bg-gradient-to-br from-[#15151f] via-[#0c0c14] to-black p-6 shadow-2xl shadow-black/60 ${className}`}
    >
      <div className="flex items-center justify-between">
        <LogoMark className="h-9 w-9" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Zorian Card
        </span>
      </div>

      <div className="absolute left-6 top-20 h-8 w-12 rounded-md gold-gradient-bg opacity-90" />

      <div className="absolute bottom-20 left-6 font-mono text-lg tracking-[0.25em] text-foreground/90">
        4129&nbsp; 88•• &nbsp;•••• &nbsp;7740
      </div>

      <div className="absolute bottom-8 left-6 flex items-center gap-8">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted">
            Card Holder
          </p>
          <p className="text-sm font-medium text-foreground">
            A. ZORIAN
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted">
            Expires
          </p>
          <p className="text-sm font-medium text-foreground">12/29</p>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 text-right">
        <p className="text-[10px] uppercase tracking-widest text-muted">
          Network
        </p>
        <p className="text-sm font-bold gold-gradient-text">VISA</p>
      </div>
    </div>
  );
}
