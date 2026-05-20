import Link from "next/link";

export const metadata = {
  title: "About — Carlotta Pflug",
};

type CVItem = {
  role: string;
  place?: string;
  date: string;
  href?: string;
};

const ownProjects: CVItem[] = [
  {
    role: "PAL ME",
    place: "interdisciplinary art project — funded by BKM",
    date: "2025",
    href: "https://www.pal-me.art",
  },
];

const internships: CVItem[] = [
  {
    role: "MK&G",
    place: "Education and Outreach",
    date: "10 / 2025 – 01 / 2026",
  },
  {
    role: "MARKK",
    place: "Press and Public Relations",
    date: "08 – 09 / 2024",
  },
];

const training: CVItem[] = [
  {
    role: "Academy for Sport and Health",
    place: "Fitness Trainer C-License",
    date: "—",
  },
  {
    role: "SPIEGEL Akademie",
    place: "Certificate Course in Influencer Management",
    date: "—",
  },
  {
    role: "Mental Health First Aid",
    place: "First Responder Course",
    date: "—",
  },
  {
    role: "Yale University via Coursera",
    place: "The Science of Wellbeing",
    date: "—",
  },
  {
    role: "Academy for Volunteering",
    place: "Fundamentals of Volunteer Coordination",
    date: "—",
  },
];

const work: CVItem[] = [
  {
    role: "Office Management",
    place: "Anwaltshaus Weidenallee",
    date: "2023 – present",
  },
  {
    role: "Event Planning & Logistics Assistant",
    place: "Edelhof1514",
    date: "2018 – present",
  },
  {
    role: "Bartender",
    place: "Pinot & Becks",
    date: "2025 – 2026",
  },
  {
    role: "Team Assistant",
    place: "GRUPPENWERK Design Manufakturen GmbH",
    date: "2020 – 2021",
  },
  {
    role: "Barista",
    place: "CARLOS COFFEE",
    date: "2017 – 2019",
  },
];

const education: CVItem[] = [
  {
    role: "Medical School Hamburg",
    place: "BA Expressive Arts in Social Transformation",
    date: "2023 – 2026",
  },
  {
    role: "Gymnasium Kaiser-Friedrich-Ufer",
    place: "Abitur",
    date: "2019",
  },
];

const languages: CVItem[] = [
  { role: "German", place: "Native", date: "" },
  { role: "English", place: "Cambridge C2", date: "" },
  { role: "French", place: "Basic (school level)", date: "" },
];

function Section({
  title,
  items,
  variant,
}: {
  title: string;
  items: CVItem[];
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

export default function About() {
  return (
    <main className="page">
      <div className="about-page">
        <aside>
          <div className="eyebrow">About her</div>
          <h1 className="name">
            Carlotta
            <br />
            Pflug.
          </h1>
          <div className="pronouns italic">she / her — based in hh.</div>
          <div className="links">
            <a href="mailto:carlottapflug@gmail.com">carlottapflug@gmail.com</a>
            <a href="tel:+4917622116272">+49 176 22116272</a>
            <a
              href="https://www.pal-me.art"
              target="_blank"
              rel="noreferrer"
            >
              pal-me.art ↗
            </a>
            <Link href="/contact">Get in touch →</Link>
          </div>
        </aside>

        <div>
          <p className="lead">
            Placeholder description — Carlotta is a Hamburg-based{" "}
            <em>creator, organizer and connector</em> working at the
            intersection of <span className="pink">art</span>, education and
            social transformation. Her practice spans interdisciplinary
            projects, arts education, and event production — all rooted in the
            belief that good work happens when people, ideas and institutions
            are brought into conversation with care.
          </p>

          <div className="cv">
            <Section title="Own projects" items={ownProjects} variant="pink" />
            <Section title="Internships" items={internships} variant="lime" />
            <Section
              title="Further training"
              items={training}
              variant="green"
            />
            <Section title="Work experience" items={work} variant="pink" />
            <Section title="Education" items={education} variant="lime" />
            <Section title="Languages" items={languages} variant="green" />
          </div>
        </div>
      </div>
    </main>
  );
}
