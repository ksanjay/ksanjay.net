# The Abstraction of Compute

## Value Migration, Agentic Orchestration, and the Future of Enterprise AI

We are spending far too much time talking about tokens.

Input tokens. Output tokens. Cost per million tokens. Routing strategies designed to shave fractions of a cent from a prompt. Entire dashboards now exist to tell us that a chatbot had a long afternoon.

This makes sense for the moment. AI compute is expensive, capacity is still being built, and buyers want to know where the money is going. But I do not think tokens will remain the unit that enterprise customers care about.

The token is a production unit, not a business outcome.

Customers do not want tokens. They want an invoice processed, a security alert resolved, a contract reviewed, a customer retained, or a shipment rerouted before it becomes an apology email. Eventually, AI pricing will reflect that reality. The machinery underneath will still matter enormously, but most buyers will stop seeing it.

We have watched this movie before. The props were different, but the plot was remarkably similar.

## First We Meter Everything

New infrastructure starts scarce and expensive. Providers meter the smallest useful unit because every unit matters.

Telephone companies charged by distance and time. Internet providers charged by the hour. Early cloud users thought carefully about server capacity because idle hardware was expensive and procurement involved actual humans carrying clipboards.

Then capacity expands. Technology improves. Competition arrives. The metered unit becomes cheaper, and the customer gets tired of thinking about it. Pricing moves toward something simpler.

### Long Distance Calling

Long distance telephone service was once a premium product. A call could be priced by distance, time of day, duration, and operator involvement. The tariff manuals were thick enough to qualify as gym equipment.

Switching improved. Voice became digital. Fiber expanded capacity. Competition pushed rates down. By the time mobile networks and VoIP became widespread, charging separately for every voice minute felt increasingly absurd.

In 2012, major US carriers started bundling unlimited voice and text into shared data plans. They stopped monetizing the thing that had become abundant and shifted attention to the thing that was still scarce.

Today, almost nobody pauses before calling another state to calculate the economic consequences. Voice did not disappear. The meter did.

### AOL and the Internet Buffet

The commercial internet went through the same transition.

In the early 1990s, dial-up providers charged by the hour. AOL offered a small bundle of access time, followed by overage fees. Every online session came with a meter quietly running in the background.

Then AOL launched unlimited access for $19.95 a month in 1996. Usage exploded almost immediately. The network struggled, customers heard busy signals, and lawsuits followed. AOL had effectively opened an internet buffet and discovered that people were hungry.

The rollout was messy, but the pricing idea won. Customers preferred a predictable bill even when a metered plan might have cost them less. Simplicity removed friction, and removing friction changed behavior.

### SaaS Hid the Server Room

Enterprise software completed another version of the same journey.

Before SaaS, buyers had to think about physical servers, database capacity, storage, networking, licenses, maintenance, and the mysterious person who knew why the production machine could never be rebooted on a Tuesday.

Salesforce and Workday did not eliminate compute. They hid it behind a subscription. Customers paid for access to a business capability, usually by seat or usage tier. They did not ask how many CPU cycles supported a sales forecast.

The pattern is consistent:

| Era | What was scarce | What was metered | What buyers eventually purchased |
| --- | --- | --- | --- |
| Telephony | Copper and trunk capacity | Distance and minutes | Unlimited voice plans |
| Dial-up internet | Modem capacity | Hours online | Flat monthly access |
| Enterprise software | Servers and storage | Hardware and licenses | SaaS subscriptions |
| Enterprise AI | GPU inference | Tokens | Completed work and business outcomes |

AI is still in the metering phase. We are counting tokens because tokens are expensive enough to count. That will change.

## Cheaper Compute Will Not Mean Less Compute

There is an obvious objection to this argument: cloud compute became cheaper, yet enterprise cloud bills did not vanish. In many companies, they became large enough to require a new profession called FinOps, which is a polite way of saying, “Can someone please explain this AWS invoice?”

That objection is correct. It just does not invalidate the thesis.

