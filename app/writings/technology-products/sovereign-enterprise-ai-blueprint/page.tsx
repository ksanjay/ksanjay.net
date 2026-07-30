import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Sovereign Enterprise AI Blueprint — Sanjay Kalyanasundaram",
  description:
    "A practitioner’s guide to reclaiming certainty with open-weight models and open-source enterprise AI stacks.",
};

const workflows = [
  {
    label: "New workflows",
    title: "Building Net-New Capabilities",
    detail:
      "Autonomous agentic SOC analysts that can triage, investigate, and remediate Level 1 security alerts without human intervention.",
  },
  {
    label: "Enhancing existing workflows",
    title: "Upgrading Legacy Systems",
    detail:
      "Putting a RAG layer over decades of proprietary legal contracts to turn a three-week discovery process into a sub-second vector search.",
  },
  {
    label: "Cutting out useless workflows",
    title: "Eradicating the ‘Glue’ Work",
    detail:
      "Using structured JSON outputs from LLMs to automatically map and route data between siloed internal systems, entirely cutting out manual data entry.",
  },
  {
    label: "Cross-system orchestration",
    title: "Automating Multi-Step Processes",
    detail:
      "An AI agent retrieves performance evaluations from HRM, cross-references budget in ERP, and updates territories in CRM—replacing manual coordination across silos.",
  },
];

const certainties = [
  {
    title: "Cost Certainty",
    detail:
      "Public API costs scale non-linearly with usage. Accurate budgeting is impossible when a sudden spike in user adoption, or a poorly optimized prompt loop in an autonomous agent, can result in tens of thousands of dollars in overages overnight.",
    emphasis: "You need fixed infrastructure costs, not variable token metering.",
  },
  {
    title: "Workflow Certainty (Model Drift)",
    detail:
      "When a provider silently updates a proprietary model, its behavior changes. Prompts that reliably output strict JSON for ETL pipelines might suddenly include conversational filler, breaking downstream systems.",
    emphasis:
      "You need immutable model weights that change only when your engineering team explicitly pushes an update.",
  },
  {
    title: "Data Certainty & Competitive Advantage",
    detail:
      "This is often the area most heavily scrutinized by enterprise risk and compliance teams. When proprietary data leaves the corporate perimeter, valid concerns arise around security, sovereignty, and commoditization.",
    emphasis: "Your data and specialized processes must remain under your control.",
  },
];

const architectureA = [
  "Agent & workflow orchestration · LangGraph",
  "Model serving · vLLM / TensorRT-LLM",
  "Enterprise data & vectors · Milvus",
  "Distributed orchestration · Kubernetes",
  "Bare-metal GPU fabric · InfiniBand / RoCEv2",
];

const architectureB = [
  "Agent & workflow orchestration · LangGraph",
  "Model serving · vLLM / TensorRT-LLM",
  "Enterprise data & vectors · Milvus",
  "Managed Kubernetes · EKS / GKE / Azure Arc",
  "Cloud GPU infrastructure · AWS / GCP / Azure",
];

function ArchitectureDiagram({ layers }: { layers: string[] }) {
  return (
    <div className="architecture-diagram" aria-label="Architecture stack">
      {layers.map((layer, index) => (
        <div key={layer}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{layer}</p>
        </div>
      ))}
    </div>
  );
}

