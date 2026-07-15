# ksanjay.net

Personal website for Sanjay Kalyanasundaram: product builder, writer, and investor.

## Local development

Requires Node.js 22 or later and pnpm.

```bash
pnpm install
pnpm dev
```

The local site runs at [http://localhost:3000](http://localhost:3000).

## Production

```bash
pnpm build
pnpm start
```

The production server respects the `PORT` environment variable and is suitable
for deployment as a Render Web Service.

## Content

- Page structure and copy: `app/page.tsx`
- Visual design: `app/globals.css`
- Page and social metadata: `app/layout.tsx`
- Social sharing card: `public/og.png`
