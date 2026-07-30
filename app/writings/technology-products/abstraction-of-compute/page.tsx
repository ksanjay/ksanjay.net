import type { Metadata } from "next";
import Link from "next/link";
import articleMarkdown from "../../../../drafts/the-abstraction-of-compute.md?raw";

export const metadata: Metadata = {
  title: "The Abstraction of Compute | Sanjay Kalyanasundaram",
  description:
    "Value migration, agentic orchestration, and the future of enterprise AI.",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer">$1</a>',
    );
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function markdownToHtml(markdown: string) {
  const lines = markdown.split("\n").slice(4);
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      const heading = line.slice(3);
      html.push(`<h2 id="${slug(heading)}">${inlineMarkdown(heading)}</h2>`);
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      const heading = line.slice(4);
      html.push(`<h3 id="${slug(heading)}">${inlineMarkdown(heading)}</h3>`);
      index += 1;
      continue;
    }

    if (
      line.startsWith("|") &&
      index + 1 < lines.length &&
      /^\|[\s:|-]+\|$/.test(lines[index + 1].trim())
    ) {
      const rows: string[][] = [];
      const headers = line
        .slice(1, -1)
        .split("|")
        .map((cell) => cell.trim());
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(
          lines[index]
            .trim()
            .slice(1, -1)
            .split("|")
            .map((cell) => cell.trim()),
        );
        index += 1;
      }
      html.push(
        `<div class="paper-table-wrap"><table><thead><tr>${headers
          .map((header) => `<th>${inlineMarkdown(header)}</th>`)
          .join("")}</tr></thead><tbody>${rows
          .map(
            (row) =>
              `<tr>${row
                .map((cell) => `<td>${inlineMarkdown(cell)}</td>`)
                .join("")}</tr>`,
          )
          .join("")}</tbody></table></div>`,
      );
      continue;
    }

    if (line.startsWith("* ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("* ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      html.push(
        `<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`,
      );
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\. /.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\. /, ""));
        index += 1;
      }
      html.push(
        `<ol>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`,
      );
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (index < lines.length && lines[index].trim()) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

const articleHtml = markdownToHtml(articleMarkdown);

export default function AbstractionOfCompute() {
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
        <p className="paper-number">Paper 02 · Enterprise AI · Strategy</p>
        <h1>The Abstraction of Compute</h1>
        <p className="paper-subtitle">
          Value Migration, Agentic Orchestration, and the Future of Enterprise AI
        </p>
        <div className="paper-byline">
          <span>Sanjay Kalyanasundaram</span>
          <time dateTime="2026-07-15">July 15, 2026</time>
        </div>
      </header>

      <article
        className="paper-body paper-markdown"
        dangerouslySetInnerHTML={{ __html: articleHtml }}
      />

      <footer className="paper-footer">
        <p>Sanjay Kalyanasundaram · The Abstraction of Compute</p>
        <div>
          <Link href="/writings/technology-products">All papers</Link>
          <Link href="/">Home</Link>
        </div>
        <span>July 15, 2026</span>
      </footer>
    </main>
  );
}
