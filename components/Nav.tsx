"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT HER" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <Link href="/" className="logo">
        <span className="dot" />
        carlotta pflug<span style={{ color: "var(--pink)" }}>*</span>
      </Link>
      <ul>
        {links.map((l) => {
          const active =
            l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <li key={l.href}>
              <Link href={l.href} className={active ? "active" : undefined}>
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
