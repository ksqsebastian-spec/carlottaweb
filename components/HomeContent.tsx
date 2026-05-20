import { t, type Lang } from "@/lib/content";

export default function HomeContent({ lang }: { lang: Lang }) {
  const dict = t[lang];
  return (
    <main className="page">
      <section className="home">
        <div className="home-top">
          <h1 className="display">
            <span className="row">
              <span>CARLOTTA</span>
            </span>
            <span className="row">
              <span className="accent-pink">PFLUG.</span>
            </span>
          </h1>
          <div className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/reference/IMG_0381-2.jpg"
              alt={dict.home.portrait_alt}
            />
          </div>
        </div>

        <h2 className="brush-line">
          <span className="brush-text">{dict.tagline}</span>
          <span className="brush-stroke" aria-hidden>
            <svg
              viewBox="0 0 1200 220"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="brushBig" x="-6%" y="-30%" width="112%" height="160%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.013 0.18"
                    numOctaves="3"
                    seed="7"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="34" />
                </filter>
                <filter id="brushStreaks" x="-3%" y="-15%" width="106%" height="130%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.45 0.035"
                    numOctaves="2"
                    seed="11"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="16" />
                </filter>
              </defs>

              <path
                d="M -60 112 Q 220 78 610 108 T 1260 96"
                stroke="#d5fd68"
                strokeWidth="180"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushBig)"
                opacity="0.95"
              />

              <path
                d="M 30 78 Q 320 92 610 70 T 1180 88"
                stroke="#d5fd68"
                strokeWidth="22"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.65"
              />
              <path
                d="M 50 158 Q 360 152 760 162 T 1160 156"
                stroke="#d5fd68"
                strokeWidth="22"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.6"
              />

              <path
                d="M 270 122 L 268 188"
                stroke="#d5fd68"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M 880 122 L 884 178"
                stroke="#d5fd68"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
                opacity="0.55"
              />

              <circle cx="100" cy="48" r="4.5" fill="#d5fd68" opacity="0.7" />
              <circle cx="960" cy="36" r="5.5" fill="#d5fd68" opacity="0.65" />
              <circle cx="1110" cy="195" r="3.5" fill="#d5fd68" opacity="0.6" />
              <circle cx="430" cy="200" r="3" fill="#d5fd68" opacity="0.55" />
            </svg>
          </span>
        </h2>
      </section>
    </main>
  );
}