The Jevons Paradox explains why. When technology makes a resource cheaper and more efficient, total consumption can rise instead of fall. James Watt’s steam engine used coal more efficiently, but that efficiency made steam power useful in more places. Britain burned more coal, not less.

AI compute is following the same path.

The cost of producing a million tokens has fallen dramatically. At the same time, AI spending has surged. Cheap tokens make new workflows economically viable. Reasoning models also use more tokens because they reflect, validate, call tools, retry, and sometimes think about thinking. An agent reconciling a financial account can consume many times the tokens required for a simple summary.

So two things can be true at once:

1. The unit cost of inference will keep falling.
2. Total demand for inference will keep rising.

The world will use vastly more compute. Enterprises may continue to spend heavily on it. Hyperscalers will continue pouring money into GPUs, custom silicon, memory, networking, and power. Data centers are not about to become a quaint hobby.

But the enterprise buyer will not necessarily transact in tokens.

A Salesforce customer does not inspect the EC2 instances beneath a CRM subscription. In the same way, the future buyer of an AI service will care about the reliability, speed, and cost of a completed workflow. Compute remains the factory. The customer buys what leaves the loading dock.

## Value Moves Up the Stack

If tokens fade from the buyer’s view, where does the value go?

Up.

Adrian Slywotzky described value migration as the movement of profit from business models that no longer match customer priorities toward models that do. In technology, value often moves from standardized hardware into the software that makes the hardware useful.

IBM dominated an era built around proprietary computing hardware. As the personal computer became standardized, value shifted toward operating systems, processors, and applications. VisiCalc helped turn the PC from a hobbyist machine into a business tool. AutoCAD did something similar for design.

Apple used the iPhone to create a services ecosystem. Tesla made software and over-the-air updates central to the value of a car. Medical device companies are moving from one-time hardware sales toward recurring data and software platforms.

AI infrastructure is currently absorbing enormous amounts of capital and market value. That is logical. The industry needs more chips, more memory, more power, and more data centers.

But once high-quality inference becomes widely available, access to compute will stop being the main differentiator. The interesting question will no longer be, “Can the model generate an answer?” It will be, “Can the system do useful work inside my company without causing an audit, a lawsuit, or a small fire?”

That is a software problem.

The biggest barrier to enterprise AI is not intelligence in the abstract. It is applying probabilistic models to messy, deterministic business processes. Corporate workflows cross old systems, inconsistent data, compliance rules, approval chains, and exceptions invented by someone who retired in 2009.

The companies that solve that last mile will capture the value.

## The Consulting Tax

Enterprise software has never been as plug-and-play as the brochures suggest.

For decades, companies have spent several dollars on implementation, integration, customization, and consulting for every dollar of enterprise software they bought. The product was often the small planet at the center of a very large services solar system.

AI has made this problem worse.

Large language models are probabilistic. They hallucinate. They regress. They respond differently when context changes. They can produce a brilliant result on Tuesday and behave like an overconfident intern on Wednesday.

Putting these systems into production requires careful integration, evaluation, security, governance, workflow design, and constant tuning. That has created demand for Forward Deployed Engineers, or FDEs.

The FDE model is useful. It puts strong engineers directly inside the customer’s environment. They connect models to legacy systems, build evaluation frameworks, understand the customer’s data, and turn demonstrations into production workflows.

This is better than consultants who arrive with forty-seven slides and leave with your calendar blocked for six months.

But FDEs are still a temporary answer.

If every deployment requires elite engineers embedded at every customer, the product is not finished. It may be valuable, but it does not scale like software. It scales like services, with corresponding pressure on margins and delivery capacity.

There is another problem. Traditional SaaS expands by selling more seats. AI can reduce the number of people required to do the work. A product that automates ten jobs should not depend on selling ten user licenses. The pricing model fights the value proposition.

The next great enterprise AI companies will not sell access to a clever tool and then charge millions to make it useful. They will sell completed work.

Some companies are already moving in this direction. AI-driven migration platforms are compressing ERP implementations that once took months or years. The aim is not to make consultants type faster. It is to turn the implementation process itself into software.

