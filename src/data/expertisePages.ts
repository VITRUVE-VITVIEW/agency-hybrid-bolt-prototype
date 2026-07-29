import type { ExpertisePage } from '../types'

/**
 * All 11 registered expertise pages.
 * Routes match exactly the paths declared in src/data/routes.ts.
 * Five pages are marked priority: true — they receive enhanced hero treatment.
 *
 * WordPress equivalent: CPT 'expertise' with taxonomy 'pillar'.
 */
const expertisePages: ExpertisePage[] = [

  /* ── DIGITAL ── */
  {
    slug: 'creation-site-internet',
    pillar: 'digital',
    title: 'Création de site internet',
    route: '/expertises/digital/creation-site-internet',
    priority: false,
    positioning: 'Votre premier contact digital, conçu pour durer.',
    headline: 'Créer un site qui\ntravaille pour vous',
    problemStatement:
      'Un site mal conçu coûte des clients avant même le premier message. Nous construisons des sites rapides, accessibles et orientés résultat.',
    approachTitle: 'Conception centrée sur la performance',
    approachBody:
      'Notre approche combine audit de contexte, stratégie de contenu, design UX éprouvé et développement sur mesure. Chaque décision est guidée par vos objectifs commerciaux.',
    mockupVariant: 'device-frame',
    metaDescription:
      'Création de site internet sur mesure par une agence digitale française. Sites rapides, accessibles et pensés pour convertir.',
    toolkitItems: [],
    relatedProjectSlugs: [],
  },
  {
    slug: 'refonte-site-internet',
    pillar: 'digital',
    title: 'Refonte de site internet',
    route: '/expertises/digital/refonte-site-internet',
    priority: true,
    positioning: 'Transformez un site existant en moteur de croissance.',
    headline: 'Refondre pour\nmieux performer',
    problemStatement:
      'Un site vieillissant freine votre crédibilité et vos conversions. La refonte est l\'opportunité de repartir sur des bases solides, alignées avec vos ambitions actuelles.',
    approachTitle: 'Diagnostic, stratégie, exécution',
    approachBody:
      'Nous auditonsvotre site existant, identifions les points de friction, définissons une architecture de l\'information efficace et livrons une refonte complète — design, développement et contenu.',
    mockupVariant: 'print-frame',
    metaDescription:
      'Refonte de site internet par une agence digitale française. Diagnostic complet, UX repensé, performances optimisées.',
    toolkitItems: [],
    relatedProjectSlugs: ['orizon-digital'],
    proof: {
      value: '+58 %',
      label: 'de conversions en moyenne après refonte',
    },
  },
  {
    slug: 'optimisation-conversions',
    pillar: 'digital',
    title: 'Optimisation des conversions',
    route: '/expertises/digital/optimisation-conversions',
    priority: true,
    positioning: 'Plus de trafic ne suffit pas — il faut convertir.',
    headline: 'Convertir davantage\nsans changer de budget',
    problemStatement:
      'La plupart des sites perdent 97 % de leurs visiteurs sans action. L\'optimisation des conversions transforme ce potentiel invisible en clients réels.',
    approachTitle: 'Tests, données, itérations',
    approachBody:
      'Nous analysons le parcours utilisateur, identifions les points de fuite, formulons des hypothèses et déployons des tests A/B structurés. Chaque amélioration est validée par la donnée.',
    mockupVariant: 'abstract-grid',
    metaDescription:
      'Optimisation du taux de conversion (CRO) par une agence digitale française. Audit UX, tests A/B et mesure des résultats.',
    toolkitItems: [],
    relatedProjectSlugs: [],
    proof: {
      value: '+38 %',
      label: 'de taux de conversion moyen sur les pages optimisées',
    },
  },
  {
    slug: 'strategie-digitale',
    pillar: 'digital',
    title: 'Stratégie digitale',
    route: '/expertises/digital/strategie-digitale',
    priority: false,
    positioning: 'Une vision claire avant chaque investissement digital.',
    headline: 'Construire une\nstratégie durable',
    problemStatement:
      'Sans cap stratégique, les investissements digitaux se dispersent et les résultats restent fragmentaires. Nous vous aidons à choisir les bons canaux, les bons formats, au bon moment.',
    approachTitle: 'Analyse, priorisation, feuille de route',
    approachBody:
      'Nous réalisons un audit de votre présence digitale, analysons votre marché et vos concurrents, puis construisons une feuille de route actionnable alignée sur vos ressources et vos ambitions.',
    mockupVariant: 'gradient-dark',
    metaDescription:
      'Stratégie digitale sur mesure par une agence française. Audit, positionnement, feuille de route et accompagnement opérationnel.',
    toolkitItems: [],
    relatedProjectSlugs: [],
  },

  /* ── IA ── */
  {
    slug: 'ia-pour-les-entreprises',
    pillar: 'ia',
    title: 'IA pour les entreprises',
    route: '/expertises/ia/ia-pour-les-entreprises',
    priority: true,
    positioning: 'L\'intelligence artificielle — de la démonstration à l\'usage réel.',
    headline: 'Intégrer l\'IA\ndans votre entreprise',
    problemStatement:
      'L\'IA génère autant de bruit que d\'enthousiasme. La difficulté n\'est pas de l\'adopter, c\'est de l\'ancrer dans des processus métier qui créent une valeur mesurable.',
    approachTitle: 'Audit, pilote, déploiement',
    approachBody:
      'Nous identifions les cas d\'usage à fort impact dans votre organisation, concevons un pilote rapide pour valider la faisabilité, puis accompagnons le déploiement à l\'échelle avec formation des équipes.',
    mockupVariant: 'gradient-ia',
    metaDescription:
      'Intégration de l\'intelligence artificielle en entreprise par une agence spécialisée. Cas d\'usage, pilotes et déploiement opérationnel.',
    toolkitItems: [],
    relatedProjectSlugs: ['nova-finance'],
    proof: {
      value: '3×',
      label: 'de productivité sur les tâches répétitives',
    },
  },
  {
    slug: 'automatisation-ia',
    pillar: 'ia',
    title: 'Automatisation IA',
    route: '/expertises/ia/automatisation-ia',
    priority: true,
    positioning: 'Automatisez les tâches répétitives — libérez vos équipes.',
    headline: 'Automatiser\npour accélérer',
    problemStatement:
      'Les équipes perdent en moyenne 30 % de leur temps sur des tâches répétitives à faible valeur ajoutée. L\'automatisation IA libère ce potentiel pour des missions qui comptent vraiment.',
    approachTitle: 'Cartographie, orchestration, supervision',
    approachBody:
      'Nous cartographions vos flux de travail existants, identifions les goulots d\'étranglement automatisables, concevons des workflows IA et mettons en place un tableau de bord de supervision.',
    mockupVariant: 'abstract-grid',
    metaDescription:
      'Automatisation des processus métier par l\'IA. Workflows intelligents, gains opérationnels mesurables et formation des équipes.',
    toolkitItems: [],
    relatedProjectSlugs: [],
    proof: {
      value: '−40 %',
      label: 'de temps opérationnel sur les processus automatisés',
    },
  },
  {
    slug: 'formation-ia',
    pillar: 'ia',
    title: 'Formation IA',
    route: '/expertises/ia/formation-ia',
    priority: true,
    positioning: 'Comprendre l\'IA pour en faire un allié, pas un mystère.',
    headline: 'Former vos équipes\nà l\'intelligence artificielle',
    problemStatement:
      'L\'adoption de l\'IA échoue souvent par manque de compréhension interne. Une équipe formée est une équipe qui adopte, expérimente et améliore — sans dépendre de l\'externe.',
    approachTitle: 'Programmes adaptés, mise en pratique immédiate',
    approachBody:
      'Nous concevons des formations sur mesure selon le niveau et le contexte métier de vos équipes : des ateliers de découverte aux programmes avancés pour les profils techniques ou décisionnels.',
    mockupVariant: 'print-frame',
    metaDescription:
      'Formation à l\'intelligence artificielle pour les entreprises. Programmes sur mesure, cas pratiques et accompagnement post-formation.',
    toolkitItems: [],
    relatedProjectSlugs: [],
    proof: {
      value: '94 %',
      label: 'de participants recommandent nos formations',
    },
  },

  /* ── CONSEIL ── */
  {
    slug: 'conseil-positionnement',
    pillar: 'conseil',
    title: 'Conseil & positionnement',
    route: '/expertises/conseil/conseil-positionnement',
    priority: false,
    positioning: 'Savoir qui vous êtes — et comment le faire savoir.',
    headline: 'Clarifier votre\npositionnement',
    problemStatement:
      'Un positionnement flou dilue chaque euro investi en communication. Avant de parler, il faut savoir exactement ce que vous apportez — et à qui.',
    approachTitle: 'Diagnostic, différenciation, narration',
    approachBody:
      'Nous menons des entretiens approfondis, analysons votre marché et vos concurrents, puis construisons une plateforme de marque claire : positionnement, promesse, territoire d\'expression.',
    mockupVariant: 'gradient-conseil',
    metaDescription:
      'Conseil en positionnement stratégique par une agence française. Définition de votre proposition de valeur et de votre territoire de marque.',
    toolkitItems: [],
    relatedProjectSlugs: [],
  },
  {
    slug: 'image-de-marque',
    pillar: 'conseil',
    title: 'Image de marque',
    route: '/expertises/conseil/image-de-marque',
    priority: false,
    positioning: 'Une identité visuelle qui dit ce que les mots ne disent pas.',
    headline: 'Construire une\nmarque mémorable',
    problemStatement:
      'Une marque faible invisibilise même les meilleurs produits. L\'image de marque est la première impression que vous laissez — elle doit être juste, cohérente et distincte.',
    approachTitle: 'Identité, cohérence, déploiement',
    approachBody:
      'Nous créons ou refondons votre identité visuelle — logo, palette, typographie, systèmes graphiques — puis en assurons le déploiement cohérent sur tous vos supports.',
    mockupVariant: 'print-frame',
    metaDescription:
      'Création et refonte d\'image de marque par une agence française. Identité visuelle, charte graphique et déploiement multicanal.',
    toolkitItems: [],
    relatedProjectSlugs: ['lumia-studio'],
  },
  {
    slug: 'innovation',
    pillar: 'conseil',
    title: 'Innovation',
    route: '/expertises/conseil/innovation',
    priority: false,
    positioning: 'Innover avec méthode — pas au hasard.',
    headline: 'Structurer\nvos démarches d\'innovation',
    problemStatement:
      'L\'innovation sans méthode produit de l\'agitation sans valeur. Nous apportons les cadres pour générer, qualifier et déployer des initiatives qui changent vraiment la donne.',
    approachTitle: 'Exploration, prototypage, validation',
    approachBody:
      'Design thinking, sprint d\'innovation, tests utilisateurs rapides — nous accompagnons vos équipes de l\'idéation à la validation, en réduisant les risques à chaque étape.',
    mockupVariant: 'abstract-grid',
    metaDescription:
      'Accompagnement en démarches d\'innovation par une agence française. Design thinking, prototypage et validation par les usages.',
    toolkitItems: [],
    relatedProjectSlugs: [],
  },
  {
    slug: 'accompagnement-equipes',
    pillar: 'conseil',
    title: 'Accompagnement des équipes',
    route: '/expertises/conseil/accompagnement-equipes',
    priority: false,
    positioning: 'Les meilleures stratégies échouent sans les bonnes équipes.',
    headline: 'Aligner et\ndévelopper vos équipes',
    problemStatement:
      'La transformation digitale et l\'adoption de l\'IA exigent que les équipes évoluent en même temps que les outils. Sans accompagnement humain, les meilleures technologies restent sous-utilisées.',
    approachTitle: 'Diagnostic, formation, ancrage',
    approachBody:
      'Nous combinons diagnostic organisationnel, ateliers de montée en compétences et coaching opérationnel pour créer un ancrage durable des nouvelles pratiques au quotidien.',
    mockupVariant: 'gradient-dark',
    metaDescription:
      'Accompagnement des équipes dans la transformation digitale et l\'adoption de l\'IA. Formation, coaching et changement durable.',
    toolkitItems: [],
    relatedProjectSlugs: [],
  },
]

export default expertisePages
