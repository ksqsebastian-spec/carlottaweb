"use client";

import { useRef, useState } from "react";
import type { Lang } from "@/lib/content";

type Particle = {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  color: string;
  size: number;
  delay: number;
};

type Flash = { id: number; x: number; y: number };

const COLORS = [
  "#ffd24a",
  "#ffe27a",
  "#f58dc7",
  "#d5fd68",
  "#fbc7e4",
  "#ffffff",
];

let nextId = 0;

export default function GoldPostcard({ lang }: { lang: Lang }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [flashes, setFlashes] = useState<Flash[]>([]);

  const hello = lang === "de" ? "Überraschung!" : "Surprise!";
  const sub = lang === "de" ? "klick mich ✨" : "click me ✨";

  const explode = () => {
    const el = cardRef.current;
    if (!el || hidden) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const burst: Particle[] = [];
    const flash: Flash[] = [{ id: nextId++, x: cx, y: cy }];

    // outer ring
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const dist = 420 + Math.random() * 120;
      burst.push({
        id: nextId++,
        x: cx,
        y: cy,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        color: COLORS[i % COLORS.length],
        size: 10,
        delay: 0.05,
      });
    }
    // main ring
    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      const dist = 280 + Math.random() * 130;
      burst.push({
        id: nextId++,
        x: cx,
        y: cy,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        color: COLORS[i % COLORS.length],
        size: 14,
        delay: 0,
      });
    }
    // inner ring, slightly delayed
    for (let i = 0; i < 22; i++) {
      const angle = (i / 22) * Math.PI * 2 + 0.25;
      const dist = 140 + Math.random() * 90;
      burst.push({
        id: nextId++,
        x: cx,
        y: cy,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        color: COLORS[(i + 2) % COLORS.length],
        size: 10,
        delay: 0.2,
      });
    }
    // random sparks scattered far
    for (let i = 0; i < 32; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 480;
      burst.push({
        id: nextId++,
        x: cx,
        y: cy,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 5 + Math.random() * 4,
        delay: 0.08 + Math.random() * 0.4,
      });
    }

    setParticles((cur) => [...cur, ...burst]);
    setFlashes((cur) => [...cur, ...flash]);
    setHidden(true);

    // clean up particles and respawn the card
    window.setTimeout(() => {
      setFlashes((cur) =>
        cur.filter((f) => !flash.some((b) => b.id === f.id))
      );
    }, 900);
    window.setTimeout(() => {
      setParticles((cur) =>
        cur.filter((p) => !burst.some((b) => b.id === p.id))
      );
    }, 2800);
    window.setTimeout(() => setHidden(false), 6500);
  };

  return (
    <>
      {!hidden && (
        <div
          ref={cardRef}
          className="postcard pc-gold pc-anim-gold"
          onClick={explode}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              explode();
            }
          }}
        >
          <div className="pc-stamp">✶</div>
          <div>
            <div className="pc-hello">{hello}</div>
            <div className="pc-lang">{sub}</div>
          </div>
          <div className="pc-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      {flashes.map((f) => (
        <span
          key={f.id}
          className="firework-flash"
          style={{ left: f.x, top: f.y }}
          aria-hidden
        />
      ))}
      {particles.map((p) => (
        <span
          key={p.id}
          className="firework-particle"
          style={
            {
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: p.color,
              color: p.color,
              animationDelay: `${p.delay}s`,
              ["--tx" as string]: `${p.tx}px`,
              ["--ty" as string]: `${p.ty}px`,
            } as React.CSSProperties
          }
          aria-hidden
        />
      ))}
    </>
  );
}