That is the shift that matters: from humans orchestrating software to software orchestrating outcomes.

## Agentic Orchestration Owns the Last Mile

Early enterprise AI systems were mostly reactive. A user asked a question. A model produced text. If something needed to happen in another system, a person took it from there.

Agentic systems change the job from answering to acting.

An agent pursues a defined goal, chooses among available tools, works within guardrails, and coordinates actions across systems. But a single agent is rarely enough for a serious enterprise workflow.

Consider a supply chain disruption. One agent monitors telematics for a delay. Another checks alternative carriers and contract rates. A third updates the customer. A control layer manages sequence, permissions, exceptions, and human approvals.

That control layer is agentic orchestration.

It is also where much of the enterprise value will live.

The model can reason, but orchestration turns reasoning into controlled action. It decides which agent acts, what data it can access, which tool it may call, when to ask for approval, how to recover from failure, and how to prove what happened afterward.

This is particularly important in industries where decades of digitization have still left stubborn manual work. Collateral management, KYC onboarding, trade exceptions, claims processing, procurement, and security operations are full of workflows that cross systems and fail in interesting ways.

Interesting failures are entertaining in a lab. In production, they become meetings.

Reliable orchestration is how AI crosses the last mile between a good model and a dependable business outcome.

## MCP Makes Integration Less Painful

Agents cannot do useful work if they cannot reach enterprise systems.

Historically, every connection required a custom API integration. That meant point-to-point code, authentication, data mapping, error handling, and maintenance. Multiply that across dozens of systems and hundreds of workflows, and integration becomes the product whether you intended it or not.

The Model Context Protocol, or MCP, offers a more standard way for agents to discover tools, read approved data, and receive context. Instead of building a bespoke connection for every pairing of model and system, teams can expose tools and resources through a common protocol.

MCP does not eliminate hard integration work. No protocol has ever defeated a badly documented ERP in a single afternoon. But it creates a reusable door into enterprise systems.

That lets the orchestration layer focus on business logic, dependencies, permissions, and outcomes instead of repeatedly rebuilding the plumbing.

## The Enterprise Ontology Becomes the Real Asset

Connectivity alone is not enough. An agent also needs to understand how the company works.

Frontier models know a great deal about the world. They do not know why one customer receives special pricing, which plant can substitute for another, what “approved” means in a particular division, or why a transaction above a certain threshold requires two signatures and a phone call to Linda.

That knowledge lives inside the enterprise. Some of it sits in databases and documents. Much of it lives in relationships, policies, exceptions, workflows, and the heads of experienced employees.

An enterprise ontology makes those concepts and relationships machine-readable. It connects customers, products, contracts, assets, policies, people, and processes. More importantly, an active ontology stays tied to live metadata, lineage, permissions, and governance signals.

This is more useful than a static knowledge graph that becomes historical fiction three days after launch.

When an agent acts, the ontology provides the operating context. It tells the system what an object means, how it relates to other objects, what rules apply, and which actions are permitted. MCP can provide the access path. The ontology supplies the company-specific meaning.

Over time, this ontology becomes a compounding asset. It captures the operational judgment that makes one company different from another. Models will improve and compute will get cheaper. A well-maintained representation of how the enterprise actually works will be much harder to copy.

## Why Open Weights Matter

An active ontology also contains some of the most sensitive information a company owns.

That creates understandable resistance to sending it through a closed model controlled by a third party. The concern is not only data leakage. It is also dependency. A provider can raise prices, change model behavior, deprecate an endpoint, or alter its terms.

For a casual assistant, those risks may be manageable. For a system that understands contracts, operating procedures, customer relationships, financial controls, and privileged communications, the calculation changes.

Open-weight models give enterprises another option.

Models from families such as Llama, Mistral, and DeepSeek can run inside an enterprise-controlled environment. They can be versioned, evaluated, tuned, and governed without exposing the company’s operating context to an external API.

