const books = [
  ["The Fabric of Reality", "David Deutsch"],
  ["The Beginning of Infinity", "David Deutsch"],
  ["Influence", "Robert Cialdini"],
  ["Power vs. Force", "David R. Hawkins"],
  ["A Savage War of Peace", "Alistair Horne"],
  [
    "Observations upon the Prophecies of Daniel and the Apocalypse of St. John",
    "Sir Isaac Newton",
  ],
  ["The Theory of Speculation", "Louis Bachelier"],
  ["What I Learned About Investing from Darwin", "Pulak Prasad"],
];

const chapters = [
  {
    years: "Most recently",
    role: "VP, Enterprise AI Native Products & New Ventures",
    company: "Standard Industries",
    detail:
      "Built the enterprise AI portfolio from zero: a secure LLM platform, six agentic workflows in production, and an AI-native venture aimed at a $4B market.",
  },
  {
    years: "Previously",
    role: "Senior Manager, Product",
    company: "Amazon",
    detail:
      "Rebuilt Alexa On-The-Go for wearables and hearables, launching with major OEM partners and reaching millions of users.",
  },
  {
    years: "Earlier",
    role: "Product & platform leadership",
    company: "Silicon Labs · Zentri · BlackBerry · Metaswitch",
    detail:
      "Led IoT cloud services, tripled the platform customer base, and built products across cloud, mobile, networking, and connected devices.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Sanjay Kalyanasundaram, home">
          SK<span className="wordmark-dot">.</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#writings">Writings</a>
          <a href="#books">Bookshelf</a>
        </nav>
      </header>

      <section className="hero ruled" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Product builder · Writer · Investor</p>
          <h1>
            <span>Sanjay</span>
            <span>Kalyanasundaram</span>
          </h1>
          <p className="lede">
            I build ambitious products where emerging technology meets real
            business value.
          </p>
          <a className="text-link" href="#writings">
            Read my writings <span aria-hidden="true">→</span>
          </a>
        </div>
        <aside className="field-note" aria-label="A note from Sanjay">
          <span className="note-label">A working belief</span>
          <p>
            Powerful technology matters only when people can use it
            effortlessly.
          </p>
          <span className="note-signoff">— Sanjay</span>
        </aside>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker">
          <span>01</span>
          <p>About</p>
        </div>
        <div className="prose">
          <p className="prose-lead">
            Most recently, I was Vice President of Enterprise AI Native
            Products and New Ventures at Standard Industries, one of America’s
            largest privately held companies.
          </p>
          <p>
            I shaped the company’s AI product strategy and built its enterprise
            AI portfolio from the ground up—launching a secure LLM platform,
            putting six agentic workflows into production, and creating an
            AI-native venture aimed at a $4 billion market.
          </p>
          <p>
            I’ve spent more than 25 years turning major technology shifts into
            products people can actually use: optical networking, cloud,
            mobile, IoT, conversational AI, and now agentic enterprise systems.
            The technology changes. My obsession doesn’t: make powerful systems
            feel effortless, build teams that move quickly, and create
            measurable value inside complex organizations.
          </p>
        </div>
      </section>

      <section className="chapters section" aria-labelledby="career-title">
        <div className="section-kicker">
          <span>02</span>
          <p id="career-title">Selected chapters</p>
        </div>
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <article className="chapter" key={chapter.company}>
              <p className="chapter-years">{chapter.years}</p>
              <div>
                <h2>{chapter.role}</h2>
                <p className="chapter-company">{chapter.company}</p>
              </div>
              <p className="chapter-detail">{chapter.detail}</p>
            </article>
          ))}
          <article className="chapter compact">
            <p className="chapter-years">2004</p>
            <div>
              <h2>Founder</h2>
              <p className="chapter-company">Ruvia</p>
            </div>
            <p className="chapter-detail">
              Built Wi-Fi data analytics products before “data product” was a
              familiar phrase.
            </p>
          </article>
        </div>
      </section>

      <section className="writings section ruled" id="writings">
        <div className="section-kicker light">
          <span>03</span>
          <p>Writings</p>
        </div>
        <div className="writings-intro">
          <h2>Ideas in progress.</h2>
          <p>
            Essays and working notes on artificial intelligence, building
            products, public markets, and the observations that connect them.
          </p>
        </div>
        <div className="writing-topics" aria-label="Writing topics">
          <div><span>01</span><p>Technology &amp; products</p></div>
          <div><span>02</span><p>Markets &amp; investing</p></div>
          <div><span>03</span><p>Notes &amp; observations</p></div>
        </div>
        <p className="coming-soon">New essays will be published here.</p>
      </section>

      <section className="markets section">
        <div className="section-kicker">
          <span>04</span>
          <p>Markets</p>
        </div>
        <div className="markets-copy">
          <h2>I also build tools for investors.</h2>
          <p>
            I’m fascinated by public markets. I build quantitative tools to
            understand investments ranging from straightforward equities to
            more complex instruments—and make them free for anyone to use.
          </p>
          <div className="link-row">
            <a className="text-link" href="https://github.com/ksanjay" target="_blank" rel="noreferrer">
              Explore the code <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="https://flywylphilo.onrender.com" target="_blank" rel="noreferrer">
              Try the tools <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="books section" id="books">
        <div className="section-kicker">
          <span>05</span>
          <p>Bookshelf</p>
        </div>
        <div>
          <div className="books-heading">
            <h2>Books I return to.</h2>
            <p>A short shelf of ideas that have stayed with me.</p>
          </div>
          <ol className="book-list">
            {books.map(([title, author], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{title}</p>
                <p>{author}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="credentials section">
        <div className="section-kicker">
          <span>06</span>
          <p>Footnotes</p>
        </div>
        <div className="credential-grid">
          <div>
            <span className="credential-number">10</span>
            <p>patents across wireless, internet, and optical technologies</p>
          </div>
          <div>
            <span className="credential-degree">M.A.Sc.</span>
            <p>Systems Design Engineering · University of Waterloo</p>
          </div>
          <div>
            <span className="credential-degree">B.E.</span>
            <p>Electrical Engineering · University of Madras</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Built around curiosity, usefulness, and a good argument.</p>
        <div>
          <a href="https://github.com/ksanjay" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <span>© {new Date().getFullYear()} Sanjay Kalyanasundaram</span>
      </footer>
    </main>
  );
}
