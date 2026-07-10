# Checklist QA — Agency Hybrid Prototype

Critères de validation par phase. Chaque item doit être vérifié par un humain avant de passer à la phase suivante.

---

## Critères QA globaux (toutes phases)

Ces critères s'appliquent en permanence à toute page ou composant livré :

- [ ] Rendu correct aux 5 largeurs de test : 390px, 768px, 1024px, 1440px, 1920px
- [ ] Navigation clavier complète — tous les éléments interactifs sont accessibles et opérables au clavier
- [ ] Pas de piège à focus (focus trap intentionnel dans les modales uniquement)
- [ ] Contraste WCAG AA vérifié pour tous les textes et composants UI
- [ ] États de survol, focus et actif distincts pour tous les éléments interactifs
- [ ] Targets tactiles ≥ 44×44px sur mobile
- [ ] Aucun contenu visible ne dépasse son conteneur
- [ ] `prefers-reduced-motion` supprime toutes les transitions et animations
- [ ] Tout le contenu visible est en français — aucun Lorem ipsum, allemand ni anglais générique
- [ ] `tsc --noEmit` passe sans erreur
- [ ] `npm run build` passe sans erreur
- [ ] Aucun import non résolu dans la console du navigateur

---

## Phase 1 — Fondation, tokens, routing, documentation

### Dépendances
- [x] `react-router-dom` est installé dans `node_modules`
- [x] Aucune nouvelle dépendance ajoutée
- [x] `package.json` contient le script `"typecheck": "tsc --noEmit"`

### Application
- [ ] `tsc --noEmit` passe avec zéro erreur
- [ ] `npm run build` passe sans erreur
- [ ] Le navigateur ne montre aucune erreur d'import ni avertissement de module manquant

### Routing
- [ ] Les 27 routes connues s'affichent au moins avec `RoutePlaceholder` ou `StyleLab`
- [ ] Seules les URL inconnues affichent `NotFound`
- [ ] La navigation directe vers chaque route fonctionne
- [ ] `/style-lab` affiche le shell du Style Lab
- [ ] `/style-lab` est absent de `navigation.ts` et de tout élément de navigation rendu
- [ ] `RoutePlaceholder` affiche le titre de page français correct par route
- [ ] `RoutePlaceholder` affiche un lien fonctionnel vers `/`
- [ ] `RoutePlaceholder` affiche un lien fonctionnel vers `/style-lab`

### Système de tokens
- [ ] `src/styles/tokens.css` existe avec toutes les variables CSS requises
- [ ] `src/styles/reset.css` existe
- [ ] `src/styles/typography.css` existe, charge les polices uniquement via les tokens `--font-*`
- [ ] `src/styles/global.css` importe uniquement `reset.css`, `tokens.css`, `typography.css`
- [ ] Aucune valeur de couleur, d'espacement ou de famille de police codée en dur hors `tokens.css`
- [ ] `src/main.tsx` importe uniquement `./styles/global.css`

### TypeScript
- [ ] `src/types/index.ts` exporte les 14 interfaces
- [ ] Chaque champ d'interface a un commentaire JSDoc de mapping WordPress
- [ ] `src/config/agency.config.ts` exporte un objet `AgencyConfig` typé
- [ ] Aucun composant ne contient d'informations de marque codées en dur

### Données
- [ ] `src/data/routes.ts` contient les 27 entrées de routes
- [ ] `src/data/navigation.ts` contient uniquement les routes de navigation publique
- [ ] Les routes détail dynamiques sont absentes de `navigation.ts`
- [ ] `/style-lab` est absent de `navigation.ts`

### Style Lab
- [ ] `/style-lab` s'affiche correctement aux 5 largeurs de test
- [ ] Toutes les catégories de la section Style Lab de la spécification sont présentes
- [ ] Chaque catégorie a un bloc placeholder visible
- [ ] Aucun composant visuel n'est implémenté dans le Style Lab en Phase 1

### HTML et langue
- [ ] `lang="fr"` est présent sur l'élément `html`
- [ ] La balise meta description de `index.html` est en français
- [ ] La balise viewport est présente

