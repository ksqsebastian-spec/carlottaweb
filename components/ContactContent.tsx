import { t, type Lang } from "@/lib/content";
import GoldPostcard from "@/components/GoldPostcard";

const colors = ["pc-pink", "pc-pink-light", "pc-lime", "pc-green"] as const;
const animations = [
  "pc-anim-1",
  "pc-anim-2",
  "pc-anim-3",
  "pc-anim-4",
  "pc-anim-5",
  "pc-anim-6",
  "pc-anim-7",
  "pc-anim-8",
] as const;

const hellos = [
  { hello: "Hello!", lang: "English" },
  { hello: "Hallo!", lang: "Deutsch" },
  { hello: "¡Hola!", lang: "Español" },
  { hello: "Olá!", lang: "Português" },
  { hello: "Ciao!", lang: "Italiano" },
  { hello: "Merhaba!", lang: "Türkçe" },
  { hello: "こんにちは!", lang: "日本語" },
];

export default function ContactContent({ lang }: { lang: Lang }) {
  const dict = t[lang].contact;

  return (
    <main className="page">
      <div className="contact-page">
        {hellos.map((h, i) => (
          <div
            key={i}
            className={`postcard ${colors[i % colors.length]} ${animations[i % animations.length]}`}
            aria-hidden
          >
            <div className="pc-stamp">✶</div>
            <div>
              <div className="pc-hello" lang={h.lang}>
                {h.hello}
              </div>
              <div className="pc-lang">{h.lang}</div>
            </div>
            <div className="pc-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        ))}

        <GoldPostcard lang={lang} />

        <div>
          <h1 className="big">
            <span>{dict.title}</span>
            <span className="lime">{dict.titleAccent}</span>
          </h1>
          <p
            className="italic contact-subtitle"
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
