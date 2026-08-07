/**
 * ROSTANG public navigation tree — exact approved desktop order.
 * Contact is intentionally absent from the main navigation (footer only).
 */

export interface RostangNavItem {
  path: string
  label: string
  children?: RostangNavItem[]
}

const rostangNavigation: RostangNavItem[] = [
  {
    path: '/pilotage-digital-externalise/',
    label: 'Pilotage digital',
  },
  {
    path: '/projets-digitaux/',
    label: 'Projets',
    children: [
      { path: '/sites-internet/', label: 'Sites internet' },
      { path: '/seo-google-ads/', label: 'SEO et Google Ads' },
      { path: '/ia-automatisation/', label: 'IA et automatisation' },
      { path: '/formation/', label: 'Formation' },
    ],
  },
  {
    path: '/cas-clients/',
    label: 'Cas clients',
  },
  {
    path: '/ressources/',
    label: 'Ressources',
  },
  {
    path: '/a-propos/',
    label: 'À propos',
  },
]

export const rostangPrimaryCta = {
  label: 'Diagnostic',
  path: '/diagnostic-digital/',
}

export default rostangNavigation
