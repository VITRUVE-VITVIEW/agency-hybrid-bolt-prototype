import type { AccentTheme, ProjectMedia } from '../types'

/* ---- MinimalEditorialIntro ---- */

export interface MinimalEditorialIntroData {
  eyebrow: string
  boldStatement: string
  body: string
  linkLabel: string
  linkPath: string
}

export const minimalEditorialIntroData: MinimalEditorialIntroData = {
  eyebrow: 'Notre approche',
  boldStatement: 'Nous concevons des expériences digitales qui créent de la valeur durable.',
  body: 'Chaque projet est une opportunité de repenser en profondeur la relation entre une marque et ses audiences. Nous combinons rigueur stratégique, excellence créative et maîtrise technique pour délivrer des résultats mesurables.',
  linkLabel: 'Découvrir notre méthode',
  linkPath: '/methode',
}

/* ---- DarkEditorialIntro ---- */

export interface DarkEditorialIntroData {
  eyebrow: string
  title: string
  body: string
  media?: ProjectMedia
}

export const darkEditorialIntroData: DarkEditorialIntroData = {
  eyebrow: 'Agence hybride',
  title: 'Trois piliers, une ambition.',
  body: 'Digital, Intelligence Artificielle et Conseil — trois expertises complémentaires au service d\'une même vision : accompagner les entreprises dans leur transformation avec méthode, créativité et efficacité.',
  media: {
    variant: 'abstract-grid',
    ratio: '4/3',
    label: 'Illustration éditoriale — trois piliers de l\'agence',
    accent: 'neutral',
  },
}

/* ---- StatementSection ---- */

export interface StatementSectionData {
  statement: string
  eyebrow?: string
  ctaLabel?: string
  ctaPath?: string
  variant: 'dark' | 'light' | 'color'
  accent?: AccentTheme
}

export const statementDarkData: StatementSectionData = {
  variant: 'dark',
  eyebrow: 'Notre conviction',
  statement: 'La transformation digitale n\'est pas une destination. C\'est une pratique.',
  ctaLabel: 'Travailler ensemble',
  ctaPath: '/contact',
}

export const statementColorData: StatementSectionData = {
  variant: 'color',
  accent: 'blue',
  statement: 'Prêt à bâtir quelque chose d\'exceptionnel ?',
  ctaLabel: 'Discutons de votre projet',
  ctaPath: '/contact',
}

/* ---- NumberedEditorialSection ---- */

export interface NumberedEditorialItem {
  number: string
  title: string
  body: string
  list?: string[]
  ctaLabel?: string
  ctaPath?: string
  media?: ProjectMedia
  mediaPosition: 'left' | 'right'
}

export const numberedEditorialData: NumberedEditorialItem = {
  number: '01',
  title: 'Comprendre avant d\'agir.',
  body: 'Chaque engagement commence par une phase d\'immersion rigoureuse. Nous analysons votre environnement, vos contraintes et vos ambitions pour construire une réponse adaptée, pas un template.',
  list: [
    'Audit de l\'existant et benchmark sectoriel',
    'Ateliers de définition avec les parties prenantes',
    'Cartographie des opportunités',
    'Recommandations stratégiques hiérarchisées',
  ],
  ctaLabel: 'Notre méthode complète',
  ctaPath: '/methode',
  media: {
    variant: 'gradient-digital',
    ratio: '4/3',
    label: 'Phase de découverte — atelier stratégique',
    accent: 'digital',
  },
  mediaPosition: 'right',
}

/* ---- ImageTextSplit ---- */

export interface ImageTextSplitData {
  eyebrow?: string
  title: string
  body: string
  ctaLabel?: string
  ctaPath?: string
  media: ProjectMedia
}

export const imageTextSplitLeftData: ImageTextSplitData = {
  eyebrow: 'Digital',
  title: 'Des expériences web qui convertissent.',
  body: 'Nous concevons et développons des sites et applications qui allient performance, accessibilité et excellence éditoriale. De la stratégie UX à la mise en production, chaque étape est maîtrisée.',
  ctaLabel: 'Expertises digitales',
  ctaPath: '/expertises/digital',
  media: {
    variant: 'device-frame',
    ratio: '3/4',
    label: 'Maquette application — expertise digitale',
    accent: 'digital',
  },
}

export const imageTextSplitRightData: ImageTextSplitData = {
  eyebrow: 'Intelligence Artificielle',
  title: 'L\'IA au service de votre performance.',
  body: 'Automatisation, analyse prédictive, agents intelligents — nous intégrons l\'intelligence artificielle dans vos processus métier de façon pragmatique, avec un focus sur les résultats mesurables et l\'adoption terrain.',
  ctaLabel: 'Expertises IA',
  ctaPath: '/expertises/ia',
  media: {
    variant: 'gradient-ia',
    ratio: '3/4',
    label: 'Visualisation IA — flux de données intelligent',
    accent: 'ia',
  },
}
