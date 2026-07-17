import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders Sanjay's personal website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Sanjay Kalyanasundaram/);
  assert.match(html, /Read my writings/);
  assert.match(html, /Ideas in progress/);
  assert.match(html, /metallic purple Möbius strip/);
  assert.match(html, /Books I return to/);
  assert.match(html, /github\.com\/ksanjay/);
  const amazonLinks = html.match(/https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]+/g) ?? [];
  assert.equal(new Set(amazonLinks).size, 8);
  assert.match(html, /Influence, New and Expanded/);
  assert.match(html, /Hardcover · 2021/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders the technology and products writing library", async () => {
  const response = await render("/writings/technology-products");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Paper 01/);
  assert.match(html, /The Sovereign Enterprise AI Blueprint/);
  assert.match(html, /More papers will appear here/);
});

test("renders the first full paper", async () => {
  const response = await render(
    "/writings/technology-products/sovereign-enterprise-ai-blueprint",
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /The Triad of Certainty/);
  assert.match(html, /The Bare-Metal \/ Sovereign Stack/);
  assert.match(html, /Iteration Beats Perfection/);
});

test("renders the abstraction of compute as paper two", async () => {
  const response = await render(
    "/writings/technology-products/abstraction-of-compute",
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Paper 02/);
  assert.match(html, /The Abstraction of Compute/);
  assert.match(html, /Agentic Orchestration Owns the Last Mile/);
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0] ?? "";
  assert.doesNotMatch(article, /—/);
});

test("renders the markets and investing paper library", async () => {
  const response = await render("/writings/markets-investing");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Paper 01/);
  assert.match(html, /AI Compute Infrastructure/);
  assert.match(html, /More papers will appear here/);
});

test("renders the neocloud investment memo with real equations", async () => {
  const response = await render(
    "/writings/markets-investing/neocloud-inference-era",
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Underwrite the barbell/);
  assert.match(html, /The real aggregator math/);
  assert.match(html, /<math[^>]+display="block"/);
  assert.match(html, /Capital-recovery factor/);
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0] ?? "";
  assert.doesNotMatch(article, /—/);
});
