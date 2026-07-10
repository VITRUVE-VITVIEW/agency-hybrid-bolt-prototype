# Modèle de contenu — Agency Hybrid Prototype

Ce document documente toutes les interfaces TypeScript, leur mapping vers les types de contenu WordPress, et les règles de contenu provisoire.

---

## Règle de contenu provisoire

Tout le contenu visible dans le prototype doit être un contenu français provisoire soigné, stocké dans des fichiers de données typés centralisés. Il doit être naturel et professionnel en français, adapté à une agence premium de digital, IA et conseil. Ne pas utiliser de Lorem ipsum, de texte allemand des références visuelles, de contenu anglais générique, ni de contenu codé en dur dans les composants réutilisables. Le contenu client final validé pourra remplacer le contenu provisoire à tout moment en éditant uniquement les fichiers de données.

---

## Fichiers de données

| Fichier | Interface implémentée | Phase de création |
|---|---|---|
| `src/data/routes.ts` | `RouteRecord` (interne) | Phase 1 |
| `src/data/navigation.ts` | `NavigationItem` | Phase 1 |
| `src/data/heroData.ts` | `HeroData` | Phase 2 |
| `src/data/projects.ts` | `CaseStudy` (4 entrées) | Phase 3A |
| `src/data/portfolio.ts` | `PortfolioItem` (6 entrées) | Phase 3A |
| `src/data/editorialSections.ts` | Interfaces éditoriales locales | Phase 3A |
| `src/data/expertises.ts` | `ExpertisePage` | Phase 5 |
| `src/data/articles.ts` | `Article` | Phase 11 |
| `src/data/processSteps.ts` | `ProcessStep` | Phase 8 |
| `src/data/toolkit.ts` | `ToolkitItem` | Phase 8 |
| `src/data/team.ts` | `TeamMember` | Phase 10 |

---

## Interfaces TypeScript

Toutes les interfaces sont déclarées dans `src/types/index.ts`.

### Types Phase 3A

Les types suivants ont été ajoutés en Phase 3A :

| Type | Nature | Usage |
|---|---|---|
| `AccentTheme` | Type union | Thème sémantique de couleur d'accent — résolu dans `src/utils/accentTheme.ts` |
| `MediaVariant` | Type union | Variant de surface de substitution CSS pour `MediaPlaceholder` |
| `MediaRatio` | Type union | Ratio d'aspect du média (`'4/3'`, `'3/4'`, `'16/9'`, `'1/1'`, `'cinema'`) |
| `ProjectMedia` | Interface | Configuration d'un `MediaPlaceholder` — remplacé par widget Image en production |
| `ProjectCategory` | Interface | Terme de taxonomie pilier avec accent associé |

---

### `AgencyConfig`

Équivalent WordPress : page d'options ACF — paramètres globaux du site.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `agencyName` | `string` | `wp_options: blogname` |
| `shortName` | `string` | ACF: `agency_short_name` |
| `tagline` | `string` | ACF: `agency_tagline` |
| `logoText` | `string` | ACF: `agency_logo_text` |
| `contactEmail` | `string` | ACF: `agency_contact_email` |
| `social.linkedin` | `string` | ACF: `agency_social.linkedin` |
| `social.instagram` | `string` | ACF: `agency_social.instagram` |
| `social.twitter` | `string` | ACF: `agency_social.twitter` |

---

### `NavigationItem`

Équivalent WordPress : menu de navigation personnalisé via `wp_nav_menu`.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `path` | `string` | URL de l'élément de menu |
| `label` | `string` | Titre de l'élément de menu |
| `pillar` | `'digital' \| 'ia' \| 'conseil' \| undefined` | Terme de taxonomie |
| `children` | `NavigationItem[] \| undefined` | Éléments enfants du menu |

---

### `ExpertiseCategory`

Équivalent WordPress : taxonomie personnalisée `pillar`.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `slug` | `string` | Slug de la taxonomie |
| `label` | `string` | Nom de la taxonomie |
| `pillar` | `'digital' \| 'ia' \| 'conseil'` | Terme de taxonomie |
| `accentColorToken` | `string` | ACF: `category_accent_token` |
| `expertiseSlugs` | `string[]` | ACF: `category_expertise_slugs` |

---

### `ExpertisePage`

Équivalent WordPress : CPT `expertise` avec taxonomie `pillar`.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `slug` | `string` | `post_name` |
| `pillar` | `'digital' \| 'ia' \| 'conseil'` | Terme de taxonomie `pillar` |
| `title` | `string` | `post_title` |
| `headline` | `string` | ACF: `expertise_headline` |
| `problemStatement` | `string` | ACF: `expertise_problem_statement` |
| `approachTitle` | `string` | ACF: `expertise_approach_title` |
| `approachBody` | `string` | ACF: `expertise_approach_body` |
| `mockupVariant` | `string` | ACF: `expertise_mockup_variant` |
| `toolkitItems` | `ToolkitItem[]` | ACF: `expertise_toolkit` (repeater) |
| `relatedProjectSlugs` | `string[]` | ACF: `expertise_related_projects` |
| `metaDescription` | `string` | Yoast/SEOPress meta description |

