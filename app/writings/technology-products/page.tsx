import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology & Products — Sanjay Kalyanasundaram",
  description:
    "Papers and field notes by Sanjay Kalyanasundaram on enterprise AI, technology, and building products.",
};

export default function TechnologyProducts() {
  return (
    <main className="writing-index">
      <header className="site-header" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Sanjay Kalyanasundaram, home">
          SK<span className="wordmark-dot">.</span>
        </a>
        <nav>
          <a href="/#about">About</a>
          <a href="/#writings">Writings</a>
          <a href="/#books">Bookshelf</a>
        </nav>
      </header>

      <section className="writing-index-hero ruled">
        <p className="eyebrow">Writings · Technology &amp; products</p>
        <h1>Ideas for builders.</h1>
        <p>
          Papers and working notes on enterprise AI, product systems, and the
          practical work of turning emerging technology into durable value.
        </p>
      </section>

      <section className="paper-library" aria-labelledby="papers-title">
        <div className="section-kicker">
          <span>01</span>
          <p id="papers-title">Papers</p>
        </div>
        <div className="paper-shelf">
          <a
            className="paper-card"
            href="/writings/technology-products/abstraction-of-compute"
          >
            <div className="paper-card-meta">
              <span>Paper 02</span>
              <time dateTime="2026-07-15">July 15, 2026</time>
            </div>
            <div className="paper-card-copy">
              <p>Enterprise AI · Strategy</p>
              <h2>The Abstraction of Compute</h2>
              <h3>
                Value Migration, Agentic Orchestration, and the Future of
                Enterprise AI
              </h3>
              <p>
                Why tokens will fade from the buyer’s view, and why the real
                value will move to the software that completes the work.
              </p>
            </div>
            <span className="paper-card-arrow" aria-hidden="true">→</span>
          </a>
          <a
            className="paper-card"
            href="/writings/technology-products/sovereign-enterprise-ai-blueprint"
          >
            <div className="paper-card-meta">
              <span>Paper 01</span>
              <time dateTime="2026-06-19">June 19, 2026</time>
            </div>
            <div className="paper-card-copy">
              <p>Practitioner’s guide · Enterprise AI</p>
              <h2>The Sovereign Enterprise AI Blueprint</h2>
              <h3>Reclaiming Certainty with Open Weight and Open Source Stacks</h3>
              <p>
                A practical argument for predictable cost, immutable workflows,
                data sovereignty, and enterprise-owned AI infrastructure.
              </p>
            </div>
            <span className="paper-card-arrow" aria-hidden="true">→</span>
          </a>
          <p className="paper-shelf-note">More papers will appear here.</p>
        </div>
      </section>

      <footer>
        <p>Technology, products, and ideas in progress.</p>
        <div>
          <a href="/#writings">All writing topics</a>
          <a href="/">Home</a>
        </div>
        <span>© {new Date().getFullYear()} Sanjay Kalyanasundaram</span>
      </footer>
    </main>
  );
}
