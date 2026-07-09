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

_(Critères à compléter en début de Phase 2)_

- [ ] Variante A de navigation (`SiteHeader` minimal + `FullscreenMenu`) fonctionnelle aux 5 largeurs
- [ ] Variante B de navigation (horizontale) fonctionnelle aux 5 largeurs
- [ ] Menu mobile fonctionnel — fermeture par bouton, Escape, lien, backdrop
- [ ] Gestion du focus dans les menus : ouverture, cycle Tab, fermeture avec restauration
- [ ] Verrouillage du scroll lors de l'ouverture d'un menu
- [ ] Trois variantes de héros rendues dans le Style Lab
- [ ] Tous les boutons et liens textuels rendus dans le Style Lab
- [ ] Pas de composant de Phase 1 modifié sans nouveau point de revue

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
