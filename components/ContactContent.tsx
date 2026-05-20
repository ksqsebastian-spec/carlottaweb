import { t, type Lang } from "@/lib/content";

export default function ContactContent({ lang }: { lang: Lang }) {
  const dict = t[lang].contact;
  return (
    <main className="page">
      <div className="contact-page">
        <div className="postcard" aria-hidden>
          <div className="pc-left">
            <div className="pc-msg">
              {lang === "de"
                ? "Liebe Carlotta, ein kleiner Gruß aus dem Netz."
                : "Dear Carlotta, just a little hello from the internet."}
            </div>
            <div className="pc-stamp">✶</div>
          </div>
          <div className="pc-lines">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div>
          <h1 className="big">
            {dict.title} <span className="lime">{dict.titleAccent}</span>
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
