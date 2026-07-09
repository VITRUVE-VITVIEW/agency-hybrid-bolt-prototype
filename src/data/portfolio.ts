import type { PortfolioItem, ProjectMedia } from '../types'

export const portfolioMedia: Record<string, ProjectMedia> = {
  identiteNova: {
    variant: 'gradient-ia',
    ratio: '3/4',
    label: 'Identité visuelle Nova — système graphique complet',
    accent: 'magenta',
  },
  applicationCrest: {
    variant: 'device-frame',
    ratio: '3/4',
    label: 'Application mobile Crest — interface principale',
    accent: 'digital',
  },
  siteAtelierForma: {
    variant: 'gradient-conseil',
    ratio: '4/3',
    label: 'Site Atelier Forma — page d\'accueil',
    accent: 'conseil',
  },
  campagneSolaris: {
    variant: 'abstract-grid',
    ratio: '1/1',
    label: 'Campagne Solaris — direction artistique',
    accent: 'coral',
  },
  refonteAxio: {
    variant: 'gradient-digital',
    ratio: '4/3',
    label: 'Refonte Axio — nouvelle expérience web',
    accent: 'blue',
  },
  outilInterneNoor: {
    variant: 'print-frame',
    ratio: '3/4',
    label: 'Outil interne Noor — kit de design système',
    accent: 'neutral',
  },
}

const portfolioItems: PortfolioItem[] = [
  {
    slug: 'identite-nova',
    type: 'portfolio',
    client: 'Nova Studio',
    pillar: 'conseil',
    year: 2024,
    imagePlaceholder: 'identiteNova',
    tags: ['Identité', 'Image de marque', 'Typographie'],
    briefDescription:
      'Système d\'identité visuelle complet pour Nova Studio : logotype, palette, typographie et kit de démarrage.',
    galleryImages: [],
    projectContext:
      'Nova Studio avait besoin d\'une identité forte pour s\'imposer sur le marché des studios créatifs indépendants. Nous avons conçu un système cohérent et flexible, déclinable sur tous supports.',
  },
  {
    slug: 'application-crest',
    type: 'portfolio',
    client: 'Crest Mobilité',
    pillar: 'digital',
    year: 2024,
    imagePlaceholder: 'applicationCrest',
    tags: ['UX/UI', 'Application mobile', 'Design système'],
    briefDescription:
      'Conception UX/UI de l\'application mobile de Crest Mobilité — parcours de réservation et tableau de bord conducteur.',
    galleryImages: [],
    projectContext:
      'L\'équipe Crest avait une vision produit claire mais manquait d\'une direction design structurée. Nous avons défini les fondations UX et livré un design system opérationnel prêt pour le développement.',
  },
  {
    slug: 'site-atelier-forma',
    type: 'portfolio',
    client: 'Atelier Forma',
    pillar: 'conseil',
    year: 2023,
    imagePlaceholder: 'siteAtelierForma',
    tags: ['Site web', 'Artisanat', 'Éditorial'],
    briefDescription:
      'Site vitrine éditorial pour Atelier Forma, studio d\'architecture d\'intérieur parisien.',
    galleryImages: [],
    projectContext:
      'Atelier Forma souhaitait un site qui reflète l\'élégance de ses réalisations. Nous avons opté pour une direction éditoriale sombre, des photographies plein écran et une navigation épurée.',
  },
  {
    slug: 'campagne-solaris',
    type: 'portfolio',
    client: 'Solaris Énergie',
    pillar: 'digital',
    year: 2023,
    imagePlaceholder: 'campagneSolaris',
    tags: ['Campagne', 'Direction artistique', 'Motion'],
    briefDescription:
      'Direction artistique de la campagne de lancement de Solaris Énergie — identité visuelle et motion design.',
    galleryImages: [],
    projectContext:
      'Pour le lancement de Solaris sur le marché grand public, nous avons développé une direction artistique audacieuse combinant typographie oversized et palette solaire.',
  },
  {
    slug: 'refonte-axio',
    type: 'portfolio',
    client: 'Axio Technologies',
    pillar: 'digital',
    year: 2023,
    imagePlaceholder: 'refonteAxio',
    tags: ['Refonte', 'SaaS', 'Interface'],
    briefDescription:
      'Refonte de l\'interface SaaS d\'Axio Technologies — simplification des parcours et modernisation visuelle.',
    galleryImages: [],
    projectContext:
      'L\'interface d\'Axio avait accumulé une dette design significative. Nous avons rationalisé l\'architecture de l\'information et aligné l\'interface sur les standards actuels de l\'expérience B2B.',
  },
  {
    slug: 'outil-interne-noor',
    type: 'portfolio',
    client: 'Noor Group',
    pillar: 'ia',
    year: 2022,
    imagePlaceholder: 'outilInterneNoor',
    tags: ['Design système', 'Outil interne', 'Composants'],
    briefDescription:
      'Conception du design system de Noor Group — bibliothèque de composants et documentation.',
    galleryImages: [],
    projectContext:
      'Les équipes de Noor travaillaient sans référentiel commun. Nous avons structuré un design system complet avec tokens, composants réutilisables et documentation Figma.',
  },
]

export default portfolioItems
