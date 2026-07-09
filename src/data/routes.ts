/**
 * Complete route registry — every known URL in the application.
 * This is the authoritative source for RoutePlaceholder labels.
 * App.tsx reads this registry to confirm all routes are declared.
 */

export type RouteType = 'public' | 'dynamic-detail' | 'private'
export type ImplementationStatus = 'implemented' | 'placeholder'

export interface RouteRecord {
  /** Full route path as used in React Router */
  path: string
  /** French page title displayed in RoutePlaceholder */
  pageTitle: string
  /** Route type classification */
  type: RouteType
  /** Whether the page component is built yet */
  status: ImplementationStatus
  /** Optional breadcrumb hint for nested routes */
  parentPath?: string
}

export const routes: RouteRecord[] = [
  // ── Level 1 — Main pages ──────────────────────────────────────────────────
  {
    path: '/',
    pageTitle: 'Accueil',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/expertises',
    pageTitle: 'Expertises',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/methode',
    pageTitle: 'Méthode',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/realisations',
    pageTitle: 'Réalisations',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/blog',
    pageTitle: 'Blog',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/agence',
    pageTitle: 'Agence',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/contact',
    pageTitle: 'Contact',
    type: 'public',
    status: 'placeholder',
  },

  // ── Level 2 — Expertise category hubs ────────────────────────────────────
  {
    path: '/expertises/digital',
    pageTitle: 'Expertises — Digital',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises',
  },
  {
    path: '/expertises/ia',
    pageTitle: 'Expertises — Intelligence Artificielle',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises',
  },
  {
    path: '/expertises/conseil',
    pageTitle: 'Expertises — Conseil',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises',
  },

  // ── Level 3 — Digital expertise pages ────────────────────────────────────
  {
    path: '/expertises/digital/creation-site-internet',
    pageTitle: 'Création de site internet',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/digital',
  },
  {
    path: '/expertises/digital/refonte-site-internet',
    pageTitle: 'Refonte de site internet',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/digital',
  },
  {
    path: '/expertises/digital/optimisation-conversions',
    pageTitle: 'Optimisation des conversions',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/digital',
  },
  {
    path: '/expertises/digital/strategie-digitale',
    pageTitle: 'Stratégie digitale',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/digital',
  },

  // ── Level 3 — IA expertise pages ─────────────────────────────────────────
  {
    path: '/expertises/ia/ia-pour-les-entreprises',
    pageTitle: 'IA pour les entreprises',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/ia',
  },
  {
    path: '/expertises/ia/automatisation-ia',
    pageTitle: 'Automatisation IA',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/ia',
  },
  {
    path: '/expertises/ia/formation-ia',
    pageTitle: 'Formation IA',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/ia',
  },

  // ── Level 3 — Conseil expertise pages ────────────────────────────────────
  {
    path: '/expertises/conseil/conseil-positionnement',
    pageTitle: 'Conseil & positionnement',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/conseil',
  },
  {
    path: '/expertises/conseil/image-de-marque',
    pageTitle: 'Image de marque',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/conseil',
  },
  {
    path: '/expertises/conseil/innovation',
    pageTitle: 'Innovation',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/conseil',
  },
  {
    path: '/expertises/conseil/accompagnement-equipes',
    pageTitle: 'Accompagnement des équipes',
    type: 'public',
    status: 'placeholder',
    parentPath: '/expertises/conseil',
  },

  // ── Level 2 — Réalisations hubs ───────────────────────────────────────────
  {
    path: '/realisations/cas-clients',
    pageTitle: 'Cas clients',
    type: 'public',
    status: 'placeholder',
    parentPath: '/realisations',
  },
  {
    path: '/realisations/portfolio',
    pageTitle: 'Portfolio',
    type: 'public',
    status: 'placeholder',
    parentPath: '/realisations',
  },

  // ── Dynamic detail templates ──────────────────────────────────────────────
  {
    path: '/realisations/cas-clients/:slug',
    pageTitle: 'Cas client — détail',
    type: 'dynamic-detail',
    status: 'placeholder',
    parentPath: '/realisations/cas-clients',
  },
  {
    path: '/realisations/portfolio/:slug',
    pageTitle: 'Portfolio — détail',
    type: 'dynamic-detail',
    status: 'placeholder',
    parentPath: '/realisations/portfolio',
  },
  {
    path: '/blog/:slug',
    pageTitle: 'Article — détail',
    type: 'dynamic-detail',
    status: 'placeholder',
    parentPath: '/blog',
  },

  // ── Private routes ────────────────────────────────────────────────────────
  {
    path: '/style-lab',
    pageTitle: 'Style Lab',
    type: 'private',
    status: 'implemented',
  },
]
