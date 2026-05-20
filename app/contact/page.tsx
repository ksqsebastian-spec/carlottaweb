export const metadata = {
  title: "Contact — Carlotta Pflug",
};

export default function Contact() {
  return (
    <main className="page">
      <div className="contact-page">
        <div>
          <h1 className="big">
            say <span className="lime">hi.</span>
          </h1>
          <p
            className="italic"
            style={{
              fontSize: 18,
              maxWidth: 420,
              marginTop: 24,
              color: "var(--muted)",
            }}
          >
            For collaborations, project requests, or just a coffee in Hamburg —
            the inbox is always open.
          </p>
        </div>

        <div className="info">
          <div className="block">
            <div className="label">Email</div>
            <div className="value">
              <a href="mailto:carlottapflug@gmail.com">
                carlottapflug@gmail.com
              </a>
            </div>
          </div>

          <div className="block">
            <div className="label">Phone</div>
            <div className="value">
              <a href="tel:+4917622116272">+49 176 22116272</a>
            </div>
          </div>

          <div className="block">
            <div className="label">Studio</div>
            <div className="value">
              Oelkersallee 13<br />
              22769 Hamburg
            </div>
          </div>

          <div className="block">
            <div className="label">Elsewhere</div>
            <div className="value">
              <a href="https://www.pal-me.art" target="_blank" rel="noreferrer">
                pal-me.art ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
