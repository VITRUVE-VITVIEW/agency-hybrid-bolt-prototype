/**
 * ROSTANG route registry — authoritative source for all public routes.
 * Legacy routes from the old prototype are not included here.
 */

export type RostangRouteType = 'public' | 'dynamic-detail' | 'private' | 'system'
export type RostangImplementationStatus = 'implemented' | 'placeholder'

export interface RostangRouteRecord {
  path: string
  pageTitle: string
  type: RostangRouteType
  status: RostangImplementationStatus
  parentPath?: string
  /** Marks a route that is not part of the main navigation (e.g. SEO landing) */
  secondary?: boolean
}

export const rostangRoutes: RostangRouteRecord[] = [
  // ── Implemented ──────────────────────────────────────────────────
  {
    path: '/',
    pageTitle: 'Accueil',
    type: 'public',
    status: 'implemented',
  },
  {
    path: '/style-lab',
    pageTitle: 'Style Lab',
    type: 'private',
    status: 'implemented',
  },

  // ── Public placeholders ──────────────────────────────────────────
  {
    path: '/pilotage-digital-externalise/',
    pageTitle: 'Pilotage digital externalisé',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/diagnostic-digital/',
    pageTitle: 'Diagnostic digital',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/projets-digitaux/',
    pageTitle: 'Projets digitaux',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/sites-internet/',
    pageTitle: 'Sites internet',
    type: 'public',
    status: 'placeholder',
    parentPath: '/projets-digitaux/',
  },
  {
    path: '/seo-google-ads/',
    pageTitle: 'SEO et Google Ads',
    type: 'public',
    status: 'placeholder',
    parentPath: '/projets-digitaux/',
  },
  {
    path: '/ia-automatisation/',
    pageTitle: 'IA et automatisation',
    type: 'public',
    status: 'placeholder',
    parentPath: '/projets-digitaux/',
  },
  {
    path: '/formation/',
    pageTitle: 'Formation',
    type: 'public',
    status: 'placeholder',
    parentPath: '/projets-digitaux/',
  },
  {
    path: '/cas-clients/',
    pageTitle: 'Cas clients',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/cas-clients/sanibio/',
    pageTitle: 'Cas client — Sanibio',
    type: 'public',
    status: 'placeholder',
    parentPath: '/cas-clients/',
  },
  {
    path: '/cas-clients/villa-mont-liban/',
    pageTitle: 'Cas client — Villa Mont-Liban',
    type: 'public',
    status: 'placeholder',
    parentPath: '/cas-clients/',
  },
  {
    path: '/ressources/',
    pageTitle: 'Ressources',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/a-propos/',
    pageTitle: 'À propos',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/contact/',
    pageTitle: 'Contact',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/merci/',
    pageTitle: 'Merci',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/mentions-legales/',
    pageTitle: 'Mentions légales',
    type: 'public',
    status: 'placeholder',
  },
  {
    path: '/confidentialite/',
    pageTitle: 'Confidentialité et cookies',
    type: 'public',
    status: 'placeholder',
  },

  // ── Secondary (not in main navigation) ──────────────────────────
  {
    path: '/consultant-digital-martigues/',
    pageTitle: 'Consultant digital — Martigues',
    type: 'public',
    status: 'placeholder',
    secondary: true,
  },

  // ── System ───────────────────────────────────────────────────────
  {
    path: '*',
    pageTitle: 'Page introuvable',
    type: 'system',
    status: 'implemented',
  },
]
