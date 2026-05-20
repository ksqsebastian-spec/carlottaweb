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
            <img src="/portrait.jpg" alt={dict.home.portrait_alt} />
          </div>
        </div>

        <h2 className="brush-line">
          <span className="brush-text">{dict.tagline}</span>
          <span className="brush-stroke" aria-hidden>
            <svg
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="brushRough" x="-5%" y="-20%" width="110%" height="140%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.018 0.09"
                    numOctaves="3"
                    seed="6"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="28" />
                </filter>
                <filter id="brushStreaks" x="-2%" y="-10%" width="104%" height="120%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.35 0.04"
                    numOctaves="2"
                    seed="2"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="10" />
                </filter>
              </defs>

              <path
                d="M -40 100 Q 200 80 600 96 T 1240 94"
                stroke="#d5fd68"
                strokeWidth="160"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushRough)"
                opacity="0.96"
              />
              <path
                d="M 20 80 Q 260 96 600 84 T 1180 92"
                stroke="#d5fd68"
                strokeWidth="40"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.75"
              />
              <path
                d="M 60 138 Q 340 132 720 140 T 1140 134"
                stroke="#d5fd68"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.55"
              />
            </svg>
          </span>
        </h2>
      </section>
    </main>
  );
}