### Documentation
- [ ] `docs/DESIGN_SYSTEM.md` existe avec tous les titres requis
- [ ] `docs/PROJECT_ARCHITECTURE.md` existe avec tous les titres requis
- [ ] `docs/REFERENCE_MAP.md` existe, référence les 16 images et les 4 documents d'analyse
- [ ] `docs/CONTENT_MODEL.md` existe avec les 14 interfaces documentées
- [ ] `docs/ELEMENTOR_HANDOFF.md` existe avec la table de mapping tokens → styles globaux
- [ ] `docs/QA_CHECKLIST.md` existe avec la checklist Phase 1 peuplée
- [ ] `README.md` contient toutes les sections requises

### Intégrité des références
- [ ] Les 16 images dans `public/references/` sont inchangées
- [ ] Les 4 documents dans `docs/reference-analysis/` sont inchangés
- [ ] Aucune image de référence n'a été ouverte ou analysée pendant l'exécution de la Phase 1

### Éléments verrouillés après approbation Phase 1
- [ ] Les noms et l'architecture des tokens dans `tokens.css` sont stables
- [ ] Les noms et formes des interfaces TypeScript dans `types/index.ts` sont stables
- [ ] La forme de `agency.config.ts` est stable
- [ ] Les noms et slugs de routes dans `App.tsx` sont stables

---

## Phase 2 — Composants globaux, navigation, héros

**Statut : TERMINÉ ET APPROUVÉ — 2026-07-09**

Tous les critères ci-dessous ont été validés manuellement par le responsable du projet aux cinq largeurs de référence (390px, 768px, 1024px, 1440px, 1920px).

### En-têtes

- [x] `HeaderNavigation` — variante horizontale complète, logo, liens de navigation, bouton CTA Contact
- [x] `HeaderMinimal` — variante minimale pour contextes d'entrée immersive
- [x] Variante transparente (`site-header--transparent`) : logo et liens blancs / off-white, contraste suffisant sur fonds sombres et dégradés
- [x] Variante transparente : hover et focus-visible distincts sur les liens de navigation
- [x] Bouton Contact : distinct du reste de la navigation dans toutes les variantes (bordure blanche sur fond transparent)
- [x] `FullscreenMenu` : ouverture, fermeture par bouton, Escape et lien — confirmés
- [x] `MobileMenu` : ouverture, fermeture par bouton, Escape, lien et backdrop — confirmés
- [x] Gestion du focus — ouverture, cycle Tab, fermeture avec restauration du focus déclencheur
- [x] Verrouillage du scroll lors de l'ouverture d'un menu (hook `useBodyScrollLock`)
- [x] Comportement fonctionnel aux 5 largeurs de test

### Héros

- [x] **`HeroDarkEditorial`** (Esprit 01) : fond quasi-noir, grilles verticales visibles, segment `'Hybride'` en `treatment: 'outline'` avec `-webkit-text-stroke` blanc — un seul segment outline dans les données
- [x] `accessibleHeadline` intégral préservé dans `heroDarkEditorialData` (`'Agence hybride — Digital, Intelligence Artificielle, Conseil'`)
- [x] Aucun débordement horizontal à 390px sur le segment outline
- [x] **`HeroGradient`** (Esprit 02) : section pleine hauteur, fond dégradé, titres géométriques Space Grotesk
- [x] **`HeroHybrid`** : variante recommandée de production, mix Esprit 01 + Esprit 02
- [x] Les trois variantes s'affichent dans le Style Lab sans collision de style
- [x] Le segment outline de `HeroHybrid` utilise lui aussi `treatment: 'outline'` — géré par la même utilitaire `.text-outline` — indépendant de celui de `HeroDarkEditorial`

### Boutons

- [x] **Primary** : fond bleu électrique (`--color-cta-blue`), texte blanc — confirmé
- [x] **Secondary** : transparent, bordure bleue, texte bleu ; remplissage bleu au survol — confirmé
- [x] **Light** : transparent, bordure blanche, texte blanc — pour contextes sombres — confirmé
- [x] **Dark** : fond noir (`--color-bg-dark`), texte blanc, bordure grise (`--color-btn-dark-border`) visible sur toute surface — confirmé
- [x] **Editorial** : typographique, pas de fond, décoration de soulignement via `text-decoration`; opacité réduite à l'état actif — confirmé
- [x] Focus-visible : outline bleu `var(--color-cta-blue)` sur toutes les variantes — confirmé
- [x] États de survol, focus et actif : tous distincts et visibles
- [x] État désactivé (`:disabled`) : opacité réduite, curseur `not-allowed`
- [x] Aucune couleur hexadécimale codée en dur dans `Button.css` — toutes les valeurs référencent des tokens

