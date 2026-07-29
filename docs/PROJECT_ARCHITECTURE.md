# Architecture du projet — Agency Hybrid Prototype

---

## Vue d'ensemble

Prototype frontend haute-fidélité pour une agence française opérant sur trois piliers : Digital, Intelligence Artificielle et Conseil.

Ce prototype sert simultanément de site fonctionnel et art-dirigé pour le public de l'agence, et de référence d'implémentation précise pour la reconstruction WordPress / Elementor ultérieure.

---

## Stack technologique

| Couche | Technologie |
|---|---|
| Framework UI | React 18 |
| Langage | TypeScript 5 |
| Bundler | Vite 5 |
| Routing | React Router v6 |
| Styles | CSS natif avec propriétés personnalisées |
| Données | Fichiers TypeScript typés dans `src/data/` |
| Dépendances UI | Aucune bibliothèque de composants tierce |

---

## Structure des répertoires

```
src/
├── config/
│   └── agency.config.ts       Objet de configuration centralisé de l'agence
├── components/
│   ├── media/                 Composants de média (MediaPlaceholder)
│   ├── projects/              Compositions de projets et carrousel (Phase 3A)
│   ├── editorial/             Sections éditoriales réutilisables (Phase 3A)
│   ├── expertise/             Cartes, sections et héros d'expertise (Phase 3B-1)
│   ├── toolkit/               Grille d'outils et cartes (Phase 3B-1)
│   ├── process/               Timeline, intro et section stratégie (Phase 3B-1)
│   ├── Hero/                  Trois variantes de héros (Phase 2)
│   ├── Header/                En-têtes (Phase 2)
│   ├── Button/                Boutons et IconButton (Phase 2)
│   ├── FullscreenMenu/        Menu plein écran (Phase 2)
│   ├── MobileMenu/            Menu mobile (Phase 2)
│   ├── Modal/                 Modale accessible (Phase 2)
│   ├── VerticalRail/          Rail vertical de section (Phase 2)
│   ├── SocialRail/            Rail social (Phase 2)
│   ├── ScrollIndicator/       Indicateur de défilement (Phase 2)
│   ├── BackToTop/             Bouton retour en haut (Phase 2)
│   └── DemoFrame/             Cadre de démonstration Style Lab (Phase 2)
├── data/
│   ├── routes.ts              Registre complet des 27 routes (source de vérité)
│   ├── navigation.ts          Arborescence de navigation publique uniquement
│   ├── heroData.ts            Données des héros (Phase 2)
│   ├── projects.ts            4 cas clients avec médias (Phase 3A)
│   ├── portfolio.ts           6 projets portfolio avec médias (Phase 3A)
│   ├── editorialSections.ts   Données des sections éditoriales (Phase 3A)
│   ├── expertiseCategories.ts 3 catégories de piliers avec routing et preuves (Phase 3B-1)
│   ├── expertisePages.ts      11 pages d'expertise (5 prioritaires) (Phase 3B-1)
│   ├── toolkit.ts             21 outils en 8 groupes avec statuts (Phase 3B-1)
│   ├── process.ts             6 étapes de méthode avec livrables (Phase 3B-1)
│   ├── expertises.ts          Données des pages d'expertise (Phase 5+)
│   ├── articles.ts            Données des articles de blog (Phase 11+)
│   ├── processSteps.ts        Étapes de la méthode (Phase 8+)
│   └── team.ts                Membres de l'équipe (Phase 10+)
├── pages/
│   ├── style-lab/
│   │   └── StyleLabProjectsSection.tsx   Chapitre projets/éditorial du Style Lab (Phase 3A)
│   │   └── StyleLabExpertiseProcessSection.tsx   Chapitre expertises/outils/méthode du Style Lab (Phase 3B-1)
│   ├── RoutePlaceholder.tsx   Rendu temporaire pour toutes les routes non construites
│   ├── NotFound.tsx           Rendu exclusif de la route wildcard (URL inconnues)
│   └── StyleLab.tsx           Surface de revue interne privée (/style-lab)
├── styles/
│   ├── reset.css              Normalisation des styles par défaut du navigateur
│   ├── tokens.css             Toutes les variables CSS de design
│   ├── typography.css         Chargement des polices, styles des éléments de base
│   └── global.css             Point d'entrée — importe reset, tokens, typography
├── types/
│   └── index.ts               Types TypeScript avec annotations WordPress (AccentTheme, MediaVariant, MediaRatio, ProjectMedia, ProjectCategory + modèles Phase 1-2)
└── utils/
    ├── accentTheme.ts         Résolution AccentTheme → tokens CSS centralisée
    └── routeValidator.ts          Validation de chemins contre routes statiques et patterns :slug
```

