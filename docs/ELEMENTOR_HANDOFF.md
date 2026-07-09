# Guide de handoff Elementor — Agency Hybrid Prototype

Ce document est destiné à l'équipe de reconstruction WordPress / Elementor. Il mappe chaque composant du prototype vers son équivalent Elementor, documente les tokens CSS en tant que styles globaux Elementor, et identifie les composants nécessitant du JavaScript personnalisé ou des plugins tiers.

---

## Correspondance tokens → styles globaux Elementor

Les tokens CSS du prototype correspondent aux paramètres de design global d'Elementor Pro.

### Couleurs

| Token CSS | Rôle | Emplacement Elementor |
|---|---|---|
| `--color-bg-dark` | Fond principal sombre | Site Settings → Global Colors |
| `--color-bg-white` | Fond blanc | Site Settings → Global Colors |
| `--color-text-white` | Texte sur fond sombre | Site Settings → Global Colors |
| `--color-text-navy` | Texte foncé sur fond blanc | Site Settings → Global Colors |
| `--color-digital-blue` | Accent Digital | Site Settings → Global Colors |
| `--color-ia-violet` | Accent IA (violet) | Site Settings → Global Colors |
| `--color-ia-magenta` | Accent IA (magenta) | Site Settings → Global Colors |
| `--color-conseil-coral` | Accent Conseil | Site Settings → Global Colors |
| `--color-cta-blue` | Fond section CTA | Site Settings → Global Colors |

### Typographie

| Token CSS | Rôle | Emplacement Elementor |
|---|---|---|
| `--font-display` (Barlow Condensed) | Titres éditoriaux | Site Settings → Global Fonts → Primary Heading |
| `--font-body` (Space Grotesk) | Corps de texte, navigation | Site Settings → Global Fonts → Body |

### Espacements

| Token CSS | Valeur | Note Elementor |
|---|---|---|
| `--space-xs` | 4px | Valeur minimale de padding/margin |
| `--space-sm` | 8px | — |
| `--space-md` | 16px | — |
| `--space-lg` | 32px | — |
| `--space-xl` | 64px | Espacement interne de section courant |
| `--space-2xl` | 96px | Espacement vertical de section large |
| `--space-3xl` | 128px | Espacement vertical de section pleine hauteur |

### Conteneurs

| Token CSS | Valeur | Réglage Elementor |
|---|---|---|
| `--container-reading` | 720px | Largeur max du widget Texte en colonnes éditoriales |
| `--container-content` | 1240px | Largeur de contenu par défaut du site |
| `--container-wide` | 1560px | Largeur étendue pour sections avec rails |

---

## Registre de difficulté des composants

_(Les lignes sont peuplées au fur et à mesure que les composants sont construits et approuvés)_

| Composant | Phase | Difficulté Elementor | Notes |
|---|---|---|---|
| `SiteHeader` Variante A | 2 | Élevée | Menu plein écran — JS personnalisé requis |
| `SiteHeader` Variante B | 2 | Moyenne | Navigation horizontale native Elementor |
| `FullscreenMenu` | 2 | Élevée | Overlay JS — pas de widget natif Elementor |
| `PrimaryButton` | 2 | Faible | Widget Button natif Elementor |
| `DarkEditorialHero` | 2 | Élevée | CSS text-stroke — classe CSS personnalisée requise |
| `GradientHero` | 2 | Moyenne | Section pleine hauteur avec fond dégradé |
| `HorizontalCaseStudyCarousel` | 3 | Élevée | Plugin carousel ou widget personnalisé requis |
| `ExpertiseSplitSection` | 3 | Moyenne | Conteneur deux colonnes Elementor |
| `ToolkitGrid` | 3 | Faible | Grille de widgets Image + Texte |
| `InsightsGrid` | 3 | Moyenne | Archive dynamique ou loop Elementor Pro |
| `FAQAccordion` | 3 | Moyenne | Widget Toggle natif Elementor |
| `ContactForm` | 3 | Faible | Plugin Contact Form 7 ou WPForms |
| `UtilityFooter` | 3 | Faible | Template de pied de page Elementor |

---

## Registre de plugins recommandés

| Fonctionnalité | Plugin recommandé |
|---|---|
| Formulaires de contact | Contact Form 7 ou WPForms |
| Slider / Carousel | Swiper intégré Elementor ou Smart Slider 3 |
| Filtrage de contenu | JetSmartFilters (JetPlugins) |
| Types de contenu personnalisés | CPT UI + ACF Pro |
| SEO | Yoast SEO ou SEOPress |

---

## Registre de classes CSS personnalisées

_(Peuplé au fur et à mesure des composants construits)_

| Classe CSS | Composant | Description |
|---|---|---|
| `.text-outline` | Titres éditoriaux | Texte en contour via `-webkit-text-stroke` |
| `.container` | Tous | Largeur max + padding horizontal responsif |
| `.container--reading` | Sections éditoriales | Largeur limitée à `--container-reading` |
| `.container--wide` | Sections avec rails | Largeur étendue `--container-wide` |

---

## Registre des groupes de champs ACF

_(Peuplé au fur et à mesure des templates construits)_

| Groupe ACF | CPT / Page | Phase |
|---|---|---|
| `expertise_fields` | CPT `expertise` | Phase 5 |
| `realisation_fields` | CPT `realisation` | Phase 9 |
| `team_member_fields` | CPT `team_member` | Phase 10 |
| `method_fields` | Page Méthode (statique) | Phase 8 |
| `agence_fields` | Page Agence (statique) | Phase 10 |
| `global_settings` | Options ACF | Phase 2 |

---

## Notes sur les interactions complexes

Les éléments suivants nécessiteront du JavaScript personnalisé dans WordPress et sont documentés ici pour anticiper l'effort de reconstruction :

**Menu plein écran** : gestion du focus, verrouillage du scroll, fermeture par Escape, restauration du focus. Structure HTML et classes CSS documentées précisément dans le composant `FullscreenMenu`.

**Carrousel de cas clients** : scroll-snap natif CSS + boutons prev/next. Peut être remplacé par un plugin JavaScript en WordPress tout en préservant la structure HTML documentée.

**Filtres de contenu** (Réalisations, Blog) : déclenchés en JavaScript côté client dans le prototype. En WordPress, géré par JetSmartFilters ou un filtrage AJAX personnalisé.

**Titres en contour** (`-webkit-text-stroke`) : propriété CSS standard, applicable via une classe personnalisée dans l'éditeur Elementor. Compatible avec tous les navigateurs modernes.

**Sections split avec maquettes débordantes** : `overflow: visible` sur le conteneur avec une valeur de `z-index` documentée. Reproduisible dans Elementor avec un positionnement absolu sur un widget Image.
