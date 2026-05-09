# Heaptrace Website (Next.js)

Marketing website built with Next.js App Router (`next@16`), React (`19`), and TypeScript.

This repository is structured for:
- clear route ownership
- predictable reusable component placement
- easy onboarding for new contributors

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```txt
my-app/
  app/
    (home)/
      page.tsx
      sections/
      components/
    about-us/
      page.tsx
      sections/
      components/
    blog/
    careers/
    contact-us/
    faq/
    industry/
      [slug]/
    portfolio/
    services/
      [slug]/
    assets/
    globals.css
    layout.tsx

  components/
    layout/
      Navbar.tsx
      Footer.tsx
      Components.css
    shared/
      PageBanner.tsx
      RevealOnScroll.tsx
      RoutePlaceholder.tsx

  lib/
    layout/
      sectionShell.ts
```

## Folder Conventions

- `app/<route>/page.tsx`: route entry that composes sections.
- `app/<route>/sections`: page-level blocks that define the route flow.
- `app/<route>/components`: route-local supporting UI reused within that route.
- `components/shared`: reusable UI across multiple routes.
- `components/layout`: global layout UI used by `app/layout.tsx`.
- `lib/*`: non-UI shared utilities/constants.

## Styling Conventions

- `app/globals.css` contains global styles/tokens/reset-level rules.
- Route-specific CSS stays in its route folder (for example `app/blog/blog.css`).
- Shared styles for shared/layout components stay near those components.
- Avoid mixing global and route-local styles in the same file.

## Reusable Component Rules

Use this checklist before placing a component:
- Used in one route only -> `app/<route>/components`.
- Used in multiple routes -> `components/shared`.
- Used for app shell/navigation/footer -> `components/layout`.
- Pure helper/constants (not JSX UI) -> `lib`.

## Running the Project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

## How to Add a New Page

1. Create `app/<new-route>/page.tsx`.
2. Add `sections/` for major page blocks.
3. Add `components/` only for route-local reusable pieces.
4. Promote any cross-route reusable UI into `components/shared`.
5. Keep `page.tsx` focused on composition, not heavy implementation details.
