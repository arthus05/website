# Arthus Vinícius — personal website

A minimal, single-page portfolio built with Next.js (Pages Router), React and TypeScript.

## Local development

Use Node.js LTS and pnpm:

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

```powershell
pnpm build # Production build, linting and TypeScript checks
pnpm start # Serve the production build
```

## Editing the portfolio

- `src/content/portfolio.ts`: professional links, selected projects, contribution details and work history.
- `src/templates/home/containers/Hero/Hero.tsx`: introduction.
- `src/templates/home/containers/Background/Background.tsx`: background, education and languages.
- `src/layout/Default/Default.tsx`: page metadata and contact footer.
- `src/styles/globals.css`: layout, responsive styles and light/dark theme colors.

Project details use native HTML disclosures and work without client-side JavaScript. Theme selection follows the system preference initially and remembers a manual choice when browser storage is available.

Public project links provide company/product context. Employer source code and private career evidence are not included. The website has no article-publishing system.
