# Système de design — Agency Hybrid Prototype

Ce document décrit l'intégralité du système de design utilisé dans le prototype. Toutes les valeurs sont provisoires jusqu'à la revue du Style Lab en Phase 3.

---

## Vue d'ensemble

Le système de design fusionne deux directions visuelles complémentaires :

- **Esprit 01** : direction éditoriale sombre, typographie condensée surdimensionnée, compositions asymétriques, sentiment de studio créatif premium.
- **Esprit 02** : sections blanches et colorées, typographie géométrique grasse, espaces négatifs généreux, présentation modulaire des services.

Les deux directions partagent un système de tokens, une échelle typographique, une grille et une palette centralisés.

---

## Typographie

### Polices

| Token | Valeur | Usage |
|---|---|---|
| `--font-display` | Barlow Condensed | Titres éditoriaux, héros, labels surdimensionnés |
| `--font-body` | Space Grotesk | Corps de texte, navigation, labels, formulaires |

Les deux familles sont déclarées dans `src/styles/typography.css` via un seul `@import` Google Fonts. Aucun nom de famille n'est répété dans les fichiers CSS de composants — seuls les tokens `--font-display` et `--font-body` sont utilisés.

### Échelle — Display (responsive avec clamp)

| Token | Plage | Usage |
|---|---|---|
| `--text-display-xl` | 4rem → 10rem | Titres héros principaux |
| `--text-display-lg` | 3rem → 7rem | Titres de sections majeures |
| `--text-display-md` | 2rem → 4.5rem | Titres de pages secondaires |
| `--text-display-sm` | 1.5rem → 3rem | Sous-titres éditoriaux |

### Échelle — Corps (fixe)

| Token | Valeur | Usage |
|---|---|---|
| `--text-lead` | 1.25rem | Paragraphes d'accroche |
| `--text-body` | 1rem | Corps de texte standard |
| `--text-sm` | 0.875rem | Labels, métadonnées |
| `--text-xs` | 0.75rem | Mentions légales, micro-labels |

### Hauteurs de ligne

| Token | Valeur | Usage |
|---|---|---|
| `--leading-display` | 1.05 | Titres condensés Esprit 01 |
| `--leading-heading` | 1.2 | Titres de sections |
| `--leading-body` | 1.7 | Corps de texte |
| `--leading-tight` | 1.0 | Labels serrés |

### Graisses

Maximum 3 graisses utilisées dans l'ensemble du projet :

| Token | Valeur |
|---|---|
| `--weight-regular` | 400 |
| `--weight-medium` | 500 |
| `--weight-bold` | 700 |

---

## Couleurs

Toutes les valeurs sont provisoires. Elles seront validées et verrouillées lors de la revue du Style Lab en Phase 3.

### Palette sombre — Esprit 01

| Token | Valeur provisoire | Usage |
|---|---|---|
| `--color-bg-dark` | #0a0a0a | Fond principal sombre |
| `--color-bg-charcoal` | #111111 | Fond charbon (carrousel) |
| `--color-bg-navy` | #0d1421 | Fond marine (sliders projets) |
| `--color-text-white` | #ffffff | Texte sur fond sombre |
| `--color-text-muted` | #888888 | Texte secondaire, métadonnées |
| `--color-border-dark` | #222222 | Bordures sur fond sombre |

### Palette claire — Esprit 02

| Token | Valeur provisoire | Usage |
|---|---|---|
| `--color-bg-white` | #ffffff | Fond blanc |
| `--color-bg-light` | #f6f6f4 | Fond légèrement teinté |
| `--color-text-navy` | #0d1421 | Texte foncé sur fond blanc |
| `--color-text-body` | #2a2a2a | Corps de texte standard |
| `--color-border-light` | #e0e0dc | Bordures sur fond clair |

### Pilier Digital — Bleu électrique / Marine

| Token | Valeur provisoire |
|---|---|
| `--color-digital-blue` | #0057ff |
| `--color-digital-blue-light` | #3378ff |
| `--color-digital-blue-dark` | #0040cc |
| `--color-digital-navy` | #0d1421 |
| `--color-digital-navy-light` | #1a2a45 |