---

### `Project` (base)

Équivalent WordPress : CPT `realisation`.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `slug` | `string` | `post_name` |
| `type` | `'portfolio' \| 'cas-client'` | ACF: `project_type` |
| `client` | `string` | ACF: `project_client` |
| `pillar` | `'digital' \| 'ia' \| 'conseil'` | Taxonomie `pillar` |
| `year` | `number` | ACF: `project_year` |
| `imagePlaceholder` | `string` | ACF: `project_cover_image` |
| `tags` | `string[]` | ACF: `project_tags` |
| `briefDescription` | `string` | ACF: `project_brief_description` |

---

### `CaseStudy` (étend `Project`)

Équivalent WordPress : CPT `realisation` filtré sur `type = cas-client`.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `challengeBody` | `string` | ACF: `case_challenge_body` |
| `responseBody` | `string` | ACF: `case_response_body` |
| `metrics` | `Array<{ label: string; value: string }>` | ACF: `case_metrics` (repeater) |
| `resultsSummary` | `string` | ACF: `case_results_summary` |

---

### `PortfolioItem` (étend `Project`)

Équivalent WordPress : CPT `realisation` filtré sur `type = portfolio`.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `galleryImages` | `string[]` | ACF: `portfolio_gallery` |
| `projectContext` | `string` | ACF: `portfolio_context` |

---

### `Article`

Équivalent WordPress : article natif WordPress.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `slug` | `string` | `post_name` |
| `title` | `string` | `post_title` |
| `category` | `string` | Nom de la catégorie d'article |
| `pillar` | `'digital' \| 'ia' \| 'conseil'` | ACF: `article_pillar` |
| `date` | `string` | `post_date` (ISO 8601) |
| `author` | `string` | `display_name` de `WP_User` |
| `excerpt` | `string` | `post_excerpt` |
| `imagePlaceholder` | `string` | Image à la une |
| `body` | `string` | `post_content` (HTML) |

---

### `ProcessStep`

Équivalent WordPress : champ repeater ACF `method_steps` sur la page Méthode.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `number` | `number` | ACF: `step_number` |
| `title` | `string` | ACF: `step_title` |
| `description` | `string` | ACF: `step_description` |

---

### `ToolkitItem`

Équivalent WordPress : champ repeater ACF `toolkit_items` sur les pages Méthode et Expertise.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `name` | `string` | ACF: `toolkit_name` |
| `description` | `string` | ACF: `toolkit_description` |
| `iconPlaceholder` | `string` | ACF: `toolkit_icon` |

---

### `TeamMember`

Équivalent WordPress : CPT `team_member` ou repeater ACF sur la page Agence.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `name` | `string` | `post_title` ou ACF: `member_name` |
| `role` | `string` | ACF: `member_role` |
| `imagePlaceholder` | `string` | Image à la une ou ACF: `member_photo` |
| `bio` | `string` | ACF: `member_bio` |

---

### `TestimonialItem`

Équivalent WordPress : CPT `testimonial` ou repeater ACF.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `quote` | `string` | ACF: `testimonial_quote` |
| `clientName` | `string` | ACF: `testimonial_client_name` |
| `clientRole` | `string` | ACF: `testimonial_client_role` |
| `clientCompany` | `string` | ACF: `testimonial_client_company` |
| `imagePlaceholder` | `string \| undefined` | ACF: `testimonial_photo` |

---

### `FAQItem`

Équivalent WordPress : repeater ACF `faq_items` sur les pages Expertise et Méthode.

| Champ | Type | Équivalent WordPress |
|---|---|---|
| `question` | `string` | ACF: `faq_question` |
| `answer` | `string` | ACF: `faq_answer` |

---

### `ContactFormData`

Équivalent WordPress : géré par Contact Form 7 ou WPForms.

| Champ | Type | Champ formulaire |
|---|---|---|
| `name` | `string` | `name` |
| `company` | `string` | `company` |
| `email` | `string` | `email` |
| `telephone` | `string` | `telephone` |
| `message` | `string` | `message` |
| `serviceCategory` | `'digital' \| 'ia' \| 'conseil' \| 'autre'` | `service_category` |

---

## Conventions de slug

Les slugs des templates de pages détail correspondent exactement aux chemins déclarés dans `src/data/routes.ts` sans le segment dynamique `:slug`. Le composant de la page détail utilise `useParams()` pour extraire le slug et le comparer au tableau typé correspondant. Si aucune correspondance n'est trouvée, un état "introuvable" en français s'affiche avec un lien vers le hub parent.
