import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="zp-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd862" />
          <stop offset="50%" stopColor="#f0b90b" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#zp-gold)" />
      <circle
        cx="32"
        cy="32"
        r="25"
        fill="none"
        stroke="#07070b"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <path
        d="M21 19h22l-15 26h15"
        fill="none"
        stroke="#07070b"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="ZorianPay home"
    >
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Zorian<span className="gold-gradient-text">Pay</span>
      </span>
    </Link>
  );
}
