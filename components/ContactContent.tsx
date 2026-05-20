import { t, type Lang } from "@/lib/content";

const postcards = [
  { className: "pc-pink", stamp: "✶" },
  { className: "pc-pink-light", stamp: "✶" },
  { className: "pc-lime", stamp: "✶" },
  { className: "pc-green", stamp: "✶" },
];

export default function ContactContent({ lang }: { lang: Lang }) {
  const dict = t[lang].contact;
  const msg =
    lang === "de"
      ? "Liebe Carlotta, ein kleiner Gruß aus dem Netz."
      : "Dear Carlotta, just a little hello from the internet.";

  return (
    <main className="page">
      <div className="contact-page">
        {postcards.map((pc, i) => (
          <div key={i} className={`postcard ${pc.className}`} aria-hidden>
            <div className="pc-left">
              <div className="pc-msg">{msg}</div>
              <div className="pc-stamp">{pc.stamp}</div>
            </div>
            <div className="pc-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        ))}

        <div>
          <h1 className="big">
            <span>{dict.title}</span>
            <span className="lime">{dict.titleAccent}</span>
          </h1>
          <p
            className="italic"
            style={{
              fontSize: 18,
              maxWidth: 460,
              marginTop: 24,
              color: "var(--muted)",
            }}
          >
            {dict.subtitle}
          </p>
        </div>

        <div className="info">
          <div className="block">
            <div className="label">{dict.emailLabel}</div>
            <div className="value">
              <a href="mailto:carlottapflug@gmail.com">
                carlottapflug@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
