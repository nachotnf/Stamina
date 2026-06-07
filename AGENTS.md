# AGENTS.md

## Project

This is the working Codex copy of the Stamina public website.

Production domain:

- `staminaentrenamiento.com`

Detected stack:

- Vite 5
- React 18
- Tailwind CSS
- Sanity CMS client
- Vercel deployment config

The Sanity Studio/CMS appears to live separately in:

- `/Users/nachofernandezcabrera/stamina-studio`

## Commands

Use these commands from this directory:

```bash
npm run dev
npm run build
npm run preview
```

Run `npm run build` before considering website code changes complete.

## Repository Notes

This folder was copied from `/Users/nachofernandezcabrera/stamina-web` for Codex work.

Excluded generated folders:

- `node_modules/`
- `dist/`
- `.vercel/`

If dependencies are missing, install them with:

```bash
npm install
```

## Environment And Secrets

This project has local environment configuration. Do not print, commit, or expose environment values.

Never commit:

- `.env`
- `.env.local`
- deployment tokens
- Sanity write tokens
- API keys

Only expose variables in browser code when they are intentionally public.

## Editing Guidelines

- Keep edits focused on the requested website change.
- Preserve the current component structure in `src/components/`.
- Use Tailwind CSS for visual changes.
- Keep Spanish copy natural, direct, and appropriate for a training center.
- Prefer accessible buttons, links, labels, and alt text.
- Do not edit generated files in `dist/`.
- Do not edit installed dependencies in `node_modules/`.

## Verification

For visual/site changes:

1. Run `npm run build`.
2. If useful, run `npm run dev` and check the local page in the browser.
3. Report any issue that prevents verification.

For content that comes from Sanity, check whether the change belongs in the Sanity Studio instead of the React website.
