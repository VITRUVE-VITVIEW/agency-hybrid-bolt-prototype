/**
 * Public navigation tree — hierarchical links for rendered navigation components.
 * Dynamic detail routes (/blog/:slug, etc.) and /style-lab are intentionally absent.
 */

import type { NavigationItem } from '../types'

const navigation: NavigationItem[] = [
  {
    path: '/',
    label: 'Accueil',
  },
  {
    path: '/expertises',
    label: 'Expertises',
    children: [
      {
        path: '/expertises/digital',
        label: 'Digital',
        pillar: 'digital',
        children: [
          { path: '/expertises/digital/creation-site-internet', label: 'Création de site internet', pillar: 'digital' },
          { path: '/expertises/digital/refonte-site-internet', label: 'Refonte de site internet', pillar: 'digital' },
          { path: '/expertises/digital/optimisation-conversions', label: 'Optimisation des conversions', pillar: 'digital' },
          { path: '/expertises/digital/strategie-digitale', label: 'Stratégie digitale', pillar: 'digital' },
        ],
      },
      {
        path: '/expertises/ia',
        label: 'Intelligence Artificielle',
        pillar: 'ia',
        children: [
          { path: '/expertises/ia/ia-pour-les-entreprises', label: 'IA pour les entreprises', pillar: 'ia' },
          { path: '/expertises/ia/automatisation-ia', label: 'Automatisation IA', pillar: 'ia' },
          { path: '/expertises/ia/formation-ia', label: 'Formation IA', pillar: 'ia' },
        ],
      },
      {
        path: '/expertises/conseil',
        label: 'Conseil',
        pillar: 'conseil',
        children: [
          { path: '/expertises/conseil/conseil-positionnement', label: 'Conseil & positionnement', pillar: 'conseil' },
          { path: '/expertises/conseil/image-de-marque', label: 'Image de marque', pillar: 'conseil' },
          { path: '/expertises/conseil/innovation', label: 'Innovation', pillar: 'conseil' },
          { path: '/expertises/conseil/accompagnement-equipes', label: 'Accompagnement des équipes', pillar: 'conseil' },
        ],
      },
    ],
  },
  {
    path: '/methode',
    label: 'Méthode',
  },
  {
    path: '/realisations',
    label: 'Réalisations',
    children: [
      { path: '/realisations/cas-clients', label: 'Cas clients' },
      { path: '/realisations/portfolio', label: 'Portfolio' },
    ],
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/agence',
    label: 'Agence',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
]

export default navigation
