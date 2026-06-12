"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

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

export function ThemeToggle({ className = "" }: { className?: string }) {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = isLight ? "dark" : "light";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("zp-theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark mode" : "Light mode"}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-gold/50 hover:text-gold ${className}`}
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
