# FREYJOSE College Website

Official website for FREYJOSE Technical Training College, built with Next.js App Router.

## Overview

This project contains:

- Public marketing pages for the college
- Academic department pages and course listings
- Admissions process and requirements pages
- FAQ pages by department
- Contact page and newsletter endpoint
- AI assistant endpoint with fallback knowledge responses

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components

## Project Structure

- `app/` route pages, layouts, metadata, and API routes
- `components/` reusable UI sections and shared components
- `components/ui/` Radix-based UI primitives
- `lib/assistant-knowledge.ts` AI assistant knowledge base
- `app/api/assistant/route.ts` assistant API endpoint
- `app/api/newsletter/route.ts` newsletter API endpoint
- `data/newsletter-subscribers.json` local subscriber storage
- `public/images/` static assets

## Prerequisites

- Node.js 20 to 24
- pnpm

## Local Development

1. Install dependencies:

```bash
pnpm install
```

2. Create environment file:

```bash
cp .env.example .env.local
```

3. Run development server:

```bash
pnpm dev
```

4. Open `http://localhost:3000`

## Environment Variables

From `.env.example`:

- `OPENAI_API_KEY` optional, used by the assistant endpoint
- `AI_AGENT_MODEL` optional model name, default fallback is configured in code

If `OPENAI_API_KEY` is not set, the assistant still works using internal fallback knowledge.

## Scripts

- `pnpm dev` start dev server
- `pnpm build` build production app
- `pnpm preview` build with OpenNext and preview in Workers runtime
- `pnpm run deploy` build with OpenNext and deploy to Cloudflare Workers
- `pnpm run upload` build with OpenNext and upload new Worker version
- `pnpm cf-typegen` generate Cloudflare env TypeScript types
- `pnpm start` run production app
- `pnpm lint` run linting

## Cloudflare Deploy Error Fix (Code 10143)

Error seen:

`Service binding 'WORKER_SELF_REFERENCE' references Worker 'freyjosecollege' which was not found.`

This happens when a service binding points to a Worker name that does not exist in your account/environment.

### What was fixed in this repository

- Configured this app for OpenNext + Cloudflare Workers deployment.
- Added Worker entrypoint and assets output in `wrangler.toml` (`.open-next/worker.js`, `.open-next/assets`).
- Added deployment scripts that use `opennextjs-cloudflare` instead of raw `wrangler deploy`.
- Kept `services = []` to prevent invalid self-reference binding failures.

### Required Cloudflare build settings

If you are using Cloudflare Workers Builds, use:

1. Build command: `npx @opennextjs/cloudflare build`
2. Deploy command: `npx @opennextjs/cloudflare deploy`

If you are using package scripts in CI, use:

1. Build and deploy: `pnpm run deploy`
2. Upload only: `pnpm run upload`

Do not use `pnpm deploy` (without `run`) because pnpm treats it as a workspace command and it fails with `ERR_PNPM_CANNOT_DEPLOY`.

Do not use plain `wrangler deploy` directly for this Next.js app.

### What to check in Cloudflare Dashboard

1. Open your Worker or Pages project settings.
2. Go to Bindings.
3. Remove `WORKER_SELF_REFERENCE` if your app does not need it.
4. If you need it, set it to the exact deployed Worker script name from `wrangler.toml`.

Important: the service name must match exactly (including hyphens, casing, and environment suffixes).

### If deployment still fails with generic Wrangler output

1. Verify your Cloudflare project uses the OpenNext commands listed above.
2. Remove old dashboard-level bindings that are not in your repo config.
3. Confirm your CI Node version is in the supported range (20 to 24).
4. Re-run deploy after clearing the stale `WORKER_SELF_REFERENCE` binding.

### Node runtime compatibility

This project declares `"node": ">=20 <25"` in `package.json`. Running deploy on Node 25 can fail with native module errors (for example `@ast-grep/napi` binding load failures).

## Notes

- `next.config.mjs` currently sets `typescript.ignoreBuildErrors = true`. Consider enabling strict build checks for production quality.
- Newsletter subscribers are written to a local JSON file. For production scale, use a database or external email platform.
