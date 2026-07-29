import type { ExpertiseCategory } from '../types'

/**
 * Three pillar categories — source of truth for category cards,
 * split sections, and navigation grouping.
 *
 * WordPress equivalent: CPT taxonomy 'pillar' (3 terms).
 */
const expertiseCategories: ExpertiseCategory[] = [
  {
    index: 1,
    slug: 'digital',
    label: 'Digital',
    pillar: 'digital',
    accentColorToken: '--color-digital-blue',
    route: '/expertises/digital',
    positioning: 'Des sites web qui convertissent, des expériences numériques qui marquent.',
    description:
      'Création, refonte et optimisation de sites internet — de la stratégie à la mise en ligne. Nous concevons des présences digitales performantes, accessibles et mesurables.',
    ctaLabel: 'Explorer le digital',
    expertiseSlugs: [
      'creation-site-internet',
      'refonte-site-internet',
      'optimisation-conversions',
      'strategie-digitale',
    ],
    proof: {
      value: '+58 %',
      label: 'de taux de conversion moyen après refonte',
    },
  },
  {
    index: 2,
    slug: 'ia',
    label: 'Intelligence Artificielle',
    pillar: 'ia',
    accentColorToken: '--color-ia-violet',
    route: '/expertises/ia',
    positioning: 'L\'IA au service de votre croissance — concrète, mesurable, déployée.',
    description:
      'Automatisation, formation et intégration de l\'IA dans vos processus métier. Nous transformons les possibilités de l\'intelligence artificielle en avantage compétitif réel.',
    ctaLabel: 'Explorer l\'IA',
    expertiseSlugs: [
      'ia-pour-les-entreprises',
      'automatisation-ia',
      'formation-ia',
    ],
    proof: {
      value: '−40 %',
      label: 'de temps opérationnel grâce à l\'automatisation',
    },
  },
  {
    index: 3,
    slug: 'conseil',
    label: 'Conseil',
    pillar: 'conseil',
    accentColorToken: '--color-conseil-coral',
    route: '/expertises/conseil',
    positioning: 'Un positionnement clair, une marque forte, une équipe alignée.',
    description:
      'Positionnement stratégique, image de marque, accompagnement des équipes et démarches d\'innovation. Nous révélons ce qui rend votre organisation unique et bâtissons les fondations de sa différenciation.',
    ctaLabel: 'Explorer le conseil',
    expertiseSlugs: [
      'conseil-positionnement',
      'image-de-marque',
      'innovation',
      'accompagnement-equipes',
    ],
    proof: {
      value: '92 %',
      label: 'de clients satisfaits de leur accompagnement stratégique',
    },
  },
]

export default expertiseCategories
