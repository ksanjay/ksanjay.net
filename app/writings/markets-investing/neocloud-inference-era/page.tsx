import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Compute Infrastructure | Sanjay Kalyanasundaram",
  description:
    "Re-underwriting the neocloud thesis for the inference era, with a barbell framework for AI compute infrastructure.",
};

const barbellRows = [
  [
    "A: Contracted infrastructure",
    "LONG",
    "Lowest cost of capital, secured cheap power, and an investment-grade take-or-pay contract book that transfers utilization risk to the customer. This is a spread business built on WACC and power, not a GPU bet.",
  ],
  [
    "B: Demand owners",
    "LONG",
    "Operators that own inference demand at scale and turn a compounding throughput edge into margin per million tokens. Think model labs and inference platforms with distribution, not resellers.",
  ],
  [
    "C: Merchant middle",
    "SHORT / AVOID",
    "Undifferentiated, debt-financed operators underwritten on training-era utilization, plus pure GPU routers with no owned demand and no proprietary throughput. The cleaner asymmetric expression is usually in credit or ABS, not equity.",
  ],
];

const utilizationRows = [
  ["40%", "$5.19", "$5.36", "$5.54"],
  ["60%", "$3.46", "$3.57", "$3.69"],
  ["80%", "$2.59", "$2.68", "$2.77"],
  ["90%", "$2.31", "$2.38", "$2.46"],
];

const latencyRows = [
  ["Latency vs. unloaded", "2.0×", "3.3×", "5.0×", "10×", "20×", "50×"],
];

const throughputRows = [
  ["3,000 tok/s", "$2.40", "$1.89"],
  ["6,000 tok/s", "$1.20", "$0.95"],
  ["10,000 tok/s", "$0.72", "$0.57"],
  ["20,000 tok/s", "$0.36", "$0.28"],
];

const poolingRows = [
  ["Aggregate demand CV", "1.00", "0.50", "0.25", "0.125", "0.06"],
];

const differentiationRows = [
  ["Cost of capital / WACC", "High", "Low", "Mixed"],
  ["Secured power ($/kWh, MW, PUE)", "Spot / weak", "Contracted", "Outsourced"],
  ["Contract book", "Merchant", "IG take-or-pay", "Owns the user"],
  ["Demand ownership", "None", "Indirect", "Direct"],
  ["Throughput / software edge", "Off-the-shelf", "Bundled", "Compounding"],
  ["Chip generation and residual position", "Aging", "Managed", "Abstracted"],
  ["Lease-adjusted leverage vs. asset life", "Mismatched", "Matched", "Light"],
  ["Verdict", "Dies or refinances into a wall", "Wins as a spread business", "Wins as a margin business"],
];

const catalystRows = [
  [
    "Power becomes the binding constraint; secured-MW operators re-rate.",
    "The first GPU-backed ABS or credit event, or a covenant breach in the merchant cohort.",
    "A new architecture resets performance per dollar so quickly that even contracted infrastructure is stranded. In that case, power stops being the moat.",
  ],
  [
    "Inference volume scales and SLA-priced backlog extends duration.",
    "The one-year H100 contract price rolls over as Blackwell and later supply arrives.",
    "Throughput software stops improving and the demand-owner edge becomes a commodity.",
  ],
  [
    "Demand owners turn throughput gains into wider margin per million tokens.",
    "Spot oversupply pushes merchant utilization below the roughly 70% ROIC line.",
    "Take-or-pay contracts prove unenforceable through mass customer defaults, breaking the contracted-infrastructure thesis.",
  ],
];

function DataTable({
  headers,
  rows,
  label,
}: {
  headers: string[];
  rows: string[][];
  label: string;
}) {
  return (
    <div className="memo-table-wrap">
      <table aria-label={label}>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${label}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EquationCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure className="equation-card">
      <figcaption>{label}</figcaption>
      {children}
    </figure>
  );
}

function CapitalRecoveryEquation() {
  return (
    <math display="block" aria-label="Capital recovery factor equals r times one plus r to the power L, divided by one plus r to the power L minus one">
      <mrow>
        <mi>CRF</mi><mo>=</mo>
        <mfrac>
          <mrow><mi>r</mi><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>)</mo></mrow><mi>L</mi></msup></mrow>
          <mrow><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>)</mo></mrow><mi>L</mi></msup><mo>−</mo><mn>1</mn></mrow>
        </mfrac>
      </mrow>
    </math>
  );
}

