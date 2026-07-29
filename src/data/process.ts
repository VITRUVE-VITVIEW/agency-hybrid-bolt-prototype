import type { ProcessStep } from '../types'

/**
 * Six-step agency method — used in ProcessTimeline and Méthode page.
 *
 * WordPress equivalent: ACF repeater 'method_steps' on Méthode page.
 */
const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Cadrage',
    description:
      'Nous prenons le temps de comprendre votre contexte, vos enjeux et vos objectifs avant d\'engager la moindre ressource. Un projet bien cadré est un projet qui aboutit.',
    deliverables: [
      'Note de cadrage',
      'Définition des objectifs mesurables',
      'Périmètre validé',
    ],
    durationLabel: '1 semaine',
    theme: 'neutral',
  },
  {
    number: 2,
    title: 'Diagnostic',
    description:
      'Audit de l\'existant, analyse des données disponibles, identification des points de friction et des opportunités. Le diagnostic révèle ce que l\'intuition seule ne suffit pas à voir.',
    deliverables: [
      'Rapport d\'audit',
      'Analyse concurrentielle',
      'Carte des opportunités',
    ],
    durationLabel: '1–2 semaines',
    theme: 'digital',
  },
  {
    number: 3,
    title: 'Stratégie',
    description:
      'À partir du diagnostic, nous construisons une feuille de route claire — priorisée, réaliste et directement liée à vos objectifs business. Chaque choix est justifié et tracé.',
    deliverables: [
      'Feuille de route priorisée',
      'Plan d\'action détaillé',
      'Indicateurs de succès',
    ],
    durationLabel: '1–2 semaines',
    theme: 'ia',
  },
  {
    number: 4,
    title: 'Conception',
    description:
      'Design, prototypage et validation — nous construisons d\'abord ce qui sera vu et utilisé. Les équipes techniques et les parties prenantes valident avant que la première ligne de code soit écrite.',
    deliverables: [
      'Wireframes et maquettes',
      'Prototype interactif',
      'Validation utilisateurs',
    ],
    durationLabel: '2–4 semaines',
    theme: 'conseil',
  },
  {
    number: 5,
    title: 'Production',
    description:
      'Développement, intégration ou déploiement selon la nature du projet. Nous travaillons en cycles courts avec des points de validation réguliers pour rester alignés et maintenir la qualité.',
    deliverables: [
      'Livraisons itératives',
      'Tests qualité',
      'Documentation technique',
    ],
    durationLabel: '2–8 semaines',
    theme: 'digital',
  },
  {
    number: 6,
    title: 'Mesure & optimisation',
    description:
      'Le lancement n\'est pas la fin. Nous mettons en place les outils de mesure, analysons les premiers retours et optimisons en continu pour que les résultats s\'améliorent dans le temps.',
    deliverables: [
      'Tableau de bord de suivi',
      'Rapport de performance',
      'Plan d\'optimisation continue',
    ],
    durationLabel: 'Continu',
    theme: 'ia',
  },
]

export default processSteps
