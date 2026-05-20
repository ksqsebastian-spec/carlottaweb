"use client";

import { usePathname } from "next/navigation";
import { t } from "@/lib/content";

export default function Footer() {
  const pathname = usePathname();
  const lang =
    pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
  return <footer className="footer">{t[lang].footer}</footer>;
}
