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
              <span className="pflug-wrap">
                <span className="pflug-text">PFLUG.</span>
                <span className="pflug-brush" aria-hidden>
                  <svg
                    viewBox="0 0 600 200"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        id="pinkBrushBig"
                        x="-8%"
                        y="-45%"
                        width="116%"
                        height="190%"
                      >
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.024 0.22"
                          numOctaves="4"
                          seed="4"
                        />
                        <feDisplacementMap in="SourceGraphic" scale="48" />
                      </filter>
                      <filter
                        id="pinkBrushStreaks"
                        x="-4%"
                        y="-25%"
                        width="108%"
                        height="150%"
                      >
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.5 0.06"
                          numOctaves="3"
                          seed="9"
                        />
                        <feDisplacementMap in="SourceGraphic" scale="24" />
                      </filter>
                    </defs>

                    <path
                      d="M -40 112 Q 100 66 220 116 T 410 92 T 640 108"
                      stroke="#f58dc7"
                      strokeWidth="168"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#pinkBrushBig)"
                      opacity="0.92"
                    />

                    <path
                      d="M 10 70 Q 160 104 330 60 T 600 94"
                      stroke="#f58dc7"
                      strokeWidth="18"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#pinkBrushStreaks)"
                      opacity="0.6"
                    />
                    <path
                      d="M 40 162 Q 210 138 400 170 T 590 148"
                      stroke="#f58dc7"
                      strokeWidth="20"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#pinkBrushStreaks)"
                      opacity="0.5"
                    />
                    <path
                      d="M 90 58 L 250 150"
                      stroke="#f58dc7"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#pinkBrushStreaks)"
                      opacity="0.4"
                    />

                    <path
                      d="M 150 120 L 158 188"
                      stroke="#f58dc7"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M 408 118 L 398 172"
                      stroke="#f58dc7"
                      strokeWidth="7"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.5"
                    />

                    <circle cx="70" cy="42" r="4" fill="#f58dc7" opacity="0.7" />
                    <circle cx="300" cy="34" r="3" fill="#f58dc7" opacity="0.6" />
                    <circle cx="480" cy="40" r="5" fill="#f58dc7" opacity="0.6" />
                    <circle cx="540" cy="184" r="3.5" fill="#f58dc7" opacity="0.55" />
                    <circle cx="205" cy="192" r="2.5" fill="#f58dc7" opacity="0.5" />
                    <circle cx="600" cy="150" r="2.5" fill="#f58dc7" opacity="0.5" />
                  </svg>
                </span>
              </span>
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
                <filter id="brushBig" x="-8%" y="-45%" width="116%" height="190%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.02 0.22"
                    numOctaves="4"
                    seed="7"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="52" />
                </filter>
                <filter id="brushStreaks" x="-4%" y="-25%" width="108%" height="150%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.5 0.05"
                    numOctaves="3"
                    seed="11"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="26" />
                </filter>
              </defs>

              <path
                d="M -60 114 Q 180 64 420 118 T 800 90 T 1260 110"
                stroke="#d5fd68"
                strokeWidth="176"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushBig)"
                opacity="0.95"
              />

              <path
                d="M 30 74 Q 300 108 620 60 T 1180 92"
                stroke="#d5fd68"
                strokeWidth="20"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.62"
              />
              <path
                d="M 50 164 Q 380 138 760 172 T 1160 150"
                stroke="#d5fd68"
                strokeWidth="22"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.55"
              />
              <path
                d="M 120 56 L 360 158"
                stroke="#d5fd68"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.4"
              />
              <path
                d="M 1080 60 L 880 160"
                stroke="#d5fd68"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                filter="url(#brushStreaks)"
                opacity="0.38"
              />

              <path
                d="M 270 120 L 262 192"
                stroke="#d5fd68"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                opacity="0.65"
              />
              <path
                d="M 880 120 L 890 180"
                stroke="#d5fd68"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M 600 124 L 596 168"
                stroke="#d5fd68"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                opacity="0.45"
              />

              <circle cx="100" cy="44" r="4.5" fill="#d5fd68" opacity="0.7" />
              <circle cx="500" cy="34" r="3" fill="#d5fd68" opacity="0.6" />
              <circle cx="960" cy="36" r="5.5" fill="#d5fd68" opacity="0.6" />
              <circle cx="1110" cy="198" r="3.5" fill="#d5fd68" opacity="0.55" />
              <circle cx="430" cy="202" r="3" fill="#d5fd68" opacity="0.5" />
              <circle cx="720" cy="196" r="2.5" fill="#d5fd68" opacity="0.5" />
              <circle cx="40" cy="150" r="2.5" fill="#d5fd68" opacity="0.45" />
            </svg>
          </span>
        </h2>
      </section>
    </main>
  );
}