### Icône sociale X / Twitter

- [x] `SocialRail` utilise un chemin SVG réel pour l'icône X (logotype officiel X/Twitter — `path d="M18.244 2.25…"`)
- [x] Aucun caractère texte `X` brut n'est rendu en lieu et place d'une icône
- [x] Les URL plateau (`https://twitter.com`, `https://linkedin.com`, etc.) sont filtrées — aucun lien social placeholder ne s'affiche

### Tokens et règles CSS

- [x] `--color-btn-dark-border: #444444` et `--color-btn-dark-border-hover: #666666` déclarés dans `tokens.css`
- [x] `.text-outline` dans `typography.css` utilise `-webkit-text-stroke: var(--stroke-width) var(--color-text-white)` — stroke blanc explicite, non dépendant de `currentColor`
- [x] Aucune couleur hexadécimale réutilisable hors de `tokens.css` dans les fichiers CSS de composants

### Vérification technique

- [x] `tsc --noEmit` : 0 erreur
- [x] `npm run build` : build de production clean (78 modules, 0 erreur)

### Limitations connues

- Le `SocialRail` ne rend aucun lien tant que toutes les URLs restent des placeholders de domaine. Les icônes LinkedIn et Instagram s'afficheront dès que des URLs de profils réels seront configurées dans `agency.config.ts`.
- La variante `btn--editorial` est conçue exclusivement pour des contextes de fond sombre (texte blanc). Pour une utilisation sur fond clair, une variante `btn--editorial-dark` devra être ajoutée en Phase 3.
- `paint-order: stroke fill` sur `.text-outline` est reconnu par les navigateurs modernes (Chrome 35+, Firefox 60+, Safari 12.1+) ; l'effet visuel est cependant identique sans cette déclaration sur les navigateurs qui ne le supportent pas.

---

## Phase 3A — Style Lab : projets, carrousel, portfolio, contenu éditorial

**Statut : QA CODE TERMINÉ — 2026-07-10**

Les critères ci-dessous documentent le résultat de la passe QA de code Phase 3A. Les items marqués [x] ont été validés par analyse de code, vérification de routing et tests de build. Les items marqués [~] désignent des comportements dont la validation visuelle complète nécessite une revue humaine dans le navigateur — ils ne sont pas considérés comme bloquants mais doivent être confirmés avant Phase 4.

### Typecheck et build

- [x] `tsc --noEmit` : 0 erreur
- [x] `npm run build` : build de production clean (111 modules, 64.96 kB CSS gzip, 0 erreur)

### Routing — CTAs

- [x] `/realisations/cas-clients` — route enregistrée dans `App.tsx` (ligne 43)
- [x] `/realisations/cas-clients/:slug` — route enregistrée dans `App.tsx` (ligne 47)
- [x] `/realisations/portfolio` — route enregistrée dans `App.tsx` (ligne 44)
- [x] `/realisations/portfolio/:slug` — route enregistrée dans `App.tsx` (ligne 48)
- [x] `/methode` — route enregistrée (ligne 13)
- [x] `/expertises/digital` — route enregistrée (ligne 21)
- [x] `/expertises/ia` — route enregistrée (ligne 22)
- [x] `/contact` — route enregistrée (ligne 16)
- [x] Tous ces CTAs atteignent un `RoutePlaceholder` fonctionnel (titre de page correct en français)

### Accessibilité carrousel

- [x] `CaseStudyCarousel` — `tabIndex={0}` sur la track, `focus-visible` avec outline `--color-cta-blue`
- [x] Boutons prev/next — `aria-label` descriptif, `disabled` natif à la borne 0 et `slides.length - 1`
- [x] Pagination — `aria-label` sur chaque dot, `aria-pressed` reflète l'état actif
- [x] Pas de focus trap — la navigation Tab sort librement du carrousel
- [x] `aria-live="polite"` + `aria-atomic="true"` sur le compteur de slides pour les lecteurs d'écran

