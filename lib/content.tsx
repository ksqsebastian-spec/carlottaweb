export type Lang = "en" | "de";

type CV = { role: string; place?: string; date: string; href?: string };

export const t = {
  en: {
    nav: { home: "HOME", about: "ABOUT HER", contact: "CONTACT" },
    tagline: "creating, managing & connecting in hh.",
    footer: "© Carlotta Pflug, 2026",
    home: {
      portrait_alt: "Carlotta Pflug",
    },
    about: {
      eyebrow: "About her",
      pronouns: "she / her",
      cta: "Get in touch →",
      lead: (
        <>
          Placeholder description — Carlotta is a Hamburg-based{" "}
          <em>creator, organizer and connector</em> working at the intersection
          of <span className="pink">art</span>, education and social
          transformation. Her practice spans interdisciplinary projects, arts
          education, and event production — all rooted in the belief that good
          work happens when people, ideas and institutions are brought into
          conversation with care.
        </>
      ),
      sections: {
        own: "Own projects",
        internships: "Internships",
        training: "Further training",
        work: "Work experience",
        education: "Education",
        languages: "Languages",
      },
      data: {
        own: [
          {
            role: "PAL ME",
            place: "interdisciplinary art project — funded by BKM",
            date: "2025",
            href: "https://www.pal-me.art",
          },
        ] as CV[],
        internships: [
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
        ] as CV[],
        training: [
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
        ] as CV[],
        work: [
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
          { role: "Bartender", place: "Pinot & Becks", date: "2025 – 2026" },
          {
            role: "Team Assistant",
            place: "GRUPPENWERK Design Manufakturen GmbH",
            date: "2020 – 2021",
          },
          { role: "Barista", place: "CARLOS COFFEE", date: "2017 – 2019" },
        ] as CV[],
        education: [
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
        ] as CV[],
        languages: [
          { role: "German", place: "Native", date: "" },
          { role: "English", place: "Cambridge C2", date: "" },
          { role: "French", place: "Basic (school level)", date: "" },
        ] as CV[],
      },
    },
    contact: {
      title: "say",
      titleAccent: "hiiiii.",
      subtitle:
        "For collaborations, project requests, or just a beer.",
      emailLabel: "Email",
    },
  },
  de: {
    nav: { home: "START", about: "ÜBER SIE", contact: "KONTAKT" },
    tagline: "kreieren, organisieren & verbinden in hh.",
    footer: "© Carlotta Pflug, 2026",
    home: {
      portrait_alt: "Carlotta Pflug",
    },
    about: {
      eyebrow: "Über sie",
      pronouns: "sie / ihr",
      cta: "Schreib mir →",
      lead: (
        <>
          Lückenfüllertext — Carlotta ist eine in Hamburg ansässige{" "}
          <em>Kreative, Organisatorin und Vernetzerin</em>, die an der
          Schnittstelle von <span className="pink">Kunst</span>, Bildung und
          sozialer Transformation arbeitet. Ihre Praxis umfasst
          interdisziplinäre Projekte, Kunstvermittlung und Eventproduktion —
          getragen von der Überzeugung, dass gute Arbeit dort entsteht, wo
          Menschen, Ideen und Institutionen mit Sorgfalt zusammengebracht
          werden.
        </>
      ),
      sections: {
        own: "Eigene Projekte",
        internships: "Praktika",
        training: "Weiterbildungen",
        work: "Berufserfahrung",
        education: "Ausbildung",
        languages: "Sprachen",
      },
      data: {
        own: [
          {
            role: "PAL ME",
            place: "interdisziplinäres Kunstprojekt — gefördert von der BKM",
            date: "2025",
            href: "https://www.pal-me.art",
          },
        ] as CV[],
        internships: [
          {
            role: "MK&G",
            place: "Bildung & Vermittlung",
            date: "10 / 2025 – 01 / 2026",
          },
          {
            role: "MARKK",
            place: "Presse- & Öffentlichkeitsarbeit",
            date: "08 – 09 / 2024",
          },
        ] as CV[],
        training: [
          {
            role: "Academy for Sport and Health",
            place: "Fitnesstrainer C-Lizenz",
            date: "—",
          },
          {
            role: "SPIEGEL Akademie",
            place: "Zertifikatskurs Influencer Management",
            date: "—",
          },
          {
            role: "Mental Health First Aid",
            place: "Erste-Hilfe-Kurs für psychische Gesundheit",
            date: "—",
          },
          {
            role: "Yale University via Coursera",
            place: "The Science of Wellbeing",
            date: "—",
          },
          {
            role: "Akademie für Ehrenamt",
            place: "Grundlagen der Freiwilligenkoordination",
            date: "—",
          },
        ] as CV[],
        work: [
          {
            role: "Büromanagement",
            place: "Anwaltshaus Weidenallee",
            date: "2023 – heute",
          },
          {
            role: "Eventplanung & Logistikassistenz",
            place: "Edelhof1514",
            date: "2018 – heute",
          },
          { role: "Bartender", place: "Pinot & Becks", date: "2025 – 2026" },
          {
            role: "Teamassistenz",
            place: "GRUPPENWERK Design Manufakturen GmbH",
            date: "2020 – 2021",
          },
          { role: "Barista", place: "CARLOS COFFEE", date: "2017 – 2019" },
        ] as CV[],
        education: [
          {
            role: "Medical School Hamburg",
            place: "B.A. Expressive Arts in Social Transformation",
            date: "2023 – 2026",
          },
          {
            role: "Gymnasium Kaiser-Friedrich-Ufer",
            place: "Abitur",
            date: "2019",
          },
        ] as CV[],
        languages: [
          { role: "Deutsch", place: "Muttersprache", date: "" },
          { role: "Englisch", place: "Cambridge C2", date: "" },
          { role: "Französisch", place: "Grundkenntnisse (Schulniveau)", date: "" },
        ] as CV[],
      },
    },
    contact: {
      title: "sag",
      titleAccent: "halloooo.",
      subtitle:
        "Für Kooperationen, Projektanfragen, oder einfach ein Bier.",
      emailLabel: "E-Mail",
    },
  },
} as const;