function QueueEquation() {
  return (
    <math display="block" aria-label="Mean queue time equals one over mu divided by one minus rho">
      <mrow>
        <mi>W</mi><mo>=</mo>
        <mfrac><mfrac><mn>1</mn><mi>μ</mi></mfrac><mrow><mn>1</mn><mo>−</mo><mi>ρ</mi></mrow></mfrac>
        <mo>=</mo>
        <mfrac><mn>1</mn><mrow><mi>μ</mi><mo>(</mo><mn>1</mn><mo>−</mo><mi>ρ</mi><mo>)</mo></mrow></mfrac>
      </mrow>
    </math>
  );
}

function VarianceEquation() {
  return (
    <math display="block" aria-label="Coefficient of variation of pooled demand equals the coefficient of variation of one stream divided by the square root of N">
      <mrow>
        <mi>CV</mi><mo>(</mo><msub><mi>Σ</mi><mi>N</mi></msub><mo>)</mo><mo>=</mo>
        <mfrac><msub><mi>CV</mi><mn>1</mn></msub><msqrt><mi>N</mi></msqrt></mfrac>
      </mrow>
    </math>
  );
}

function UnitCostEquation() {
  return (
    <math display="block" aria-label="Dollars per million tokens equals amortized node cost per hour divided by output tokens per second times 3600 divided by ten to the sixth">
      <mrow>
        <mtext>$/Mtok</mtext><mo>=</mo>
        <mfrac>
          <msub><mi>c</mi><mtext>node/hr</mtext></msub>
          <mrow><mi>q</mi><mo>×</mo><mn>3600</mn><mo>/</mo><msup><mn>10</mn><mn>6</mn></msup></mrow>
        </mfrac>
      </mrow>
    </math>
  );
}

