import type { HeroData } from '../types'

/** Esprit 01 — dark editorial hero data */
export const heroDarkEditorialData: HeroData = {
  accessibleHeadline: 'Agence hybride — Digital, Intelligence Artificielle, Conseil',
  eyebrow: 'Agence Hybride — Paris',
  headline: [
    { text: 'Agence', treatment: 'editorial', lineBreakAfter: false },
    { text: ' ', treatment: 'editorial' },
    { text: 'Hybride', treatment: 'outline', lineBreakAfter: true },
    { text: 'Digital. IA. Conseil.', treatment: 'editorial' },
  ],
  body: 'Nous combinons expertise digitale, intelligence artificielle et conseil stratégique pour faire croître votre entreprise.',
  ctaPrimary: { label: 'Voir nos réalisations', path: '/realisations' },
  ctaSecondary: { label: 'Notre méthode', path: '/methode' },
  gridLines: true,
}

/** Esprit 02 — gradient hero data */
export const heroGradientData: HeroData = {
  accessibleHeadline: 'Votre croissance commence ici — stratégie digitale et intelligence artificielle',
  eyebrow: 'Digital · Intelligence · Stratégie',
  headline: [
    { text: 'Votre croissance', treatment: 'geometric', lineBreakAfter: true },
    { text: 'commence ici.', treatment: 'geometric' },
  ],
  body: 'Stratégie digitale, intégration IA et conseil en transformation pour les entreprises ambitieuses.',
  ctaPrimary: { label: 'Découvrir nos expertises', path: '/expertises' },
  ctaSecondary: { label: 'Nous contacter', path: '/contact' },
  playButtonLabel: 'Regarder la présentation',
  gridLines: false,
}

/** Hybrid hero — recommended production variant */
export const heroHybridData: HeroData = {
  accessibleHeadline: 'Agence hybride — digital, intelligence artificielle et conseil stratégique à Paris',
  eyebrow: 'Agence Hybride — Paris',
  headline: [
    { text: 'L\'agence', treatment: 'geometric', lineBreakAfter: false },
    { text: ' ', treatment: 'geometric' },
    { text: 'qui', treatment: 'outline', lineBreakAfter: true, decorative: false },
    { text: 'transforme', treatment: 'geometric', lineBreakAfter: true },
    { text: 'Digital · IA · Conseil', treatment: 'accent' },
  ],
  body: 'Nous unissons le meilleur du digital, de l\'intelligence artificielle et du conseil pour accélérer votre transformation.',
  ctaPrimary: { label: 'Nos expertises', path: '/expertises' },
  ctaSecondary: { label: 'Voir les réalisations', path: '/realisations' },
  gridLines: true,
}
