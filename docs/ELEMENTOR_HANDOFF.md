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
| `--color-btn-dark-border` | Bordure bouton dark (#444444) | Custom CSS global ou classe `.btn--dark` |
| `--color-btn-dark-border-hover` | Bordure bouton dark survol (#666666) | Custom CSS global ou classe `.btn--dark:hover` |

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

| Composant | Phase | Statut | Difficulté Elementor | Notes |
|---|---|---|---|---|
| `SiteHeader` Variante A (`HeaderMinimal`) | 2 | Approuvé | Élevée | Menu plein écran — JS personnalisé requis |
| `SiteHeader` Variante B (`HeaderNavigation`) | 2 | Approuvé | Moyenne | Navigation horizontale native Elementor |
| `FullscreenMenu` | 2 | Approuvé | Élevée | Overlay JS — pas de widget natif Elementor |
| `MobileMenu` | 2 | Approuvé | Élevée | Fermeture backdrop + gestion focus — JS personnalisé |
| `Button` (5 variantes) | 2 | Approuvé | Faible | Widget Button natif — appliquer classes `.btn--*` via Custom CSS |
| `DarkEditorialHero` | 2 | Approuvé | Élevée | CSS text-stroke — classe CSS personnalisée requise (voir ci-dessous) |
| `GradientHero` | 2 | Approuvé | Moyenne | Section pleine hauteur avec fond dégradé |
| `HybridHero` | 2 | Approuvé | Élevée | Mix deux esprits — nécessite classes `.text-outline` + `.display-editorial` |
| `SocialRail` | 2 | Approuvé | Faible | Rail fixe latéral — positionné via CSS ou widget HTML personnalisé |
| `VerticalRail` | 2 | Approuvé | Faible | Label vertical rotatif — CSS `writing-mode` |
| `ScrollIndicator` | 2 | Approuvé | Faible | Widget HTML + CSS animation |
| `BackToTop` | 2 | Approuvé | Faible | Bouton flottant — widget Elementor Go To Top ou JS minimal |
| `HorizontalCaseStudyCarousel` | 3 | — | Élevée | Plugin carousel ou widget personnalisé requis |
| `ExpertiseSplitSection` | 3 | — | Moyenne | Conteneur deux colonnes Elementor |
| `ToolkitGrid` | 3 | — | Faible | Grille de widgets Image + Texte |
| `InsightsGrid` | 3 | — | Moyenne | Archive dynamique ou loop Elementor Pro |
| `FAQAccordion` | 3 | — | Moyenne | Widget Toggle natif Elementor |
| `ContactForm` | 3 | — | Faible | Plugin Contact Form 7 ou WPForms |
| `UtilityFooter` | 3 | — | Faible | Template de pied de page Elementor |
| `ProjectEditorialSplit` (2 variantes) | 3A | Style Lab | Élevée | CSS Grid + text-stroke + grid lines — JS non requis |
| `ProjectTypographyFeature` | 3A | Style Lab | Élevée | CSS text-stroke, `clamp()` — classe `.text-outline` requise |
| `CaseStudyCarousel` | 3A | Style Lab | Élevée | scroll-snap natif + JS sync activeIndex — plugin ou widget custom en WordPress |
| `CaseStudySlide` | 3A | Style Lab | Élevée | Composant interne du carrousel |
| `CarouselControls` | 3A | Style Lab | Élevée | Boutons prev/next avec `disabled` natif |
| `CarouselPagination` | 3A | Style Lab | Élevée | Dots de pagination accessibles |
| `PortfolioGrid` | 3A | Style Lab | Moyenne | CSS Grid 3 colonnes + loop Elementor Pro ou CPT |
| `PortfolioCard` | 3A | Style Lab | Moyenne | Hover overlay — widget Image + Texte + Custom CSS |
| `MinimalEditorialIntro` | 3A | Style Lab | Faible | Widget Texte + Titre, padding généreux |
| `DarkEditorialIntro` | 3A | Style Lab | Faible | Section deux colonnes, fond sombre |
| `StatementSection` (dark / light / color) | 3A | Style Lab | Faible | Section pleine largeur — 3 variants de fond |
| `NumberedEditorialSection` | 3A | Style Lab | Moyenne | Numéro décoratif via CSS, grille deux colonnes |
| `ImageTextSplit` (left / right / ratios) | 3A | Style Lab | Moyenne | Conteneur deux colonnes Elementor, ordre inversé via classes |
| `MediaPlaceholder` | 3A | Style Lab | Faible | Non utilisé en production — remplacé par widget Image natif |

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
| `.text-outline` | Titres éditoriaux Esprit 01 | Texte en contour via `-webkit-text-stroke: var(--stroke-width) var(--color-text-white)` — stroke blanc explicite |
| `.display-editorial` | Segments headlines Esprit 01 | Barlow Condensed bold uppercase, `line-height: 1.05` |
| `.display-geometric` | Segments headlines Esprit 02 | Space Grotesk bold, `letter-spacing: -0.02em` |
| `.display-accent` | Badges, eyebrows, labels | Space Grotesk medium, `letter-spacing: 0.04em` |
| `.btn` | Boutons | Base commune — inline-flex, min-height 44px, transitions |
| `.btn--primary` | Bouton principal | Fond `--color-cta-blue`, texte blanc |
| `.btn--secondary` | Bouton secondaire | Transparent, bordure bleue |
| `.btn--light` | Bouton clair | Transparent, bordure blanche — contextes sombres |
| `.btn--dark` | Bouton sombre | Fond noir, bordure `--color-btn-dark-border` |
| `.btn--editorial` | Bouton typographique | Transparent, soulignement `text-decoration`, contextes sombres |
| `.container` | Tous | Largeur max + padding horizontal responsif |
| `.container--reading` | Sections éditoriales | Largeur limitée à `--container-reading` |
| `.container--wide` | Sections avec rails | Largeur étendue `--container-wide` |
| `.site-header--transparent` | En-têtes sur fonds sombres | Liens et logo blancs, bordure basse semi-transparente |

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

**Menu mobile** : même comportement que le menu plein écran avec, en plus, fermeture par clic sur le backdrop. Nécessite un overlay `position: fixed` au-dessus du contenu.

**Carrousel de cas clients** (`CaseStudyCarousel`) : scroll-snap natif CSS + synchronisation activeIndex via `getBoundingClientRect` + `requestAnimationFrame`. Aucune dépendance. `ResizeObserver` re-aligne sur le slide actif après redimensionnement. En WordPress, remplacer par Smart Slider 3 ou un carousel plugin tout en préservant la structure HTML des slides.

**Synchronisation activeIndex** : la position réelle de chaque slide est calculée via `slide.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft`. Cette approche est correcte en présence de `gap`, `padding` et de largeurs relatives au conteneur.

**Composants `ProjectEditorialSplit` et `ProjectTypographyFeature`** : les titres surdimensionnés utilisent `-webkit-text-stroke` pour les mots en contour. La propriété est supportée par tous les navigateurs modernes. Appliquer via classe `.text-outline` dans Elementor.

**`MediaPlaceholder`** : utilisé uniquement dans le prototype comme substitut aux images de projet réelles. En production WordPress, remplacer par le widget Image natif Elementor avec le champ ACF correspondant.

**`AccentTheme`** (prop sémantique) : les composants de Phase 3A reçoivent un `AccentTheme` typé (`'digital' | 'ia' | 'conseil' | 'neutral' | 'blue' | 'magenta' | 'coral'`). La résolution vers un token CSS est centralisée dans `src/utils/accentTheme.ts`. En Elementor, sélectionner la couleur globale correspondante dans l'interface.

---

## État Phase 2 — APPROUVÉ 2026-07-09

Tous les composants listés comme Phase 2 dans le registre ci-dessus sont construits, corrigés et approuvés par le responsable du projet. Les tokens, classes CSS et comportements d'interaction sont stables pour la Phase 3.

## État Phase 3A — QA code terminé 2026-07-10

Tous les composants listés comme Phase 3A dans le registre ci-dessus sont construits, passent `tsc --noEmit` (0 erreur) et `npm run build` (production clean, 111 modules). Les données de démonstration utilisent des contenus français provisoires. Les tokens, types et utilitaires de Phase 3A sont stables pour la Phase 3B.

**Validation humaine restante** : vérification visuelle à 1440px/1920px, test du défilement trackpad sur le carrousel, confirmation du peek partiel du slide suivant.