export default function NeocloudInferenceEra() {
  return (
    <main className="paper-page market-paper" id="main-content">
      <header className="paper-site-header">
        <Link className="wordmark" href="/" aria-label="Sanjay Kalyanasundaram, home">
          <span>SK</span>
          <small>Sanjay Kalyanasundaram</small>
        </Link>
        <div>
          <Link href="/writings/markets-investing">Markets &amp; investing</Link>
          <Link href="/">Home</Link>
        </div>
      </header>

      <header className="paper-cover memo-cover">
        <p className="paper-number">Markets &amp; Investing · Paper 01 · Independent research</p>
        <h1>AI Compute Infrastructure</h1>
        <p className="paper-subtitle">
          Re-underwriting the Neocloud Thesis for the Inference Era
        </p>
        <p className="memo-deck">
          The bear case on leveraged neoclouds is right. The fashionable
          rebuttal, go asset-light and broker spot GPUs, is also wrong.
          Underwrite the barbell.
        </p>
        <div className="paper-byline">
          <span>Sanjay Kalyanasundaram</span>
          <time dateTime="2026-06">June 2026</time>
          <span>12–36 month horizon</span>
        </div>
        <p className="memo-disclaimer">
          Independent research. Not investment advice. The unit-economic
          exhibits are first-principles models calibrated to mid-2026 market
          anchors. They illustrate the mechanics, not the valuation of any one issuer.
        </p>
      </header>

      <article className="paper-body investment-memo">
        <section className="memo-section" id="recommendation">
          <p className="paper-section-label">01 · Recommendation</p>
          <h2>Underwrite the barbell</h2>
          <p>
            The 2023–25 trade was straightforward: borrow against NVIDIA
            allocation and rent H100 hours at gross margins above 60%. That
            trade is over. The fashionable counter is to go asset-light and
            arbitrage other people’s idle GPUs. It sounds clever, but it
            rebuilds the same commodity one layer higher.
          </p>
          <p>
            The packing software is open source. The broker owns no end demand.
            Worse, it buys capacity on commitment and sells it on demand, so it
            carries the basis risk. Durable economic profit sits at the two ends
            of the barbell. The middle gets repriced to its cost of capital.
          </p>
          <DataTable
            label="Neocloud investment barbell"
            headers={["Leg", "Position", "What we are underwriting"]}
            rows={barbellRows}
          />
          <aside className="memo-callout">
            <strong>New capital:</strong> Do not fund a company whose main use of
            proceeds is putting GPUs on its balance sheet. Do not fund a pure
            routing layer either. Fund Leg A or Leg B, or pass.
          </aside>
        </section>

        <section className="memo-section" id="variant-perception">
          <p className="paper-section-label">02 · Variant perception</p>
          <h2>Both sides are using the wrong unit</h2>
          <div className="memo-view-grid">
            <div>
              <span>Consensus bull</span>
              <p>Compute demand is insatiable, utilization stays high, and neoclouds become the cloud incumbents of the AI era.</p>
            </div>
            <div>
              <span>Consensus bear</span>
              <p>Inference is bursty, utilization falls to roughly 30%, payback stretches to 18 years, and leveraged operators default.</p>
            </div>
          </div>
          <p>
            Both views miss the unit of analysis. The right unit is not dollars
            per GPU-hour. It is gross profit per million tokens delivered at the
            required latency SLA. Three variables set that number: cost of
            capital, model throughput, and the statistics of aggregated demand.
          </p>
          <p>
            Hardware ownership is necessary infrastructure, but it is not where
            durable economic profit accumulates. The bear is directionally right
            that utilization is the kill switch. The mechanism, however, is
            ROIC below WACC compounded by a financing-duration mismatch, not a
            headline 18-year payback calculation.
          </p>
        </section>

        <section className="memo-section" id="unit-economics">
          <p className="paper-section-label">03 · Principle I</p>
          <h2>The unit is $/Mtok, not $/GPU-hour</h2>
          <p>
            Start with the cost of delivering compute, not the rent. Amortize
            node capital using a capital-recovery factor, add fully loaded
            operating expense, and divide by the hours you actually sell.
          </p>
          <EquationCard label="Capital-recovery factor">
            <CapitalRecoveryEquation />
          </EquationCard>
          <p>
            For an eight-GPU node costing $350,000, the table below is the
            breakeven rent per GPU-hour.
          </p>
          <DataTable
            label="Breakeven GPU-hour rent by utilization and WACC"
            headers={["Sustained utilization", "WACC 10%", "WACC 12%", "WACC 14%"]}
            rows={utilizationRows}
          />
          <p className="memo-note">
            <strong>Assumptions:</strong> four-year economic life and $4 per
            node-hour of loaded operating expense. The one-year H100 contract
            cleared near $2.35 per GPU-hour in spring 2026, roughly 40% above
            the October 2025 low near $1.70. Spot averaged about $3.17, with a
            long tail toward $1.
          </p>
          <p>
            Read this as a margin map, not a payback clock. At a four-year life
            and 12% WACC, the node needs roughly 80% utilization just to break
            even against the one-year contract strip. Below about 70%, it is
            underwater on a fully loaded basis at any plausible price.
          </p>
          <p>
            ROIC falls below WACC much earlier than the nominal payback figure
            suggests. On cash-on-cost, a node at the $2.35 contract price earns
            about 9% at 40% utilization, 18% at 60%, and 28% at 80%, before the
            cost of replacing the asset.
          </p>

          <h3>The real default mechanism is a duration mismatch</h3>
          <p>
            A headline payback number compared with accounting depreciation
            mixes two unrelated clocks. A leveraged operator defaults because
            three durations do not match: depreciation booked over roughly six
            years, an economic frontier life of about two to three years, and
            debt tenors of about three to four years on GPU-collateralized facilities.
          </p>
          <p>
            Every such loan assumes residual collateral value and sustained
            utilization. If a new architecture displaces the asset before the
            loan amortizes, the operator must refinance a depreciated,
            lower-utilized collateral base into a tighter market. That is a
            balance-sheet event, not a per-node event. It is also why the short
            often expresses better in the merchant cohort’s credit or ABS stack.
          </p>
        </section>

        <section className="memo-section" id="physics-of-inference">
          <p className="paper-section-label">04 · Principle II</p>
          <h2>The physics of inference</h2>
          <h3>The latency tax</h3>
          <p>
            Model a server as an M/M/1 queue at offered load ρ. Mean time in the
            system is service time multiplied by 1/(1−ρ). The curve becomes
            unforgiving as the server approaches saturation.
          </p>
          <EquationCard label="Mean time in an M/M/1 queue">
            <QueueEquation />
          </EquationCard>
          <DataTable
            label="Queue latency by offered load"
            headers={["Offered load ρ", "0.50", "0.70", "0.80", "0.90", "0.95", "0.98"]}
            rows={latencyRows}
          />
          <p>
            Training is a throughput job with no interactive SLA, so it can run
            close to ρ = 1. That is why the original 80% to 90% utilization
            assumption made sense. Interactive inference has a p99 SLA on
            time-to-first-token and inter-token latency. That creates a hard
            ceiling, ρ*, well below 1.
          </p>
          <p>
            Observed utilization near 30% is therefore not automatically bad
            management. Much of it can be rational SLA reserve. The answer is
            not to pack the server to 90%. The answer is to improve throughput
            and smooth demand.
          </p>

          <h3>Throughput is the numerator</h3>
          <p>
            The lever that moves $/Mtok is tokens per second per GPU. Decode is
            memory-bandwidth-bound. At low arithmetic intensity, the operator
            pays for HBM bytes moved per token, not for FLOPs. The gains come
            from sharing weight and KV-cache reads across concurrent sequences.
          </p>
          <ul>
            <li>Continuous batching</li>
            <li>PagedAttention and KV-cache paging</li>
            <li>Disaggregated prefill for compute-bound work and decode for bandwidth-bound work</li>
            <li>Speculative decoding</li>
            <li>FP8 and INT4 quantization</li>
          </ul>
          <EquationCard label="Delivered unit cost">
            <UnitCostEquation />
          </EquationCard>
          <DataTable
            label="Cost per million tokens by throughput and utilization"
            headers={["Aggregate output throughput", "$/Mtok at 60% utilization", "$/Mtok at 80% utilization"]}
            rows={throughputRows}
          />
          <p className="memo-note">
            <strong>Market anchor:</strong> Llama-70B-class output pricing ran
            from about $0.32 to $0.90 per million tokens in 2026. Node cost is
            amortized at 12% WACC over a four-year life.
          </p>
          <p>
            Here is the thesis in one sentence: positive margin exists only
            where throughput is high and utilization at the SLA is high. Both
            are products of software and operations. Neither arrives merely
            because an operator owns the silicon. That is why a capital-heavy
            merchant cannot defend the spread.
          </p>
        </section>

        <section className="memo-section" id="aggregator-math">
          <p className="paper-section-label">05 · Principle III</p>
          <h2>The real aggregator math</h2>
          <p>
            “Pack more onto a GPU” is an intuition, not a mechanism. The
            mechanism is variance pooling. Combine the demand of N uncorrelated,
            bursty tenants and the coefficient of variation falls with the
            square root of N.
          </p>
          <EquationCard label="Variance pooling">
            <VarianceEquation />
          </EquationCard>
          <DataTable
            label="Demand variance by number of pooled tenants"
            headers={["Independent tenants pooled (N)", "1", "4", "16", "64", "256"]}
            rows={poolingRows}
          />
          <p>
            Lower variance means a platform can run at a higher ρ* for the same
            p99 SLA. Utilization rises, latency holds, and $/Mtok falls. This is
            an insurance business: the aggregator sells burst capacity and
            earns the benefit of the law of large numbers.
          </p>
          <p>
            The edge belongs only to whoever pools enough uncorrelated demand.
            That is why an asset-light GPU router is the crowded middle, not the
            toll road.
          </p>
          <ul className="memo-argument-list">
            <li><strong>No throughput moat.</strong> vLLM, SGLang, and TensorRT-LLM are open source. The underlying provider can run the same batching and keep the margin.</li>
            <li><strong>No demand ownership.</strong> A neutral reseller has no proprietary pool of diversified demand, so it reduces no variance the host could not reduce itself.</li>
            <li><strong>Negative convexity.</strong> Buying committed capacity and selling per-token demand leaves the broker short a burst option. It eats the basis when demand fades.</li>
          </ul>
          <p>
            The field is already busy: Together, Fireworks, Baseten, Modal,
            Replicate, Anyscale, and NVIDIA’s Run:ai. Margins are competitive
            and several players are subsidized. A router is a feature factory,
            not a moat.
          </p>
        </section>

        <section className="memo-section" id="differentiation-map">
          <p className="paper-section-label">06 · Differentiation map</p>
          <h2>Who wins and who dies</h2>
          <p>
            Neoclouds are not one homogeneous trade. The dispersion is the
            opportunity. Score an operator on the seven dimensions that set
            $/Mtok and determine survival.
          </p>
          <DataTable
            label="Neocloud differentiation map"
            headers={["Dimension", "Merchant spot, levered (C)", "Contracted infrastructure (A)", "Demand owner (B)"]}
            rows={differentiationRows}
          />
        </section>

        <section className="memo-section" id="recommendation-full">
          <p className="paper-section-label">07 · Recommendation in full</p>
          <h2>Seven questions for any neocloud</h2>
          <ol className="memo-checklist">
            <li>What is the blended cost of capital, and what share of the fleet is financed by GPU-collateralized debt? How do the debt tenors compare with the asset’s economic life?</li>
            <li>What share of revenue is take-or-pay or prepaid? What is the counterparty credit and weighted duration? Merchant spot exposure is the risk; contracted backlog is the asset.</li>
            <li>What is delivered $/Mtok at the SLA, and what throughput in tokens per second per GPU sits behind it? Is the throughput stack proprietary or off-the-shelf?</li>
            <li>What is the secured power position in contracted MW, $/kWh, and PUE? How much is energized rather than merely announced?</li>
            <li>At what ρ* does the SLA bind, and how much diversified, uncorrelated demand is pooled to lift it?</li>
            <li>What secondary market exists for the installed generation, and how does the refresh cadence compare with the depreciation schedule?</li>
            <li>Does the company own demand or rent it? If it rents demand, what stops the supplier from disintermediating it with the same open-source stack?</li>
          </ol>

          <h3>Catalysts and kill criteria</h3>
          <DataTable
            label="Long catalysts, short catalysts, and kill criteria"
            headers={["Long catalysts (A and B)", "Short catalysts (C)", "We are wrong if"]}
            rows={catalystRows}
          />

          <h3>Sizing and expression</h3>
          <p>
            Express Leg A and Leg B long, primarily through the equity or credit
            of operators that clear the checklist. Express Leg C as a short and
            prefer the credit or ABS stack to the equity. The duration mismatch
            is a financing failure, so GPU-collateralized paper from
            undifferentiated merchant operators offers the most convex and
            clearly defined expression.
          </p>
          <p>
            Avoid the middle in new private deployment. A GPU roll-up and a pure
            router are the two financings most likely to be repriced to cost of capital.
          </p>
          <aside className="memo-callout memo-bottom-line">
            <strong>Bottom line:</strong> Fund the toll roads: cheap capital,
            secured power, and contracted demand. Fund the destinations: owners
            of inference demand with a compounding throughput edge. Do not fund
            the dumb pipe or the router that resells it.
          </aside>
        </section>

        <section className="memo-section memo-appendix" id="appendix">
          <p className="paper-section-label">Appendix</p>
          <h2>Models, formulas, and glossary</h2>
          <div className="equation-grid">
            <EquationCard label="Capital recovery">
              <CapitalRecoveryEquation />
            </EquationCard>
            <EquationCard label="Queue latency">
              <QueueEquation />
            </EquationCard>
            <EquationCard label="Variance pooling">
              <VarianceEquation />
            </EquationCard>
            <EquationCard label="Unit cost">
              <UnitCostEquation />
            </EquationCard>
          </div>

          <h3>Base assumptions</h3>
          <p>
            Node cost is $350,000 for eight GPUs. Economic life is four years.
            WACC ranges from 10% to 14%. Fully loaded operating expense is $4
            per node-hour. Energy is calculated from node IT kW × PUE × $/kWh.
            Every exhibit recomputes from these assumptions. Change an input and
            the conclusion moves. That is precisely what the original model missed.
          </p>

          <h3>Glossary</h3>
          <dl className="memo-glossary">
            <div><dt>$/Mtok</dt><dd>Dollars per million tokens delivered.</dd></div>
            <div><dt>TTFT / TPOT</dt><dd>Time-to-first-token and time-per-output-token, the key inference SLAs.</dd></div>
            <div><dt>Continuous batching and PagedAttention</dt><dd>Techniques that raise tokens per second per GPU by sharing weight and KV-cache reads.</dd></div>
            <div><dt>Disaggregated serving</dt><dd>Separating compute-bound prefill from bandwidth-bound decode.</dd></div>
            <div><dt>ρ*</dt><dd>The maximum utilization at which the latency SLA still holds.</dd></div>
            <div><dt>Take-or-pay</dt><dd>A contract that bills reserved capacity regardless of use, shifting utilization risk to the customer.</dd></div>
          </dl>

          <h3>Sources</h3>
          <p className="memo-sources">
            NVIDIA FY2026 results (data-center gross margin near 72% to 75%);
            SemiAnalysis and multi-provider GPU rental indices (H100 near $2.35
            contract and $3.17 spot in 2026); pricepertoken.com and provider
            pages (Llama-70B near $0.32 to $0.90 per million tokens); CNBC,
            Quartz, and Seeking Alpha reporting on GPU depreciation life and
            GPU-collateralized debt in 2025 and 2026.
          </p>
        </section>
      </article>

      <footer className="paper-footer">
        <p>Sanjay Kalyanasundaram · AI Compute Infrastructure</p>
        <div>
          <Link href="/writings/markets-investing">All market papers</Link>
          <Link href="/">Home</Link>
        </div>
        <span>June 2026</span>
      </footer>
    </main>
  );
}
