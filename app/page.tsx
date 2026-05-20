import Link from "next/link";

const stripImages = [
  { src: "/reference/work-01.jpg" },
  { src: "/reference/work-02.jpg" },
  { src: "/reference/work-03.jpg" },
  { kind: "empty" as const },
  { src: "/reference/work-05.jpg" },
  { kind: "empty-pink" as const },
  { src: "/reference/work-07.jpg" },
  { src: "/reference/work-08.jpg" },
];

export default function Home() {
  return (
    <main className="page">
      <section className="home">
        <div className="strip" aria-hidden>
          {stripImages.map((it, i) =>
            "src" in it ? (
              <div className="strip-img" key={i}>
                <img src={it.src} alt="" />
              </div>
            ) : (
              <div
                key={i}
                className={`strip-img ${
                  it.kind === "empty-pink" ? "empty-pink" : "empty"
                }`}
              />
            )
          )}
        </div>

        <h1 className="display">
          <span className="row">
            <span className="quote">&ldquo;CARLOTTA</span>
          </span>
          <span className="row">
            <span className="accent-pink">PFLUG&rdquo;</span>
          </span>
        </h1>

        <div className="home-bottom">
          <div>
            <div className="label">portfolio</div>
            <div style={{ marginTop: 6 }}>
              <span className="pill">creating</span>
            </div>
            <div style={{ marginTop: 6, color: "var(--muted)" }}>
              managing &amp; connecting in hh.
            </div>
          </div>

          <div>
            <div className="label">based in</div>
            <div style={{ marginTop: 6 }}>Hamburg, DE</div>
            <div style={{ color: "var(--muted)" }}>Oelkersallee 13</div>
          </div>

          <div className="col-desc">
            Carlotta is a Hamburg-based creator and connector working across
            interdisciplinary art, education, and social transformation —
            building bridges between people, institutions, and ideas. Currently
            studying Expressive Arts in Social Transformation at MSH Hamburg,
            with parallel work in arts education at MK&amp;G and her own funded
            project,{" "}
            <Link href="/about" style={{ color: "var(--green-dark)" }}>
              PAL ME
            </Link>
            .
          </div>

          <div className="col-meta">
            © 2026
            <br />
            v.001
            <br />
            she / her
          </div>
        </div>
      </section>
    </main>
  );
}
