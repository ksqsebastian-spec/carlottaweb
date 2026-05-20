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

        <div className="home-divider" />

        <h2 className="brush-line">
          <span className="brush-text">{dict.tagline}</span>
          <span className="brush-stroke" aria-hidden>
            <svg
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="rough">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.9"
                    numOctaves="2"
                    seed="3"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="6" />
                </filter>
              </defs>
              <path
                d="M 20 110 C 160 70, 280 150, 420 100 S 640 150, 780 95 S 980 145, 1120 100 L 1180 110"
                stroke="#d5fd68"
                strokeWidth="115"
                strokeLinecap="round"
                fill="none"
                filter="url(#rough)"
                opacity="0.92"
              />
              <path
                d="M 40 105 C 200 130, 320 80, 480 115 S 700 80, 840 120 S 1000 85, 1140 110"
                stroke="#d5fd68"
                strokeWidth="40"
                strokeLinecap="round"
                fill="none"
                opacity="0.75"
              />
            </svg>
          </span>
        </h2>
      </section>
    </main>
  );
}
