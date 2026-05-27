export type Lang = "en" | "de";

type CV = {
  role: string;
  place?: string;
  date: string;
  href?: string;
  desc?: string;
  photo?: string;
};

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
          Carlotta Pflug is a Hamburg native working at the intersection of
          art, education, curation, and social transformation. As a{" "}
          <span className="green">creative organizer and connector</span>, her
          practice spans interdisciplinary projects, arts mediation, and
          management. Always guided by the conviction that good work happens
          where creative processes meet organizational clarity.
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
            role: "PAL ME.",
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
            role: "Mental Health First Aid (MHFA-Kurs)",
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
            date: "2023 – present",
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
        "For collaborations, project requests, or just a drink.",
      emailLabel: "Email",
    },
  },
  de: {
    nav: { home: "START", about: "ÜBER SIE", contact: "KONTAKT" },
    tagline: "kreieren, managen & vernetzen in hh.",
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
          Carlotta Pflug ist Hamburgerin, die an der Schnittstelle von Kunst,
          Bildung, Kuration und sozialer Transformation arbeitet. Als{" "}
          <span className="green">kreative Organisatorin und Vernetzerin</span>{" "}
          umfasst ihre Praxis interdisziplinäre Projekte, Kunstvermittlung und
          Management. Immer voran mit der Überzeugung, dass gute Arbeit dort
          entsteht, wo kreative Prozesse auf organisatorische Klarheit treffen.
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
            role: "PAL ME.",
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
            role: "Mental Health First Aid (MHFA-Kurs)",
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
            date: "2023 – dato",
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
        "Für Kooperationen, Projektanfragen oder einfach ein Getränk.",
      emailLabel: "E-Mail",
    },
  },
} as const;
