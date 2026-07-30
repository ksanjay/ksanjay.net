import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Markets & Investing | Sanjay Kalyanasundaram",
  description:
    "Investment papers and working notes by Sanjay Kalyanasundaram on public markets, infrastructure, and business models.",
};

export default function MarketsInvesting() {
  return (
    <main className="writing-index" id="main-content">
      <header className="site-header" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Sanjay Kalyanasundaram, home">
          <span>SK</span>
          <small>Sanjay Kalyanasundaram</small>
        </Link>
        <nav aria-label="Primary">
          <Link href="/#about">About</Link>
          <Link href="/#writings">Writings</Link>
          <Link href="/#books">Bookshelf</Link>
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
          <Link href="/#writings">All writing topics</Link>
          <Link href="/">Home</Link>
        </div>
        <span>© {new Date().getFullYear()} Sanjay Kalyanasundaram</span>
      </footer>
    </main>
  );
}