### Pilier IA — Violet / Pourpre / Magenta

| Token | Valeur provisoire |
|---|---|
| `--color-ia-violet` | #6b21d4 |
| `--color-ia-violet-light` | #8b47e8 |
| `--color-ia-purple` | #9333ea |
| `--color-ia-purple-light` | #a855f7 |
| `--color-ia-magenta` | #c026d3 |
| `--color-ia-magenta-light` | #d946ef |

### Pilier Conseil — Corail / Rouge chaud / Beige chaud

| Token | Valeur provisoire |
|---|---|
| `--color-conseil-coral` | #ff5c3a |
| `--color-conseil-coral-light` | #ff7a5c |
| `--color-conseil-red` | #dc2626 |
| `--color-conseil-red-light` | #ef4444 |
| `--color-conseil-beige` | #d4b896 |
| `--color-conseil-beige-light` | #e8d4bc |

### Accents partagés et couleurs fonctionnelles

| Token | Valeur provisoire | Usage |
|---|---|---|
| `--color-cta-blue` | #0057ff | Sections CTA pleine hauteur |
| `--color-rail-accent` | #ff3366 | Détails du rail vertical |
| `--color-btn-dark-border` | #444444 | Bordure du bouton dark au repos |
| `--color-btn-dark-border-hover` | #666666 | Bordure du bouton dark au survol |
| `--color-success` | #16a34a | Validation de formulaire |
| `--color-warning` | #d97706 | Avertissements |
| `--color-error` | #dc2626 | Erreurs de formulaire |
| `--color-info` | #0057ff | Messages informatifs |

---

## Espacement

Échelle à base 8px — 7 niveaux.

| Token | Valeur |
|---|---|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 32px |
| `--space-xl` | 64px |
| `--space-2xl` | 96px |
| `--space-3xl` | 128px |

---

## Conteneurs

Valeurs provisoires — confirmées après la revue du Style Lab.

| Token | Valeur | Usage |
|---|---|---|
| `--container-reading` | 720px | Colonnes de texte long format |
| `--container-content` | 1240px | Contenu de page standard |
| `--container-wide` | 1560px | Mises en page éditoriales avec rails |
| `--container-padding-x` | clamp(16px, 5vw, 96px) | Marges horizontales responsives |

Le conteneur wide est explicitement plus large que le conteneur content.

---

## Motion

| Token | Valeur | Usage |
|---|---|---|
| `--duration-short` | 150ms | Transitions de survol et focus |
| `--duration-medium` | 300ms | Révélations et entrées de menus |
| `--duration-long` | 600ms | Transitions de page |
| `--easing-editorial` | cubic-bezier(0.25, 0.0, 0.0, 1.0) | Motion confiant, légèrement décéléré |
| `--easing-standard` | cubic-bezier(0.4, 0.0, 0.2, 1.0) | Motion standard Material-like |

Toutes les transitions et animations sont conditionnées par `prefers-reduced-motion: no-preference`. Lorsque la réduction de mouvement est préférée, les transitions sont supprimées et les révélations apparaissent immédiatement.

---

## Points de rupture

Les breakpoints sont documentés ici mais implémentés comme valeurs explicites dans les `@media` queries CSS — les propriétés CSS personnalisées ne peuvent pas être utilisées dans les media queries standard.

| Largeur | Comportement |
|---|---|
| 390px | Une colonne, échelle de texte minimale |
| 768px | Grilles deux colonnes, navigation simplifiée |
| 1024px | Navigation desktop complète, rails apparaissent |
| 1440px | Mises en page éditoriales complètes |
| 1920px | Max-width du conteneur, pas de changement de layout |

---

## Règle CSS

Toutes les valeurs de design réutilisables (couleurs, familles de polices, échelle typographique, espacement, largeurs de conteneur, rayons de bordure, largeurs de bordure, durées de motion) doivent utiliser des tokens centralisés.

Les valeurs CSS structurelles intrinsèquement locales — comme `100%`, les règles `1px`, les valeurs `aspect-ratio`, et les expressions `calc()` spécifiques à une mise en page — peuvent rester dans les fichiers CSS de composants lorsque leur localité est justifiée.