export default function SovereignEnterpriseAIBlueprint() {
  return (
    <main className="paper-page" id="main-content">
      <header className="paper-site-header">
        <Link className="wordmark" href="/" aria-label="Sanjay Kalyanasundaram, home">
          <span>SK</span>
          <small>Sanjay Kalyanasundaram</small>
        </Link>
        <div>
          <Link href="/writings/technology-products">Technology &amp; products</Link>
          <Link href="/">Home</Link>
        </div>
      </header>

      <header className="paper-cover ruled">
        <p className="paper-number">Paper 01 · Practitioner’s Guide · Enterprise AI</p>
        <h1>The Sovereign Enterprise AI Blueprint</h1>
        <p className="paper-subtitle">
          Reclaiming Certainty with Open Weight and Open Source Stacks
        </p>
        <div className="paper-byline">
          <span>Sanjay Kalyanasundaram</span>
          <time dateTime="2026-06-19">June 19, 2026</time>
        </div>
      </header>

      <article className="paper-body">
        <nav className="paper-toc" aria-label="Table of contents">
          <p>Contents</p>
          <ol>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#triad">The Triad of Certainty</a></li>
            <li><a href="#open-source">The Open Source Reality Check</a></li>
            <li><a href="#architectures">The Reference Architectures</a></li>
            <li><a href="#architecture-a">Architecture A — Sovereign Stack</a></li>
            <li><a href="#architecture-b">Architecture B — Hybrid Stack</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ol>
        </nav>

        <section className="paper-section" id="introduction">
          <p className="paper-section-label">Introduction</p>
          <p>
            Engineering teams at Fortune 500 companies are no longer just
            experimenting with AI; they are expected to run it in production.
            But as we move from sandbox environments to core business systems,
            the limits of API-driven, closed-model AI architectures are becoming
            painfully clear.
          </p>
          <p>We are seeing enterprise AI investments harden around three specific vectors:</p>
          <div className="paper-card-grid workflow-grid">
            {workflows.map((workflow) => (
              <div className="paper-info-card" key={workflow.label}>
                <span>{workflow.label}</span>
                <h3>{workflow.title}</h3>
                <p>{workflow.detail}</p>
              </div>
            ))}
          </div>
          <p>
            However, scaling these workflows hits a massive wall if the
            underlying platform strategy is flawed. To succeed in production,
            engineering and business leaders need absolute certainty in three
            areas: <strong>Cost, Workflow Outcomes, and Data.</strong>
          </p>
        </section>

        <section className="paper-section" id="triad">
          <p className="paper-section-label">Core challenge</p>
          <h2>The Triad of Certainty: Why Pure API-Driven AI is a Trap</h2>
          <p>
            Choosing to depend on proprietary model providers such as Google,
            Anthropic, or OpenAI via public APIs means relinquishing authority
            over your platform’s three most vital elements. This trade-off is
            typically made under the premise that it offers a faster and less
            complex path to deployment.
          </p>
          <div className="paper-card-grid certainty-grid">
            {certainties.map((certainty, index) => (
              <div className="paper-info-card" key={certainty.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{certainty.title}</h3>
                <p>{certainty.detail}</p>
                <p><strong>{certainty.emphasis}</strong></p>
              </div>
            ))}
          </div>
          <h3>Three Main Concerns When Corporate Data Leaves the Secure Perimeter</h3>
          <ul className="paper-concerns">
            <li>
              <strong>Security Lockdown.</strong> Sensitive information like code
              or financial records can easily end up in public tools, forcing
              security teams to impose strict lockdowns that impede productivity.
            </li>
            <li>
              <strong>Data Sovereignty.</strong> Organizations worry their private
              customer interactions could be used to train public models, eroding
              the uniqueness of their proprietary datasets.
            </li>
            <li>
              <strong>Commoditization Risk.</strong> If unique workflows and
              proprietary data rely entirely on external APIs, companies lose
              their competitive edge.
            </li>
          </ul>
        </section>

        <section className="paper-section" id="open-source">
          <p className="paper-section-label">The solution</p>
          <h2>The Open Source Reality Check</h2>
          <div className="paper-highlight">
            <p>
              The solution to the Triad of Certainty is an <strong>Open-Weights
              and Open-Source Stack</strong>. By running models like NVIDIA’s
              Nemotron 3 Ultra (550B), DeepSeek-V3, or Llama 3 on infrastructure
              you control, you pay a fixed compute cost, lock in model versions,
              and keep your data inside your VPC.
            </p>
            <p>
              We acknowledge that the open-weights model world has been a moving
              target. Our premise is that we are now at a moment where the
              situation is settling—just enough to build a flexible sovereign
              architecture.
            </p>
          </div>
          <blockquote>
            <strong>But there is a catch:</strong> building this stack from
            scratch is daunting. Wiring Kubernetes for distributed multi-node
            GPU inference, configuring InfiniBand networks for cross-node token
            routing in MoE models, and managing KV-cache memory pools via vLLM
            or TensorRT-LLM is hard engineering. The upfront CapEx—or bare-metal
            cloud commitment—is high.
          </blockquote>
          <p>
            To allay these fears, engineering teams need to stop reinventing the
            wheel. We must rely on standardized, “ready-to-go” reference
            architectures.
          </p>
        </section>

        <section className="paper-section" id="architectures">
          <p className="paper-section-label">Implementation</p>
          <h2>The Reference Architectures</h2>
          <p>
            By adopting a blueprint that is iterable, you remove infrastructure
            guesswork and buy the ability to adapt rapidly. Because you control
            the stack, you can deploy a “good enough” RAG pipeline on Day 1 and
            refine it without waiting for compliance teams to audit a new SaaS
            vendor’s data policy.
          </p>
          <p>
            Below are two dominant architectural blueprints for enterprise
            deployment, tailored for practitioner implementation.
          </p>
        </section>

        <section className="paper-architecture" id="architecture-a">
          <div className="paper-architecture-heading">
            <span>Architecture A</span>
            <h2>The Bare-Metal / Sovereign Stack</h2>
            <p>
              Best for massive open-weights models (550B+), maximum throughput,
              and strict data isolation.
            </p>
          </div>
          <ArchitectureDiagram layers={architectureA} />
          <div className="paper-architecture-copy">
            <p>
              This stack relies on renting bare-metal GPU clusters—for example,
              CoreWeave or Lambda—or purchasing on-premise hardware. It removes
              hypervisor overhead, allowing direct access to the networking
              fabric (InfiniBand/RoCEv2), which is mandatory for sharding massive
              models across multiple physical servers.
            </p>
            <p>
              While the two architectures can be used interchangeably for most
              enterprise use cases, the bare-metal model offers a unique
              advantage when a company wants to use proprietary data on
              proprietary models alongside workflow automation. An investment
              bank can use a few layers in the stack to run a pure ML algorithm,
              while IT teams use another portion for a legal workflow. The
              performance, cost control, and proprietary nature lend themselves
              to <strong>higher-value optionality</strong>.
            </p>
          </div>
        </section>

        <section className="paper-architecture" id="architecture-b">
          <div className="paper-architecture-heading">
            <span>Architecture B</span>
            <h2>The Hyperscaler / Hybrid Stack</h2>
            <p>
              Best for teams deeply integrated into AWS, Azure, or GCP that want
              managed Kubernetes while retaining model and data ownership.
            </p>
          </div>
          <ArchitectureDiagram layers={architectureB} />
          <div className="paper-architecture-copy">
            <p>
              This approach leverages established services such as Azure Arc,
              AWS EKS, or Google GKE to bridge the gap between cloud convenience
              and enterprise requirements. A marginal amount of virtualization
              overhead is often offset by significant gains in provisioning
              speed and ease of management.
            </p>
            <p>
              The true value lies in the <strong>clear separation of concerns</strong>.
              By deploying your own open-source stack—Milvus for vector databases,
              vLLM for serving, or LangGraph for orchestration—onto managed
              clusters, you keep your data and model strategy under your own roof.
              This offers the administrative velocity of a public cloud provider
              without sacrificing ownership of the software layer.
            </p>
          </div>
        </section>

        <section className="paper-conclusion" id="conclusion">
          <p className="paper-section-label">Conclusion</p>
          <h2>Iteration Beats Perfection</h2>
          <p>
            AI projects, by their nature, deliver fast results. Engineering teams
            need to internalize this to offset business concerns about multi-year
            “pet projects” with poor outcomes. A RAG pipeline connecting an
            open-weights model to a local vector database of company wikis can be
            prototyped by a single engineer in a weekend. Even if initial accuracy
            is only 70%, that 70% is <strong>immediately measurable</strong>.
          </p>
          <p>
            By using standard open-source reference stacks, you provide financial
            controllers with predictable infrastructure budgets, satisfy the CISO
            by keeping data strictly internal, and give engineering teams the
            environment they need to test, refactor, and iterate toward a dominant,
            proprietary AI advantage.
          </p>
          <p>
            I have not addressed the talent needed to build this stack out. This
            is something I am thinking harder about solving through a platform
            generalization approach without sacrificing enterprise control. I
            will address this in my next write-up.
          </p>
        </section>
      </article>

      <footer className="paper-footer">
        <p>Sanjay Kalyanasundaram · The Sovereign Enterprise AI Blueprint</p>
        <div>
          <Link href="/writings/technology-products">All papers</Link>
          <Link href="/">Home</Link>
        </div>
        <span>June 19, 2026</span>
      </footer>
    </main>
  );
}
