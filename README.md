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
│   ├── DESIGN_SYSTEM.md           Tokens, typographie, couleurs, espacement
│   ├── PROJECT_ARCHITECTURE.md    Architecture technique et conventions
│   ├── REFERENCE_MAP.md           Correspondance images de référence / analyses
│   ├── CONTENT_MODEL.md           Modèles de données TypeScript et mapping WordPress
│   ├── ELEMENTOR_HANDOFF.md       Guide de reconstruction WordPress / Elementor
│   └── QA_CHECKLIST.md            Critères de validation par phase
├── public/
│   └── references/                16 captures d'écran de référence visuelle
├── src/
│   ├── config/
│   │   └── agency.config.ts       Configuration centralisée de l'agence (nom, tagline, liens)
│   ├── components/                Composants réutilisables (Phase 2+)
│   ├── data/
│   │   ├── routes.ts              Registre complet des 27 routes connues
│   │   └── navigation.ts          Arborescence de navigation publique
│   ├── pages/                     Un fichier par route
│   ├── styles/
│   │   ├── reset.css              Normalisation des styles par défaut
│   │   ├── tokens.css             Toutes les variables CSS (couleurs, typo, espacement…)
│   │   ├── typography.css         Chargement des polices et styles de base des éléments
│   │   └── global.css             Point d'entrée CSS (importe les trois fichiers ci-dessus)
│   └── types/
│       └── index.ts               14 interfaces TypeScript avec mapping WordPress
└── index.html                     Point d'entrée HTML
```

---

## Phase en cours

**Phase 1 — Fondation, tokens, routing et documentation**

Statut : en cours de validation

Les pages publiques affichent une page "en préparation". Les composants et contenus de design seront construits lors des phases suivantes.

---

## Style Lab

Route privée accessible à l'adresse `/style-lab` — surface de comparaison interne pour valider les variantes de composants avant leur intégration dans les pages publiques.

Non accessible depuis la navigation publique.

---

## Note de production

Ce prototype ne contient pas de backend ni de base de données. Toutes les données de contenu sont des fichiers TypeScript typés situés dans `src/data/`.

Le site de production final sera reconstruit avec **WordPress** et **Elementor**. Consulter `docs/ELEMENTOR_HANDOFF.md` pour les correspondances composants / Elementor.
