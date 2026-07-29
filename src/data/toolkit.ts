import type { ToolkitItem } from '../types'

/**
 * Agency toolkit — tools, frameworks and methodologies used in production.
 * Grouped by ToolkitCategory for display in ToolkitGrid.
 *
 * iconKind: 'initials' renders styled initials from the tool name.
 * iconKind: 'css-mark' renders a pure CSS geometric shape.
 *
 * WordPress equivalent: ACF repeater 'toolkit_items' on Méthode and Expertise pages.
 */
const toolkit: ToolkitItem[] = [

  /* ── Stratégie ── */
  {
    name: 'Audit stratégique',
    description: 'Analyse complète de votre présence digitale, de vos concurrents et de vos opportunités de croissance.',
    iconPlaceholder: 'AS',
    iconKind: 'initials',
    category: 'Stratégie',
    label: 'Méthode maison',
    status: 'actif',
  },
  {
    name: 'Design Thinking',
    description: 'Méthode d\'innovation centrée sur l\'utilisateur pour concevoir des solutions adaptées aux vrais besoins.',
    iconPlaceholder: 'DT',
    iconKind: 'initials',
    category: 'Stratégie',
    label: 'Méthode',
    status: 'actif',
  },
  {
    name: 'Roadmap produit',
    description: 'Feuille de route priorisée pour aligner les investissements digitaux sur les objectifs business.',
    iconPlaceholder: 'RM',
    iconKind: 'initials',
    category: 'Stratégie',
    label: 'Livrable',
    status: 'actif',
  },

  /* ── Design ── */
  {
    name: 'Figma',
    description: 'Conception d\'interfaces et de prototypes interactifs. Système de design partagé avec les développeurs.',
    iconPlaceholder: 'FG',
    iconKind: 'initials',
    category: 'Design',
    label: 'Outil principal',
    status: 'actif',
    url: '/expertises/digital/creation-site-internet',
  },
  {
    name: 'Système de design',
    description: 'Bibliothèques de composants réutilisables pour garantir cohérence et rapidité d\'exécution.',
    iconPlaceholder: 'SD',
    iconKind: 'initials',
    category: 'Design',
    label: 'Méthode',
    status: 'actif',
  },
  {
    name: 'Tests utilisateurs',
    description: 'Sessions de test avec utilisateurs réels pour valider les choix d\'interface avant développement.',
    iconPlaceholder: 'TU',
    iconKind: 'initials',
    category: 'Design',
    label: 'Validation',
    status: 'actif',
  },

  /* ── Développement ── */
  {
    name: 'React',
    description: 'Framework JavaScript pour des interfaces dynamiques, performantes et maintenables à grande échelle.',
    iconPlaceholder: 'RC',
    iconKind: 'initials',
    category: 'Développement',
    label: 'Frontend',
    status: 'actif',
  },
  {
    name: 'TypeScript',
    description: 'JavaScript typé pour des bases de code robustes, sans régressions et faciles à maintenir.',
    iconPlaceholder: 'TS',
    iconKind: 'initials',
    category: 'Développement',
    label: 'Langage',
    status: 'actif',
  },
  {
    name: 'Vite',
    description: 'Outil de build ultra-rapide pour le développement moderne d\'applications web.',
    iconPlaceholder: 'VI',
    iconKind: 'initials',
    category: 'Développement',
    label: 'Build',
    status: 'actif',
  },

  /* ── WordPress ── */
  {
    name: 'WordPress',
    description: 'CMS de référence pour les sites d\'agence — flexible, extensible et maîtrisé par les équipes contenu.',
    iconPlaceholder: 'WP',
    iconKind: 'initials',
    category: 'WordPress',
    label: 'CMS principal',
    status: 'actif',
    url: '/expertises/digital/refonte-site-internet',
  },
  {
    name: 'Elementor Pro',
    description: 'Constructeur de pages visuel pour WordPress — templates réutilisables et intégration ACF.',
    iconPlaceholder: 'EL',
    iconKind: 'initials',
    category: 'WordPress',
    label: 'Page builder',
    status: 'actif',
  },
  {
    name: 'ACF Pro',
    description: 'Champs personnalisés avancés pour WordPress — types de contenu flexibles et repeaters structurés.',
    iconPlaceholder: 'AC',
    iconKind: 'initials',
    category: 'WordPress',
    label: 'Extension',
    status: 'actif',
  },

  /* ── Performance ── */
  {
    name: 'Core Web Vitals',
    description: 'Métriques Google de performance utilisateur — LCP, INP, CLS — suivies et optimisées en continu.',
    iconPlaceholder: 'CW',
    iconKind: 'initials',
    category: 'Performance',
    label: 'Mesure',
    status: 'actif',
    url: '/expertises/digital/optimisation-conversions',
  },
  {
    name: 'Analytics avancé',
    description: 'Configuration et exploitation des données de comportement utilisateur pour orienter les décisions.',
    iconPlaceholder: 'GA',
    iconKind: 'initials',
    category: 'Performance',
    label: 'Outil',
    status: 'actif',
  },

  /* ── Automatisation ── */
  {
    name: 'Make (Integromat)',
    description: 'Orchestration de workflows automatisés entre applications — sans code ou en low-code.',
    iconPlaceholder: 'MK',
    iconKind: 'initials',
    category: 'Automatisation',
    label: 'Workflow',
    status: 'actif',
    url: '/expertises/ia/automatisation-ia',
  },
  {
    name: 'n8n',
    description: 'Outil d\'automatisation open-source pour des workflows complexes hébergés en interne.',
    iconPlaceholder: 'N8',
    iconKind: 'initials',
    category: 'Automatisation',
    label: 'Workflow',
    status: 'actif',
    url: '/expertises/ia/automatisation-ia',
  },
  {
    name: 'Zapier',
    description: 'Connecteur universel d\'applications pour des automatisations rapides sans infrastructure dédiée.',
    iconPlaceholder: 'ZP',
    iconKind: 'initials',
    category: 'Automatisation',
    label: 'Intégration',
    status: 'actif',
  },

  /* ── Intelligence Artificielle ── */
  {
    name: 'OpenAI API',
    description: 'Accès aux modèles GPT-4o et embeddings pour créer des applications IA sur mesure.',
    iconPlaceholder: 'OA',
    iconKind: 'initials',
    category: 'Intelligence Artificielle',
    label: 'LLM',
    status: 'actif',
    url: '/expertises/ia/ia-pour-les-entreprises',
  },
  {
    name: 'LangChain',
    description: 'Framework pour construire des chaînes de traitement LLM — agents, mémoire et retrieval.',
    iconPlaceholder: 'LC',
    iconKind: 'initials',
    category: 'Intelligence Artificielle',
    label: 'Framework',
    status: 'beta',
    url: '/expertises/ia/ia-pour-les-entreprises',
  },
  {
    name: 'RAG & bases vectorielles',
    description: 'Retrieval-Augmented Generation pour ancrer les réponses IA dans votre documentation interne.',
    iconPlaceholder: 'RV',
    iconKind: 'initials',
    category: 'Intelligence Artificielle',
    label: 'Architecture',
    status: 'actif',
  },

  /* ── Collaboration ── */
  {
    name: 'Notion',
    description: 'Espace de travail partagé pour la gestion de projet, la documentation et la base de connaissances.',
    iconPlaceholder: 'NT',
    iconKind: 'initials',
    category: 'Collaboration',
    label: 'Workspace',
    status: 'actif',
  },
  {
    name: 'Loom',
    description: 'Enregistrement vidéo asynchrone pour les livrables, les formations et les revues de sprint.',
    iconPlaceholder: 'LO',
    iconKind: 'initials',
    category: 'Collaboration',
    label: 'Async',
    status: 'actif',
  },
]

export default toolkit
