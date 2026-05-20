import Link from "next/link";
import { t, type Lang } from "@/lib/content";

type CV = { role: string; place?: string; date: string; href?: string };

function Section({
  title,
  items,
  variant,
}: {
  title: string;
  items: readonly CV[];
  variant?: "pink" | "lime" | "green";
}) {
  return (
    <div className="cv-section">
      <h2 className={variant ?? ""}>
        <span className="marker" />
        {title}
      </h2>
      {items.map((it, i) => (
        <div className="cv-item" key={i}>
          <div className="role">
            {it.href ? (
              <a href={it.href} target="_blank" rel="noreferrer">
                {it.role}
              </a>
            ) : (
              it.role
            )}
          </div>
          <div className="place">{it.place}</div>
          <div className="date">{it.date}</div>
        </div>
      ))}
    </div>
  );
}

export default function AboutContent({ lang }: { lang: Lang }) {
  const dict = t[lang].about;
  const contactHref = lang === "de" ? "/de/contact" : "/contact";

  return (
    <main className="page">
      <div className="about-page">
        <aside>
          <div className="eyebrow">{dict.eyebrow}</div>
          <h1 className="name">
            Carlotta
            <br />
            Pflug.
          </h1>
          <div className="pronouns italic">{dict.pronouns}</div>
          <div className="links">
            <a href="mailto:carlottapflug@gmail.com">carlottapflug@gmail.com</a>
            <a href="tel:+4917622116272">+49 176 22116272</a>
            <a href="https://www.pal-me.art" target="_blank" rel="noreferrer">
              pal-me.art ↗
            </a>
            <Link href={contactHref}>{dict.cta}</Link>
          </div>
        </aside>

        <div>
          <p className="lead">{dict.lead}</p>

          <div className="cv">
            <Section
              title={dict.sections.own}
              items={dict.data.own}
              variant="pink"
            />
            <Section
              title={dict.sections.internships}
              items={dict.data.internships}
              variant="lime"
            />
            <Section
              title={dict.sections.training}
              items={dict.data.training}
              variant="green"
            />
            <Section
              title={dict.sections.work}
              items={dict.data.work}
              variant="pink"
            />
            <Section
              title={dict.sections.education}
              items={dict.data.education}
              variant="lime"
            />
            <Section
              title={dict.sections.languages}
              items={dict.data.languages}
              variant="green"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
