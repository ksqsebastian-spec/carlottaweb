"use client";

import { useEffect, useState } from "react";

type Theme = "day" | "night";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <g
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    >
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.9" y1="4.9" x2="7" y2="7" />
      <line x1="17" y1="17" x2="19.1" y2="19.1" />
      <line x1="4.9" y1="19.1" x2="7" y2="17" />
      <line x1="17" y1="7" x2="19.1" y2="4.9" />
    </g>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"
      fill="currentColor"
    />
  </svg>
);

function Party() {
  const sparkles = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="party" aria-hidden>
      <div className="spotlight s-pink" />
      <div className="spotlight s-lime" />
      <div className="spotlight s-pink-light" />
      <div className="disco-wrap dw-1">
        <div className="disco-ball" />
      </div>
      <div className="disco-wrap dw-2">
        <div className="disco-ball" />
      </div>
      <div className="disco-wrap dw-3">
        <div className="disco-ball" />
      </div>
      {sparkles.map((i) => {
        const x = (i * 137) % 100;
        const y = (i * 311) % 100;
        const delay = (i * 0.37) % 2.6;
        return (
          <span
            key={i}
            className="sparkle"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("day");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved =
      (typeof window !== "undefined"
        ? (localStorage.getItem("theme") as Theme | null)
        : null) ?? null;
    const initial: Theme =
      saved === "night" || saved === "day"
        ? saved
        : document.documentElement.dataset.theme === "night"
          ? "night"
          : "day";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme, mounted]);

  return (
    <>
      {mounted && theme === "night" ? <Party /> : null}
      <div
        className="theme-toggle"
        role="group"
        aria-label="Day or night mode"
      >
        <button
          type="button"
          className={theme === "day" ? "active" : ""}
          onClick={() => setTheme("day")}
          aria-label="Day mode"
          aria-pressed={theme === "day"}
        >
          <SunIcon />
        </button>
        <button
          type="button"
          className={theme === "night" ? "active" : ""}
          onClick={() => setTheme("night")}
          aria-label="Night mode"
          aria-pressed={theme === "night"}
        >
          <MoonIcon />
        </button>
      </div>
    </>
  );
}
