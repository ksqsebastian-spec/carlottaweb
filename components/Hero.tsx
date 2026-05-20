export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <h1 className="hero-title">
            <div className="hero-row">THE&nbsp;ART</div>
            <div className="hero-row" style={{ marginTop: "0.1em" }}>
              <span>*</span>
              <span>(</span>
              <span className="hero-media" aria-hidden>
                <img src="/reference/work-04.jpg" alt="" />
                <span className="play">▶</span>
              </span>
              <span>)</span>
              <span className="hero-tag">&nbsp;Showreel</span>
            </div>
            <div className="hero-row" style={{ marginTop: "0.1em" }}>
              OF
            </div>
            <div className="hero-row">
              <span className="hero-left">We&apos;re built for</span>
              <span>HACKING</span>
            </div>
            <div className="hero-row">SOCIAL</div>
          </h1>
        </div>
      </div>

      <div className="hero-footer">
        <div>Carlotta Studio — EST. 2024</div>
        <div className="center">Berlin / New York</div>
        <div className="right">Scroll ↓</div>
      </div>
    </section>
  );
}
