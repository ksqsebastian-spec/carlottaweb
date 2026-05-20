"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, type Lang } from "@/lib/content";

function detectLang(pathname: string): Lang {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}

function stripLocale(pathname: string): string {
  if (pathname === "/de") return "/";
  if (pathname.startsWith("/de/")) return pathname.slice(3);
  return pathname;
}

function withLocale(path: string, lang: Lang): string {
  if (lang === "en") return path;
  if (path === "/") return "/de";
  return `/de${path}`;
}

const Star = () => (
  <svg
    className="star"
    viewBox="0 0 32 32"
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="var(--pink)"
      d="M16 2 19.6 12.4 30 13.5 22 20.5 24.5 30.5 16 25 7.5 30.5 10 20.5 2 13.5 12.4 12.4z"
    />
  </svg>
);

export default function Nav() {
  const pathname = usePathname();
  const lang = detectLang(pathname);
  const dict = t[lang];
  const basePath = stripLocale(pathname);

  const links = [
    { path: "/", label: dict.nav.home },
    { path: "/about", label: dict.nav.about },
    { path: "/contact", label: dict.nav.contact },
  ];

  return (
    <nav className="nav">
      <Link href={withLocale("/", lang)} className="logo">
        <Star />
        carlotta pflug
      </Link>
      <ul>
        {links.map((l) => {
          const href = withLocale(l.path, lang);
          const active =
            l.path === "/" ? basePath === "/" : basePath.startsWith(l.path);
          return (
            <li key={l.path}>
              <Link href={href} className={active ? "active" : undefined}>
                {l.label}
              </Link>
            </li>
          );
        })}
        <li className="lang-toggle">
          <Link
            href={withLocale(basePath, "de")}
            className={`lang ${lang === "de" ? "active" : ""}`}
          >
            DEU
          </Link>
          <span className="sep">/</span>
          <Link
            href={withLocale(basePath, "en")}
            className={`lang ${lang === "en" ? "active" : ""}`}
          >
            ENG
          </Link>
        </li>
      </ul>
    </nav>
  );
}