---

## Conventions de nommage

### Composants

| Catégorie | Convention | Exemple |
|---|---|---|
| Layout | PascalCase descriptif | `SiteHeader`, `SiteFooter`, `FullscreenMenu` |
| Sections | NomAction ou NomType | `HorizontalCaseStudyCarousel`, `ExpertiseSplitSection` |
| Atomes UI | Nom de l'élément | `PrimaryButton`, `ArticleCard`, `FAQAccordion` |
| Pages | NomPage | `HomePage`, `MethodePage`, `ContactPage` |

### Fichiers CSS

Chaque composant React dispose d'un fichier `.css` co-localisé de même nom. Les classes CSS utilisent la convention BEM légère : `.component-name__element--modifier`.

### Données

Les fichiers de données exportent soit un tableau typé par défaut, soit un objet nommé. Les slugs de routes correspondent exactement aux chemins déclarés dans `routes.ts`.

---

## Flux de données

1. Les données de contenu de chaque page résident dans des fichiers typés dans `src/data/`.
2. Les composants de section reçoivent le contenu en tant que props typées.
3. Les templates de pages détail résolvent leurs données en comparant le slug URL (via `useParams`) au tableau typé approprié au moment du rendu.
4. Aucun composant ne contient de contenu français codé en dur.
5. La configuration de marque est centralisée dans `src/config/agency.config.ts` et n'est jamais répétée inline dans les composants.

---

## Modèle de routing

Trois niveaux de rendu :

| Niveau | Composant | Condition |
|---|---|---|
| Implémenté | Page spécifique | La page est construite et approuvée |
| Connu mais non implémenté | `RoutePlaceholder` | Route déclarée, page pas encore construite |
| URL inconnue | `NotFound` | Wildcard `*` — aucune route ne correspond |

Le registre `src/data/routes.ts` est la source de vérité pour toutes les routes. `App.tsx` déclare toutes les routes statiquement sans lazy imports vers des fichiers inexistants.

---

## Architecture CSS

- **`reset.css`** : normalise les styles par défaut, pas de tokens.
- **`tokens.css`** : déclare toutes les variables CSS sur `:root`. Aucune autre feuille de style ne déclare de valeurs de design codées en dur.
- **`typography.css`** : un seul `@import` pour les polices. Styles de base des éléments HTML via les tokens `--font-*` uniquement.
- **`global.css`** : importe les trois fichiers ci-dessus. Ajoute les utilitaires globaux (`.container`, `.sr-only`, etc.).
- **CSS de composant** : chaque composant a son propre fichier `.css`. Les valeurs de design utilisent des tokens. Les valeurs structurelles locales (`100%`, `aspect-ratio`, `calc()`) sont acceptées.

Pas de CSS-in-JS. Pas de Tailwind. Pas de bibliothèques de composants lourdes.

---

## Contraintes WordPress et Elementor

- Les structures de sections doivent être compréhensibles et transférables vers des conteneurs Elementor.
- Les conteneurs utilisent des `max-width` cohérents (tokens `--container-*`).
- Les sections récurrentes sont des composants réutilisables.
- Le contenu dynamique (projets, expertises, articles de blog) est modélisé comme des templates pilotés par les données.
- Consulter `docs/ELEMENTOR_HANDOFF.md` pour les correspondances détaillées et les évaluations de difficulté.

---

## Index des phases

| Phase | Périmètre | Statut |
|---|---|---|
| 1 | Fondation, tokens, routing, documentation, shell Style Lab | Terminé |
| 2 | Composants globaux partagés, variantes de navigation, trois variantes de héros | Terminé |
| 3A | Style Lab étendu — projets, carrousel, portfolio, contenu éditorial | Terminé |
| 3B-1 | Style Lab — expertises, toolkit, méthode | Implémenté techniquement — validation visuelle humaine en attente |
| 3B | Style Lab — expertises, toolkit, insights, process, footer | À venir |
| 4 | Page d'accueil | À venir |
| 5 | Hub Expertises, trois hubs de catégories, template d'expertise réutilisable | À venir |
| 6 | 5 pages d'expertise prioritaires | À venir |
| 7 | 6 pages d'expertise restantes | À venir |
| 8 | Méthode | À venir |
| 9 | Réalisations, Cas clients, Portfolio, templates détail | À venir |
| 10 | Agence | À venir |
| 11 | Blog, template article, Contact | À venir |
| 12 | Revue responsive globale, accessibilité, performance, documentation, handoff Elementor | À venir |
