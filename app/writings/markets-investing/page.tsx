import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets & Investing | Sanjay Kalyanasundaram",
  description:
    "Investment papers and working notes by Sanjay Kalyanasundaram on public markets, infrastructure, and business models.",
};

export default function MarketsInvesting() {
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

      <section className="writing-index-hero">
        <p className="eyebrow">Writings · Markets &amp; investing</p>
        <h1>Research for curious capital.</h1>
        <p>
          Investment memos and working notes on infrastructure, business
          models, market structure, and the mechanics hiding beneath the story.
        </p>
      </section>

      <section className="paper-library" aria-labelledby="market-papers-title">
        <div className="section-kicker">
          <span>01</span>
          <p id="market-papers-title">Papers</p>
        </div>
        <div className="paper-shelf">
          <a
            className="paper-card"
            href="/writings/markets-investing/neocloud-inference-era"
          >
            <div className="paper-card-meta">
              <span>Paper 01</span>
              <time dateTime="2026-06">June 2026</time>
            </div>
            <div className="paper-card-copy">
              <p>AI infrastructure · Investment research</p>
              <h2>AI Compute Infrastructure</h2>
              <h3>Re-underwriting the Neocloud Thesis for the Inference Era</h3>
              <p>
                Why the leveraged neocloud bear case is mostly right, why the
                asset-light rebuttal is not, and where the durable economics
                may actually sit.
              </p>
            </div>
            <span className="paper-card-arrow" aria-hidden="true">→</span>
          </a>
          <p className="paper-shelf-note">More papers will appear here.</p>
        </div>
      </section>

      <footer>
        <p>Markets, mechanisms, and ideas worth underwriting.</p>
        <div>
          <a href="/#writings">All writing topics</a>
          <a href="/">Home</a>
        </div>
        <span>© {new Date().getFullYear()} Sanjay Kalyanasundaram</span>
      </footer>
    </main>
  );
}
