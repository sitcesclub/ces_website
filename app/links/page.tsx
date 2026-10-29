// Save as: app/links/page.jsx  (App Router)  →  visit /links
// For Pages Router: save as pages/links.jsx and change `export default function` accordingly (it works as-is).

interface LinkItem {
    label: string;
    note: string;
    href: string;
    primary?: boolean;
}

const LINKS: LinkItem[] = [
    { label: "Instagram", note: "sitcesclub", href: "https://www.instagram.com/sitcesclub?stkn=YmZjYXF4aTR5d21x" },
    { label: "LinkedIn", note: "Computer Engineers' Society", href: "https://www.linkedin.com/company/computer-engineers-society-sit/" },
    { label: "GitHub", note: "sitcesclub", href: "https://github.com/sitcesclub" },
    { label: "YouTube", note: "Talks and recordings", href: "https://youtube.com/@cesclubsit?si=AbXfLu-8VyrQMzgI" },
    { label: "WhatsApp community", note: "Announcements and updates", href: "https://whatsapp.com/channel/0029VbE6d37InlqM3V3ZfA2B" },
    { label: "Email", note: "Write to us", href: "mailto:cesstudentofficial@gmail.com" },
    { label: "Website", note: "Events, members, alumni", href: "https://www.sitces.in/ " },
];

export const metadata = {
    title: "Computer Engineers' Society | Links",
    description: "All CES social profiles and important links in one place.",
};

export default function LinksPage() {
    return (
        <main className="ces-links">
            <style>{css}</style>

            <header className="head">
                <h1>Computer Engineers&apos; Society</h1>
                <p>Learn with us. Build with us. Grow with us.</p>
            </header>

            <nav aria-label="CES links">
                <ul>
                    {LINKS.map((l) => (
                        <li key={l.label}>
                            <a
                                href={l.href}
                                className={(l as { primary?: boolean }).primary ? "link primary" : "link"}
                                {...(l.href.startsWith("http")
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                            >
                                <span className="label">{l.label}</span>
                                <span className="note">{l.note}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <footer>© 2026 Computer Engineers&apos; Society</footer>
        </main>
    );
}

const css = `
/* Page wrapper and theme colours */
.ces-links {
  --bg: #03030a;
  --panel: #0a0b1c;
  --gold: #e8b53f;
  --text: #f3efe6;
  --muted: #9a97a8;

  min-height: 100vh;
  padding: 140px 20px 40px;
  box-sizing: border-box;
  background:
    radial-gradient(60% 40% at 50% 0%, rgba(232, 181, 63, 0.14), transparent 70%),
    var(--bg);
  color: var(--text);
  font-family: Georgia, "Times New Roman", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Heading and tagline */
.ces-links .head {
  text-align: center;
  max-width: 420px;
  margin-bottom: 32px;
}

.ces-links h1 {
  font-size: 1.75rem;
  line-height: 1.2;
  margin: 0 0 8px;
  font-weight: 700;
}

.ces-links .head p {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.6;
}

/* Links list */
.ces-links nav {
  width: 100%;
  max-width: 440px;
}

.ces-links ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

/* Link buttons */
.ces-links .link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  padding: 14px 20px;
  border-radius: 999px;
  text-decoration: none;
  color: var(--text);
  background: var(--panel);
  border: 1px solid rgba(232, 181, 63, 0.35);
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.2s;
}

.ces-links .label {
  font-size: 1.05rem;
  font-weight: 700;
}

.ces-links .note {
  font-size: 0.85rem;
  color: var(--muted);
}

.ces-links .link:hover {
  background: var(--gold);
  color: #14110a;
  border-color: var(--gold);
}

.ces-links .link:hover .note {
  color: #4a3f1d;
}

.ces-links .link:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 3px;
}

/* Highlighted "Join CES" button */
.ces-links .primary {
  background: var(--gold);
  color: #14110a;
  border-color: var(--gold);
  box-shadow: 0 8px 28px rgba(232, 181, 63, 0.25);
}

.ces-links .primary .note {
  color: #4a3f1d;
}

.ces-links .primary:hover {
  background: #f3c85e;
}

/* Footer */
.ces-links footer {
  margin-top: 36px;
  font-size: 0.8rem;
  color: var(--muted);
}

/* Respect reduced-motion settings */
@media (prefers-reduced-motion: reduce) {
  .ces-links .link {
    transition: none;
  }
}
`;