import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <Link className="wordmark" href="/" aria-label="Sanjay Kalyanasundaram, home">
        <span>SK</span>
        <small>Sanjay Kalyanasundaram</small>
      </Link>
      <div>
        <p className="paper-number">404 · Page not found</p>
        <h1>This page wandered off.</h1>
        <p>
          The idea may have moved, or the address may be incomplete. The
          homepage is the best place to pick up the thread.
        </p>
        <Link className="text-link" href="/">
          Return home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
