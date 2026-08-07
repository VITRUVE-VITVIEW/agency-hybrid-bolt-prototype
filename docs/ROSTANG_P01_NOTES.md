# ROSTANG 2026 — P01 Implementation Notes

## Iteration scope

This iteration delivers the first approved-content ROSTANG prototype:

- Global desktop header with dropdown submenu
- Mobile header (closed + open states) with focus trap, Escape close, body scroll lock
- Complete P01 homepage (8 sections, exact approved copy)
- Global responsive footer with CTA strip, 4 link groups, legal links
- Exact approved route registry (18 routes + wildcard 404)
- Neutral placeholders for all unimplemented routes
- Preserved and working `/style-lab`

P02 through P18 were not implemented.

## Architecture decisions

### Scoped design layer

ROSTANG uses a completely separate design system scoped under `.rostang-site`:

- `src/styles/rostang-tokens.css` — all ROSTANG tokens (colour, typography, spacing, layout)
- Jost font self-hosted via `@fontsource/jost` (no Google Fonts remote loading)
- No Barlow Condensed, no Space Grotesk, no pillar accent colours on public pages
- The legacy Style Lab (`/style-lab`) retains its own tokens and components unchanged

### Route registry

`src/data/rostangRoutes.ts` — authoritative source for all 18 public routes + wildcard.
The legacy `src/data/routes.ts` is preserved for the Style Lab only.

### Navigation

`src/data/rostangNavigation.ts` — exact approved desktop order:
Pilotage digital, Projets (with 4-item submenu), Cas clients, Ressources, À propos.
Contact is intentionally absent from the main navigation (footer only).
Primary CTA: Diagnostic → `/diagnostic-digital/`.

### Homepage content

`src/data/rostangHomepage.ts` — all 8 sections with exact approved French copy.
No invented metrics, testimonials, client logos, or marketing claims.

## Files created

| File | Purpose |
|---|---|
| `src/styles/rostang-tokens.css` | ROSTANG design tokens scoped under `.rostang-site` |
| `src/data/rostangRoutes.ts` | Approved route registry (18 routes + wildcard) |
| `src/data/rostangNavigation.ts` | Public navigation tree + primary CTA |
| `src/data/rostangHomepage.ts` | P01 homepage content (8 sections) |
| `src/components/rostang/RostangHeader/RostangHeader.tsx` | Desktop header + mobile menu |
| `src/components/rostang/RostangHeader/RostangHeader.css` | Header + mobile menu styles |
| `src/components/rostang/RostangFooter/RostangFooter.tsx` | Responsive footer |
| `src/components/rostang/RostangFooter/RostangFooter.css` | Footer styles |
| `src/pages/rostang/RostangHomepage.tsx` | P01 homepage (8 sections) |
| `src/pages/rostang/RostangHomepage.css` | Homepage styles |
| `src/pages/rostang/RostangPlaceholder.tsx` | Neutral route placeholder |
| `src/pages/rostang/RostangPlaceholder.css` | Placeholder styles |

## Files modified

| File | Change |
|---|---|
| `src/main.tsx` | Added `@fontsource/jost` imports + `rostang-tokens.css` import |
| `src/App.tsx` | Replaced legacy routes with ROSTANG route registry; Style Lab preserved |
| `package.json` | Added `@fontsource/jost` dependency |

## Legacy components preserved (not modified)

All Phase 2 and Phase 3A/3B-1 components are preserved unchanged:

- `src/components/editorial/*` — editorial sections
- `src/components/expertise/*` — expertise cards and sections
- `src/components/toolkit/*` — toolkit grid
- `src/components/process/*` — process timeline
- `src/components/projects/*` — project carousel and portfolio
- `src/components/Hero/*` — hero variants
- `src/components/Header/*` — legacy header (used by Style Lab only)
- `src/components/MobileMenu/*` — legacy mobile menu (used by Style Lab only)
- `src/components/FullscreenMenu/*` — legacy fullscreen menu
- `src/pages/StyleLab.tsx` — Style Lab page (fully operational)
- `src/data/routes.ts` — legacy route registry (preserved for Style Lab)
- `src/data/navigation.ts` — legacy navigation (preserved for Style Lab)
- All legacy data files, hooks, and utilities

## Obsolete content isolated

The following legacy content is NOT present on any public ROSTANG page:

- "Agence hybride — Paris" positioning
- Digital / AI / Consulting three-pillar structure
- "Méthode", "Agence", "Blog", "Réalisations", "Portfolio" navigation labels
- Barlow Condensed and Space Grotesk fonts
- Electric blue, violet, magenta, coral pillar colours
- Invented case studies, metrics, and agency content
- Old growth and transformation promises

All of this content remains accessible only through `/style-lab` as a visual component archive.

## Reused legacy patterns

The following patterns from the legacy prototype informed ROSTANG component structure:

- `useBodyScrollLock`, `useEscapeKey`, `useFocusTrap` hooks — reused directly (same files)
- Focus trap pattern from `FullscreenMenu` — applied to the ROSTANG mobile menu
- Section-based layout rhythm with `container--content` max-width — adapted to 1200px
- `prefers-reduced-motion` handling from `global.css` — inherited

## Routes implemented

| Route | Status |
|---|---|
| `/` | Implemented (P01 homepage) |
| `/style-lab` | Implemented (preserved) |
| `/pilotage-digital-externalise/` | Placeholder |
| `/diagnostic-digital/` | Placeholder |
| `/projets-digitaux/` | Placeholder |
| `/sites-internet/` | Placeholder |
| `/seo-google-ads/` | Placeholder |
| `/ia-automatisation/` | Placeholder |
| `/formation/` | Placeholder |
| `/cas-clients/` | Placeholder |
| `/cas-clients/sanibio/` | Placeholder |
| `/cas-clients/villa-mont-liban/` | Placeholder |
| `/ressources/` | Placeholder |
| `/a-propos/` | Placeholder |
| `/contact/` | Placeholder |
| `/merci/` | Placeholder |
| `/mentions-legales/` | Placeholder |
| `/confidentialite/` | Placeholder |
| `/consultant-digital-martigues/` | Placeholder (secondary, not in nav) |
| `*` (404) | Implemented (NotFound) |

## Validation

- `npm run typecheck`: 0 errors
- `npm run build`: 155 modules, 0 errors, Jost fonts self-hosted
- Responsive breakpoints: 390px, 768px, 1024px, 1440px, 1920px
