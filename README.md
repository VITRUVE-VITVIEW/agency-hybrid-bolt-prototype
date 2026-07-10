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
│   ├── DESIGN_SYSTEM.md           Tokens, typographie, couleurs, espacement, composants Phase 2–3A
│   ├── PROJECT_ARCHITECTURE.md    Architecture technique et conventions
│   ├── REFERENCE_MAP.md           Correspondance images de référence / analyses
│   ├── CONTENT_MODEL.md           Modèles de données TypeScript et mapping WordPress
│   ├── ELEMENTOR_HANDOFF.md       Guide de reconstruction WordPress / Elementor
│   └── QA_CHECKLIST.md            Critères de validation par phase (Phase 3A QA inclus)
├── public/
│   └── references/                16 captures d'écran de référence visuelle
├── src/
│   ├── config/
│   │   └── agency.config.ts       Configuration centralisée (nom, tagline, liens sociaux)
│   ├── components/
│   │   ├── BackToTop/             Bouton retour en haut
│   │   ├── Button/                5 variantes de bouton + IconButton
│   │   ├── DemoFrame/             Conteneur de démonstration Style Lab
│   │   ├── editorial/             Sections éditoriales réutilisables (Phase 3A)
│   │   ├── FullscreenMenu/        Menu overlay plein écran
│   │   ├── Header/                HeaderNavigation + HeaderMinimal
│   │   ├── Hero/                  HeroDarkEditorial, HeroGradient, HeroHybrid, HeroHeadline
│   │   ├── media/                 MediaPlaceholder (substitut CSS pour images de projet)
│   │   ├── MobileMenu/            Menu mobile avec backdrop
│   │   ├── Modal/                 Modale accessible
│   │   ├── projects/              Compositions de projets et carrousel (Phase 3A)
│   │   ├── ScrollIndicator/       Indicateur de défilement animé
│   │   ├── SocialRail/            Rail d'icônes sociales latéral
│   │   └── VerticalRail/          Label vertical rotatif
│   ├── data/
│   │   ├── editorialSections.ts   Données des sections éditoriales (Phase 3A)
│   │   ├── heroData.ts            Données centralisées des trois variantes de héros
│   │   ├── navigation.ts          Arborescence de navigation publique
│   │   ├── portfolio.ts           6 projets portfolio avec médias (Phase 3A)
│   │   ├── projects.ts            4 cas clients avec médias (Phase 3A)
│   │   └── routes.ts              Registre complet des 27 routes connues
│   ├── hooks/
│   │   ├── useBodyScrollLock.ts   Verrouillage du scroll lors de l'ouverture d'un menu
│   │   ├── useEscapeKey.ts        Fermeture par touche Escape
│   │   └── useFocusTrap.ts        Gestion du focus dans les overlays
│   ├── pages/
│   │   ├── style-lab/
│   │   │   └── StyleLabProjectsSection.tsx   Section projets/éditorial du Style Lab
│   │   ├── NotFound.tsx
│   │   ├── RoutePlaceholder.tsx
│   │   └── StyleLab.tsx
│   ├── styles/
│   │   ├── reset.css              Normalisation des styles par défaut
│   │   ├── tokens.css             Toutes les variables CSS (couleurs, typo, espacement…)
│   │   ├── typography.css         Chargement des polices et styles de base des éléments
│   │   └── global.css             Point d'entrée CSS
│   ├── types/
│   │   └── index.ts               Interfaces TypeScript avec mapping WordPress (Phase 1–3A)
│   └── utils/
│       ├── accentTheme.ts         Résolution AccentTheme → tokens CSS
│       └── bodyScrollLock.ts      Utilitaire de verrouillage du scroll
└── index.html                     Point d'entrée HTML
```

---

## Phase en cours

**Phase 3B — Style Lab : expertises, processus, footer**

---

## Phases complétées

### Phase 3A — Style Lab : projets, carrousel, portfolio, contenu éditorial

Statut : **QA CODE TERMINÉ — 2026-07-10**

Composants livrés :

- `ProjectEditorialSplit` — composition éditoriale 57/43 %, deux variantes (content-left / content-right)
- `ProjectTypographyFeature` — titre surdimensionné outline-only et mixed
- `CaseStudyCarousel` — carrousel scroll-snap natif, synchronisation `getBoundingClientRect`, `ResizeObserver`
- `CaseStudySlide` — slide individuelle avec média, titre, description, résultat et CTA
- `CarouselControls` — boutons prev/next avec état `disabled` aux bornes
- `CarouselPagination` — dots accessibles avec `aria-pressed`
- `PortfolioGrid` + `PortfolioCard` — grille 3 colonnes avec hover overlay
- `MediaPlaceholder` — 7 variantes CSS avec bandeau caption accessible
- `MinimalEditorialIntro`, `DarkEditorialIntro`, `StatementSection`, `NumberedEditorialSection`, `ImageTextSplit`

Données livrées :

- `src/data/projects.ts` — 4 cas clients (`CaseStudy`) avec métriques en français
- `src/data/portfolio.ts` — 6 projets portfolio (`PortfolioItem`) en français
- `src/data/editorialSections.ts` — données des sections éditoriales

Types ajoutés : `AccentTheme`, `MediaVariant`, `MediaRatio`, `ProjectMedia`, `ProjectCategory`

Utilitaires : `src/utils/accentTheme.ts` — résolution centralisée des thèmes d'accent

### Phase 2 — Composants globaux, navigation, héros

Statut : **TERMINÉ ET APPROUVÉ — 2026-07-09**

Composants livrés et approuvés :

- `HeaderNavigation` (Esprit 02) et `HeaderMinimal` (Esprit 01) avec variante transparente
- `FullscreenMenu` et `MobileMenu` — gestion complète du focus et du scroll
- Trois variantes de héros : `HeroDarkEditorial`, `HeroGradient`, `HeroHybrid`
- Cinq variantes de bouton : `primary`, `secondary`, `light`, `dark`, `editorial`
- `SocialRail` avec icône X SVG réelle et filtre des URLs plateaux
- `VerticalRail`, `ScrollIndicator`, `BackToTop`, `Modal`

### Phase 1 — Fondation, tokens, routing et documentation

Statut : **TERMINÉ ET APPROUVÉ**

Fondations techniques, système de tokens, routing, documentation initiale.

---

## Style Lab

Route privée accessible à l'adresse `/style-lab` — surface de comparaison interne pour valider les variantes de composants avant leur intégration dans les pages publiques.

Non accessible depuis la navigation publique.

Sections disponibles :
1. **Global** — en-têtes, menus, rails, boutons, modale
2. **Héros** — trois variantes (Esprit 01, Esprit 02, Hybride)
3. **Projets & contenus éditoriaux** — 13 spécimens (Phase 3A)
4. **Expertises** — slots Phase 3B
5. **Composants d'appui** — slots Phase 3B+

---

## Note de production

Ce prototype ne contient pas de backend ni de base de données. Toutes les données de contenu sont des fichiers TypeScript typés situés dans `src/data/`.

Le site de production final sera reconstruit avec **WordPress** et **Elementor**. Consulter `docs/ELEMENTOR_HANDOFF.md` pour les correspondances composants / Elementor.
