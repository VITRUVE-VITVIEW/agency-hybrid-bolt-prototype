import type { CaseStudy, ProjectMedia } from '../types'

export const caseStudyMedia: Record<string, ProjectMedia> = {
  orizon: {
    variant: 'gradient-digital',
    ratio: '4/3',
    label: 'Refonte digitale Orizon — aperçu de la nouvelle expérience',
    accent: 'digital',
  },
  nova: {
    variant: 'gradient-ia',
    ratio: '4/3',
    label: 'Accélération IA Nova — tableau de bord intelligent',
    accent: 'ia',
  },
  meridian: {
    variant: 'gradient-conseil',
    ratio: '4/3',
    label: 'Plateforme Meridian — interface de pilotage',
    accent: 'conseil',
  },
  lumia: {
    variant: 'abstract-grid',
    ratio: '4/3',
    label: 'Stratégie de marque Lumia — identité visuelle',
    accent: 'magenta',
  },
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'refonte-orizon',
    type: 'cas-client',
    client: 'Orizon',
    pillar: 'digital',
    year: 2024,
    imagePlaceholder: 'orizon',
    tags: ['Refonte', 'UX/UI', 'Performance', 'Digital'],
    briefDescription:
      'Refonte complète de l\'expérience digitale d\'Orizon, leader de la logistique urbaine.',
    challengeBody:
      'Orizon faisait face à un site vieillissant, des taux de rebond élevés et une expérience mobile dégradée. L\'objectif était de repositionner la marque dans un environnement hautement concurrentiel tout en réduisant les frictions à la conversion.',
    responseBody:
      'Nous avons conduit un audit UX approfondi, redesigné l\'architecture d\'information et livré une expérience mobile-first avec un système de design centralisé. L\'intégration d\'animations éditoriales subtiles renforce la crédibilité de la marque.',
    metrics: [
      { label: 'Taux de conversion', value: '+47 %' },
      { label: 'Temps de chargement', value: '−62 %' },
      { label: 'Score NPS', value: '+34 pts' },
    ],
    resultsSummary: '+47 % de conversions et une marque repositionnée comme référence sectorielle.',
  },
  {
    slug: 'acceleration-nova',
    type: 'cas-client',
    client: 'Nova Finance',
    pillar: 'ia',
    year: 2024,
    imagePlaceholder: 'nova',
    tags: ['Intelligence Artificielle', 'Automatisation', 'Finance', 'IA'],
    briefDescription:
      'Déploiement d\'un système d\'IA pour automatiser l\'analyse de risque de Nova Finance.',
    challengeBody:
      'Nova Finance traitait manuellement des milliers de dossiers chaque mois, générant des délais et des erreurs coûteuses. L\'entreprise cherchait à tirer parti de l\'IA sans déstabiliser ses équipes ni ses processus métier.',
    responseBody:
      'Nous avons conçu et intégré un moteur d\'analyse prédictive entraîné sur les données historiques de Nova. Une interface de supervision intuitive permet aux analystes de comprendre, ajuster et valider les décisions de l\'IA en toute confiance.',
    metrics: [
      { label: 'Dossiers traités automatiquement', value: '78 %' },
      { label: 'Délai de traitement', value: '−70 %' },
      { label: 'Précision du modèle', value: '94,3 %' },
    ],
    resultsSummary: '78 % des dossiers traités automatiquement avec une précision supérieure à 94 %.',
  },
  {
    slug: 'plateforme-meridian',
    type: 'cas-client',
    client: 'Meridian Conseil',
    pillar: 'conseil',
    year: 2023,
    imagePlaceholder: 'meridian',
    tags: ['Conseil', 'Transformation', 'Plateforme', 'Stratégie'],
    briefDescription:
      'Conception et lancement d\'une plateforme de pilotage stratégique pour Meridian Conseil.',
    challengeBody:
      'Meridian accompagnait ses clients avec des outils épars et des reportings manuels chronophages. L\'agence avait besoin d\'une solution centralisée pour consolider les données et produire des insights actionnables en temps réel.',
    responseBody:
      'Nous avons défini l\'architecture de la plateforme, co-construit les parcours utilisateurs avec les équipes terrain et supervisé le développement d\'un tableau de bord personnalisable intégrant des visualisations avancées.',
    metrics: [
      { label: 'Gain de temps sur les reportings', value: '−55 %' },
      { label: 'Adoption par les équipes', value: '91 %' },
      { label: 'NPS client', value: '8,7 / 10' },
    ],
    resultsSummary: 'Une plateforme adoptée à 91 % qui a réduit de moitié le temps de reporting.',
  },
  {
    slug: 'strategie-lumia',
    type: 'cas-client',
    client: 'Lumia Studio',
    pillar: 'conseil',
    year: 2023,
    imagePlaceholder: 'lumia',
    tags: ['Image de marque', 'Positionnement', 'Identité', 'Conseil'],
    briefDescription:
      'Redéfinition du positionnement et de l\'identité visuelle de Lumia Studio.',
    challengeBody:
      'Lumia Studio, agence créative en forte croissance, souffrait d\'un manque de cohérence identitaire qui freinait sa crédibilité auprès des grands comptes. La direction cherchait à repositionner la marque sur un segment premium.',
    responseBody:
      'Nous avons mené des ateliers de positionnement avec l\'équipe fondatrice, défini une plateforme de marque solide et supervisé la refonte graphique complète : logotype, typographie, palette, système éditorial et déclinaisons.',
    metrics: [
      { label: 'Ticket moyen client', value: '+38 %' },
      { label: 'Taux de mémorisation', value: '+52 %' },
      { label: 'Contrats grands comptes', value: '×2,5' },
    ],
    resultsSummary: 'Un repositionnement premium qui a doublé les contrats grands comptes en 12 mois.',
  },
]

export default caseStudies