### Carrousel — synchronisation native scroll

- [x] `activeIndex` calculé via `getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft` — correct en présence de gap, padding et largeurs relatives
- [x] Gestion `requestAnimationFrame` — une seule requête en file, annulée et replanifiée si le scroll continue
- [x] `ResizeObserver` — ré-aligne sur le slide actif avec `behavior: 'auto'` après redimensionnement
- [x] Support slide unique — loop `slides.length <= 1` protégé dans le handler de scroll
- [x] `prefers-reduced-motion` — `prefersReducedMotion()` vérifié dans `scrollToSlide`, passe à `'auto'`
- [x] Nettoyage — `removeEventListener`, `ro.disconnect()`, `cancelAnimationFrame` dans le return du useEffect

### Légendes MediaPlaceholder

- [x] Bandeau translucide `rgba(0,0,0,0.72→0)` à la base de chaque placeholder — contraste estimé ≥ 4.5:1 pour le texte `rgba(255,255,255,0.85)`
- [x] Mode `decorative={true}` — élément rendu sans `figcaption`, `aria-hidden="true"`
- [x] Mode non-décoratif — élément `figure` avec `figcaption` visible et lisible

### Responsive — analyse de code

- [x] `ProjectEditorialSplit` : 57/43 à 1440px, 55/45 à 1024px, mono-colonne à 768px, media avant copy dans le DOM
- [x] `ProjectTypographyFeature` : `clamp(3.5rem, 7.5vw, 10rem)` → safe-floor à 2.5rem à 390px
- [x] `CaseStudySlide` : `flex: 0 0 82%` → `88%` à 768px → `92%` à 440px — container-relative
- [x] `PortfolioGrid` : 3 colonnes → 2 → 1 selon breakpoints
- [x] Sections éditoriales : toutes mono-colonne avec media avant texte à 768px
- [x] Aucun composant n'utilise `overflow-x: hidden` sur html, body, #root ou `.style-lab`

### Limitations connues et éléments à validation humaine

- [~] La validation visuelle exacte du rapport 57/43 à 1440px et 1920px requiert une vérification dans le navigateur
- [~] La visibilité du peek du slide suivant dans le carrousel dépend du rendu effectif des `gap` CSS — à valider dans le navigateur
- [~] L'interaction de défilement natif au trackpad sur le carrousel doit être testée manuellement dans le navigateur
- [~] Les dégradés des `MediaPlaceholder` doivent être vérifiés visuellement pour la distinction entre variantes
- [~] L'affichage du Style Lab à 1920px doit être confirmé manuellement

---

## Phase 3 — Style Lab complet

_(Critères à compléter en début de Phase 3)_

- [ ] Tous les composants listés dans l'inventaire du Style Lab sont présents et fonctionnels
- [ ] La modal vidéo s'ouvre et se ferme de manière accessible
- [ ] Le carrousel est navigable au clavier, au clic et au toucher
- [ ] L'accordéon FAQ est accessible au clavier avec aria-expanded correctement géré
- [ ] Le formulaire de contact valide et affiche un état de succès en français
- [ ] Tous les états de survol sont visibles
- [ ] Les valeurs de tokens sont validées visuellement → verrouillage après approbation

---

## Phase 4 — Page d'accueil

_(Critères à compléter en début de Phase 4)_

- [ ] Toutes les sections de la page d'accueil sont rendues
- [ ] Tout le contenu visible est en français provisoire soigné
- [ ] Toutes les interactions fonctionnent
- [ ] Pas de composant de Phase 3 approuvé modifié

---

## Phases 5 à 12

_(Titres réservés — critères à compléter au début de chaque phase)_

- Phase 5 : Système Expertises
- Phase 6 : 5 pages d'expertise prioritaires
- Phase 7 : 6 pages d'expertise restantes
- Phase 8 : Méthode
- Phase 9 : Réalisations, Cas clients, Portfolio, templates détail
- Phase 10 : Agence
- Phase 11 : Blog, template article, Contact
- Phase 12 : Revue responsive globale, accessibilité, performance, documentation, handoff Elementor
