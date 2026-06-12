"use client";

import Link from "next/link";
import Image from "next/image";
import { useSyncExternalStore } from "react";

// ✅ Dark background ke liye (white text wala)
import logoDark from "../app/zorianlogo.png";

// ✅ Light background ke liye (dark text wala) - designer se lena
import logoLight from "../app/zorianlogo-light.png";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false;
}

export function Logo({ className = "" }: { className?: string }) {
  const isLight = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label="ZorianPay home"
    >
      <Image
        src={isLight ? logoLight : logoDark}  // ✅ Theme ke hisab se switch
        alt="ZorianPay"
        width={220}
        height={80}
        priority
        className="object-contain transition-all duration-300"
      />
    </Link>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const isLight = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <Image
      src={isLight ? logoLight : logoDark}
      alt="ZorianPay Logo"
      width={36}
      height={36}
      className={className}
    />
  );
}