They do not need to win every benchmark. They need to be good enough for the workflow, predictable enough for production, and deployable where the data already lives.

Combined with secure infrastructure, trusted execution environments, and chip-level attestation, open weights let the enterprise retain control of both the model and the ontology. That reduces vendor lock-in and protects the operational knowledge that creates competitive advantage.

The best model is not always the smartest model in isolation. It is the model that can safely and reliably do the job.

## What I Think Happens Next

The token will not disappear from engineering. Teams will still measure latency, throughput, context size, cache efficiency, and inference cost. Providers will still spend extraordinary amounts of money on chips, memory, networking, power, and cooling.

But tokens will fade from the enterprise buyer’s interface.

Customers will increasingly pay for completed work, resolved cases, automated processes, guaranteed service levels, or measurable business outcomes. The raw compute will be packaged inside the product, just as servers are packaged inside SaaS today.

The Jevons Paradox means total compute demand can explode even while token pricing becomes less visible. There is no contradiction. Factories can grow while customers stop buying individual bolts.

Value will move toward the layer that handles the difficult final step: reliable execution inside a real company.

That layer will combine:

* Agentic orchestration that coordinates work and handles failure
* Standard integration protocols such as MCP
* Active ontologies grounded in live enterprise reality
* Open-weight models deployed where control and sovereignty matter
* Pricing tied to work completed rather than compute consumed

The winners will not be the companies with the most impressive token dashboards. They will be the companies whose customers no longer need to think about tokens at all.

That is what abstraction looks like. The machinery becomes more powerful, more expensive, and more complicated. The product becomes simpler.

And if we do it properly, the customer gets an outcome instead of another dashboard.

## Selected Sources and Further Reading

* [The Evolution of Consumer Welfare in the Mobile Wireless Service Industry, CTIA](https://api.ctia.org/wp-content/uploads/2024/01/Mayo-Paper_Final.pdf)
* [AOL Goes Unlimited, This Day in Tech History](https://thisdayintechhistory.com/12/01/aol-goes-unlimited/)
* [Should Flat-Rate Internet Pricing Continue?, IEEE Computer Society](https://www.computer.org/csdl/magazine/it/2000/05/f5048/13rRUB7a1kG)
* [Pricing at the On-Ramp to the Internet, NBER](https://www.nber.org/system/files/chapters/c0878/c0878.pdf)
* [Photons = Tokens: The Physics of AI and the Economics of Knowledge, arXiv](https://arxiv.org/html/2603.06630v1)
* [State of Cloud Costs, Datadog](https://www.datadoghq.com/state-of-cloud-costs/)
* [The Great Value Migration, Accenture](https://www.accenture.com/content/dam/accenture/final/accenture-com/document-4/Accenture-The-Great-Value-Migration.pdf)
* [Why Agentic AI Demands a Forward Deployed Approach, Arthur AI](https://www.arthur.ai/blog/why-agentic-ai-demands-a-forward-deployed-approach)
* [Forward-Deployed Engineers: The Last Mile of the AI Value Chain, TBR](https://tbri.com/special-reports/forward-deployed-engineers-the-last-mile-of-the-ai-value-chain/)
* [AWS Invests $1 Billion to Embed AI Forward Deployed Engineers with Customers, Amazon](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers)
* [Can Agentic AI Solve the Last-Mile Automation Challenge for CIB?, McKinsey](https://www.mckinsey.com/industries/financial-services/our-insights/banking-matters/can-agentic-ai-solve-the-last-mile-automation-challenge-for-cib)
* [Active Ontology: The 2026 Default for Enterprise AI, Atlan](https://atlan.com/know/what-is-active-ontology/)
* [Construct, Align, and Reason: Large Ontology Models for Enterprise Knowledge Management, arXiv](https://arxiv.org/pdf/2602.00029)
* [Legal AI, Activant Research](https://www.activantcapital.com/research/legal-ai/)
* [The Open-Weight Paradox, arXiv](https://arxiv.org/pdf/2604.17413)
