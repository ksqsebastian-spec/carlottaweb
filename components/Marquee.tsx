export default function Marquee() {
  const words = "Beauty / Fashion / Wellness / Editorial / Identity";
  return (
    <section className="marquee" aria-hidden>
      <div className="marquee-track">
        <span>{words}</span>
        <span>{words}</span>
        <span>{words}</span>
      </div>
    </section>
  );
}
