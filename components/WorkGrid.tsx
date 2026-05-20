const items = [
  { n: "01", title: "Maison Lume", tag: "Identity / Social", img: "/reference/work-01.jpg" },
  { n: "02", title: "Soft Hour", tag: "Art Direction", img: "/reference/work-02.jpg" },
  { n: "03", title: "Atelier Nove", tag: "Editorial", img: "/reference/work-03.jpg" },
  { n: "04", title: "Hôtel Pétale", tag: "Campaign", img: "/reference/work-04.jpg" },
  { n: "05", title: "Plume & Co.", tag: "Brand System", img: "/reference/work-05.jpg" },
  { n: "06", title: "Studio Halen", tag: "Identity", img: "/reference/work-06.jpg" },
  { n: "07", title: "Saintz", tag: "Social Kit", img: "/reference/work-07.jpg" },
  { n: "08", title: "Solene Skincare", tag: "Packaging", img: "/reference/work-08.jpg" },
  { n: "09", title: "Mira Studios", tag: "Web", img: "/reference/work-09.jpg" },
  { n: "10", title: "Verra", tag: "Layout", img: "/reference/work-10.jpg" },
];

export default function WorkGrid() {
  return (
    <section className="work" id="work">
      <div className="work-row" style={{ marginBottom: 48 }}>
        {items.slice(0, 5).map((it) => (
          <Card key={it.n} {...it} />
        ))}
      </div>
      <div className="work-row">
        {items.slice(5, 10).map((it) => (
          <Card key={it.n} {...it} />
        ))}
      </div>
    </section>
  );
}

function Card({
  n,
  title,
  tag,
  img,
}: {
  n: string;
  title: string;
  tag: string;
  img: string;
}) {
  return (
    <article className="work-item">
      <div className="label">{`(${n})`}</div>
      <div className="frame">
        <img src={img} alt={title} loading="lazy" />
      </div>
      <div className="meta">
        {title} — {tag}
      </div>
    </article>
  );
}