---

## Composants globaux — Phase 2

### En-têtes

Deux variantes implémentées et approuvées :

| Composant | Fichier | Usage |
|---|---|---|
| `HeaderNavigation` | `src/components/Header/HeaderNavigation.tsx` | Navigation horizontale standard — Esprit 02 |
| `HeaderMinimal` | `src/components/Header/HeaderMinimal.tsx` | En-tête minimal pour contextes immersifs — Esprit 01 |

**Modificateur transparent** : la classe `.site-header--transparent` force logo et liens en blanc (`--color-text-white`) et affiche une bordure basse `rgba(255,255,255,0.1)`. Le bouton Contact est rendu avec une bordure blanche et fond transparent sur les surfaces sombres ou dégradées.

### Menus

| Composant | Fichier | Fermeture |
|---|---|---|
| `FullscreenMenu` | `src/components/FullscreenMenu/FullscreenMenu.tsx` | Bouton, Escape, lien |
| `MobileMenu` | `src/components/MobileMenu/MobileMenu.tsx` | Bouton, Escape, lien, backdrop |

Les deux menus utilisent `useBodyScrollLock`, `useEscapeKey` et `useFocusTrap`. Le focus est restauré sur l'élément déclencheur à la fermeture.

### Héros — trois variantes

| Variante | Fichier données | Description |
|---|---|---|
| `HeroDarkEditorial` | `heroDarkEditorialData` | Esprit 01 — fond quasi-noir, grilles verticales, segment outline blanc |
| `HeroGradient` | `heroGradientData` | Esprit 02 — fond dégradé, typographie géométrique |
| `HeroHybrid` | `heroHybridData` | Variante recommandée de production — mix des deux esprits |

**Règle outline Esprit 01** : `heroDarkEditorialData` contient exactement un segment avec `treatment: 'outline'` — le mot `'Hybride'`. Cette configuration est centralisée dans `src/data/heroData.ts`. Le composant `HeroDarkEditorial` ne contient aucun texte codé en dur. La classe `.text-outline` applique `-webkit-text-stroke: var(--stroke-width) var(--color-text-white)` avec un stroke blanc explicite — non dérivé de `currentColor`.

### Boutons — cinq variantes

Toutes les variantes sont implémentées dans `src/components/Button/Button.tsx` et `Button.css`. Aucune valeur hexadécimale n'est codée en dur dans `Button.css`.

| Variante | Fond | Couleur | Bordure |
|---|---|---|---|
| `primary` | `--color-cta-blue` | Blanc | `--color-cta-blue` |
| `secondary` | Transparent | `--color-cta-blue` | `--color-cta-blue` |
| `light` | Transparent | `--color-text-white` | `--color-text-white` |
| `dark` | `--color-bg-dark` | Blanc | `--color-btn-dark-border` |
| `editorial` | Transparent | `--color-text-white` | Aucune — soulignement `text-decoration` |

Tous les états focus-visible utilisent `outline: 2px solid var(--color-cta-blue)`. Les états désactivés appliquent `opacity: 0.4` et `cursor: not-allowed`.

### Rail social

`SocialRail` (`src/components/SocialRail/SocialRail.tsx`) filtre les URL plateaux de domaine nu (`https://twitter.com`, `https://linkedin.com`, etc.) — aucune icône n'est affichée pour les entrées non configurées. L'icône X utilise le chemin SVG officiel du logotype X/Twitter.

---

## Verrouillage des tokens

- **Après Phase 1** : Les noms et l'architecture des tokens sont stabilisés.
- **Après Phase 2 (approuvé)** : Les tokens suivants sont verrouillés — toute modification requiert une revue explicite :
  - Tous les tokens de couleur existants
  - `--color-btn-dark-border` et `--color-btn-dark-border-hover` (ajoutés Phase 2)
  - La valeur de stroke de `.text-outline` (`var(--color-text-white)`)
- **Après Phase 3 (revue Style Lab)** : L'ensemble des valeurs visuelles des tokens est verrouillé.
- Les APIs de composants sont verrouillées uniquement après approbation visuelle du composant correspondant.
