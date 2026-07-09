# Agency Hybrid Prototype

Prototype haute-fidélité et entièrement responsive pour une agence française spécialisée en stratégie digitale, intelligence artificielle et conseil.

Le site de production final sera reconstruit avec WordPress et Elementor. Ce prototype sert à la fois de référence de design validée et de documentation d'implémentation précise pour l'équipe WordPress.

---

## Installation

```bash
npm install
```

## Développement

Le serveur de développement démarre automatiquement dans cet environnement. Pour un usage local :

```bash
npm run dev
```

## Build de production

```bash
npm run build
```

## Vérification TypeScript

```bash
npm run typecheck
```

---

## Structure du projet

```
project/
├── docs/                          Documentation du projet
│   ├── reference-analysis/        Analyses des captures d'écran de référence
│   ├── DESIGN_SYSTEM.md           Tokens, typographie, couleurs, espacement, composants Phase 2
│   ├── PROJECT_ARCHITECTURE.md    Architecture technique et conventions
│   ├── REFERENCE_MAP.md           Correspondance images de référence / analyses
│   ├── CONTENT_MODEL.md           Modèles de données TypeScript et mapping WordPress
│   ├── ELEMENTOR_HANDOFF.md       Guide de reconstruction WordPress / Elementor
│   └── QA_CHECKLIST.md            Critères de validation par phase
├── public/
│   └── references/                16 captures d'écran de référence visuelle
├── src/
│   ├── config/
│   │   └── agency.config.ts       Configuration centralisée (nom, tagline, liens sociaux)
│   ├── components/
│   │   ├── BackToTop/             Bouton retour en haut
│   │   ├── Button/                5 variantes de bouton + IconButton
│   │   ├── DemoFrame/             Conteneur de démonstration Style Lab
│   │   ├── FullscreenMenu/        Menu overlay plein écran
│   │   ├── Header/                HeaderNavigation + HeaderMinimal
│   │   ├── Hero/                  HeroDarkEditorial, HeroGradient, HeroHybrid, HeroHeadline
│   │   ├── MobileMenu/            Menu mobile avec backdrop
│   │   ├── Modal/                 Modale accessible
│   │   ├── ScrollIndicator/       Indicateur de défilement animé
│   │   ├── SocialRail/            Rail d'icônes sociales latéral
│   │   └── VerticalRail/          Label vertical rotatif
│   ├── data/
│   │   ├── heroData.ts            Données centralisées des trois variantes de héros
│   │   ├── navigation.ts          Arborescence de navigation publique
│   │   └── routes.ts              Registre complet des 27 routes connues
│   ├── hooks/
│   │   ├── useBodyScrollLock.ts   Verrouillage du scroll lors de l'ouverture d'un menu
│   │   ├── useEscapeKey.ts        Fermeture par touche Escape
│   │   └── useFocusTrap.ts        Gestion du focus dans les overlays
│   ├── pages/                     Un fichier par route
│   ├── styles/
│   │   ├── reset.css              Normalisation des styles par défaut
│   │   ├── tokens.css             Toutes les variables CSS (couleurs, typo, espacement…)
│   │   ├── typography.css         Chargement des polices et styles de base des éléments
│   │   └── global.css             Point d'entrée CSS
│   ├── types/
│   │   └── index.ts               14 interfaces TypeScript avec mapping WordPress
│   └── utils/
│       └── bodyScrollLock.ts      Utilitaire de verrouillage du scroll
└── index.html                     Point d'entrée HTML
```

---

## Phase en cours

**Phase 3 — Style Lab complet**

Statut : en attente de démarrage

---

## Phases complétées

### Phase 2 — Composants globaux, navigation, héros

Statut : **TERMINÉ ET APPROUVÉ — 2026-07-09**

Composants livrés et approuvés :

- `HeaderNavigation` (Esprit 02) et `HeaderMinimal` (Esprit 01) avec variante transparente
- `FullscreenMenu` et `MobileMenu` — gestion complète du focus et du scroll
- Trois variantes de héros : `HeroDarkEditorial`, `HeroGradient`, `HeroHybrid`
- Cinq variantes de bouton : `primary`, `secondary`, `light`, `dark`, `editorial`
- `SocialRail` avec icône X SVG réelle et filtre des URLs plateaux
- `VerticalRail`, `ScrollIndicator`, `BackToTop`, `Modal`

Corrections de conformité appliquées :
- Segment outline blanc explicite sur `HeroDarkEditorial` (`'Hybride'`, `-webkit-text-stroke: var(--stroke-width) var(--color-text-white)`)
- Tokens `--color-btn-dark-border` et `--color-btn-dark-border-hover` ajoutés — aucune couleur hexadécimale codée en dur dans `Button.css`
- En-tête transparent : liens et logo en blanc avec états hover et focus-visible visibles
- Icône X Twitter : chemin SVG officiel du logotype X remplace l'ancien tracé incorrect

### Phase 1 — Fondation, tokens, routing et documentation

Statut : **TERMINÉ ET APPROUVÉ**

Fondations techniques, système de tokens, routing, documentation initiale.

---

## Style Lab

Route privée accessible à l'adresse `/style-lab` — surface de comparaison interne pour valider les variantes de composants avant leur intégration dans les pages publiques.

Non accessible depuis la navigation publique.

---

## Note de production

Ce prototype ne contient pas de backend ni de base de données. Toutes les données de contenu sont des fichiers TypeScript typés situés dans `src/data/`.

Le site de production final sera reconstruit avec **WordPress** et **Elementor**. Consulter `docs/ELEMENTOR_HANDOFF.md` pour les correspondances composants / Elementor.
