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
  assert.match(html, /Books I return to/);
  assert.match(html, /github\.com\/ksanjay/);
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
