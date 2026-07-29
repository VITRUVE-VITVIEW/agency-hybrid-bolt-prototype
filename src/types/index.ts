/**
 * All TypeScript data models for the agency prototype.
 * Each field is annotated with its future WordPress/ACF equivalent.
 */

/* ----------------------------------------
   ACCENT THEME — semantic color identity
---------------------------------------- */

/**
 * Semantic accent theme used across project and editorial components.
 * Resolved to centralized CSS tokens internally — never passed as raw color values.
 */
export type AccentTheme =
  | 'digital'
  | 'ia'
  | 'conseil'
  | 'neutral'
  | 'blue'
  | 'magenta'
  | 'coral'

/* ----------------------------------------
   MEDIA PLACEHOLDER
---------------------------------------- */

/** Visual variant for abstract CSS media placeholders */
export type MediaVariant =
  | 'gradient-digital'
  | 'gradient-ia'
  | 'gradient-conseil'
  | 'gradient-neutral'
  | 'device-frame'
  | 'print-frame'
  | 'abstract-grid'

/** Aspect ratio for media placeholders */
export type MediaRatio = '16/9' | '4/3' | '3/4' | '1/1' | 'cinema'

/** WordPress equivalent: ACF image field with fallback placeholder metadata */
export interface ProjectMedia {
  /** Visual variant to use for the CSS placeholder */
  variant: MediaVariant
  /** Aspect ratio */
  ratio: MediaRatio
  /** Accessible label — used as figcaption */
  label: string
  /** Accent theme tinting the placeholder gradient — ACF: media_accent */
  accent?: AccentTheme
}

/* ----------------------------------------
   PROJECT CATEGORY
---------------------------------------- */

/** WordPress equivalent: custom taxonomy 'pillar' term */
export interface ProjectCategory {
  /** URL slug — taxonomy slug */
  slug: string
  /** French display label */
  label: string
  /** Associated pillar */
  pillar: 'digital' | 'ia' | 'conseil'
  /** Accent theme */
  accent: AccentTheme
}

/* ----------------------------------------
   HERO — Headline segment model
---------------------------------------- */

/**
 * Visual treatment applied to one headline segment.
 * geometric  — Space Grotesk bold, solid fill (Esprit 02, Hybrid primary)
 * editorial  — Barlow Condensed bold, solid fill (Esprit 01, Hybrid outlined accent)
 * outline    — Barlow Condensed bold, text-stroke no fill
 * accent     — Space Grotesk medium, solid fill, smaller or colored
 */
export type HeroHeadlineTreatment = 'geometric' | 'editorial' | 'outline' | 'accent'

export interface HeroHeadlineSegment {
  text: string
  treatment: HeroHeadlineTreatment
  /** Insert a <br> after this segment */
  lineBreakAfter?: boolean
  /** Marks the segment as decorative; it will be wrapped in aria-hidden */
  decorative?: boolean
}

/** CTA button data used inside hero sections */
export interface HeroCTA {
  label: string
  path: string
}

/**
 * Shared content model for all three hero variants.
 * WordPress equivalent: ACF flexible content block 'hero'
 */
export interface HeroData {
  /** Complete readable French headline for screen readers — ACF: hero_accessible_headline */
  accessibleHeadline: string
  /** Ordered headline segments driving visual typography treatment — ACF: hero_headline (repeater) */
  headline: HeroHeadlineSegment[]
  /** Short eyebrow label shown above the headline — ACF: hero_eyebrow */
  eyebrow: string
  /** Body copy paragraph — ACF: hero_body */
  body: string
  /** Primary call-to-action — ACF: hero_cta_primary */
  ctaPrimary: HeroCTA
  /** Optional secondary call-to-action — ACF: hero_cta_secondary */
  ctaSecondary?: HeroCTA
  /** Label for the optional video play button — ACF: hero_play_label */
  playButtonLabel?: string
  /** Show decorative vertical grid lines (Esprit 01 style) — ACF: hero_grid_lines */
  gridLines?: boolean
}



/** WordPress equivalent: ACF options page — global site settings */
export interface AgencyConfig {
  /** Site title / agency name — wp_options: blogname */
  agencyName: string
  /** Short abbreviation used in compact UI contexts — ACF: agency_short_name */
  shortName: string
  /** Brand tagline — ACF: agency_tagline */
  tagline: string
  /** Text used as the logo wordmark until an SVG is provided — ACF: agency_logo_text */
  logoText: string
  /** Primary contact email address — ACF: agency_contact_email */
  contactEmail: string
  /** Social platform URLs — ACF: agency_social (group) */
  social: {
    linkedin: string
    instagram: string
    twitter: string
  }
}

/* ----------------------------------------
   NAVIGATION
---------------------------------------- */

/** WordPress equivalent: custom nav menu via wp_nav_menu */
export interface NavigationItem {
  /** Route path — corresponds to the menu item URL */
  path: string
  /** French display label — menu item title */
  label: string
  /** Optional pillar identifier for grouped sub-navigation */
  pillar?: 'digital' | 'ia' | 'conseil'
  /** Nested child pages for dropdown or flyout rendering */
  children?: NavigationItem[]
}

/* ----------------------------------------
   EXPERTISE CATEGORY
---------------------------------------- */

/** WordPress equivalent: custom taxonomy 'pillar' */
export interface ExpertiseCategory {
  /** URL slug — taxonomy slug */
  slug: string
  /** French display label — taxonomy name */
  label: string
  /** Pillar identifier — maps to the pillar taxonomy */
  pillar: 'digital' | 'ia' | 'conseil'
  /** CSS token name for the pillar's primary accent color — ACF: category_accent_token */
  accentColorToken: string
  /** Ordered list of child expertise page slugs — ACF: category_expertise_slugs */
  expertiseSlugs: string[]
  /** Full registered route path for this category hub — ACF: category_route */
  route: string
  /** One-sentence category positioning statement — ACF: category_positioning */
  positioning: string
  /** Short description shown in category cards — ACF: category_description */
  description: string
  /** CTA button label for category cards — ACF: category_cta_label */
  ctaLabel: string
  /** Sequential display index (1-based) — ACF: category_index */
  index: number
  /** Optional proof metric for category card — ACF: category_proof */
  proof?: ExpertiseProof
}

/* ----------------------------------------
   EXPERTISE PROOF
---------------------------------------- */

/** Quantified proof metric — ACF: expertise_proof group */
export interface ExpertiseProof {
  /** Metric value string, e.g. "+40%" — ACF: proof_value */
  value: string
  /** Metric label, e.g. "taux de conversion moyen" — ACF: proof_label */
  label: string
  /** Optional source attribution — ACF: proof_source */
  source?: string
}

/* ----------------------------------------
   EXPERTISE PAGE
---------------------------------------- */

/** WordPress equivalent: CPT 'expertise' with taxonomy 'pillar' */
export interface ExpertisePage {
  /** URL slug — post_name */
  slug: string
  /** Parent pillar — taxonomy 'pillar' term */
  pillar: 'digital' | 'ia' | 'conseil'
  /** French page title — post_title */
  title: string
  /** Full registered route path for this expertise page — ACF: expertise_route */
  route: string
  /** One-sentence positioning statement for the hero — ACF: expertise_positioning */
  positioning: string
  /** Large display headline shown in the hero — ACF: expertise_headline */
  headline: string
  /** Brief problem statement shown under the headline — ACF: expertise_problem_statement */
  problemStatement: string
  /** Title of the approach section — ACF: expertise_approach_title */
  approachTitle: string
  /** Body copy for the approach section — ACF: expertise_approach_body */
  approachBody: string
  /** Identifies which device or print mockup variant to use — ACF: expertise_mockup_variant */
  mockupVariant: string
  /** List of toolkit or methodology items — ACF: expertise_toolkit (repeater) */
  toolkitItems: ToolkitItem[]
  /** Slugs of related projects or case studies — ACF: expertise_related_projects */
  relatedProjectSlugs: string[]
  /** SEO meta description — Yoast/SEOPress field */
  metaDescription: string
  /** Marks this page as a priority — displayed with enhanced hero treatment */
  priority?: boolean
  /** Optional proof metric for the hero — ACF: expertise_proof */
  proof?: ExpertiseProof
}

/* ----------------------------------------
   PROJECT (base)
---------------------------------------- */

/** WordPress equivalent: CPT 'realisation' */
export interface Project {
  /** URL slug — post_name */
  slug: string
  /** Distinguishes portfolio items from case studies — ACF: project_type */
  type: 'portfolio' | 'cas-client'
  /** Client name — ACF: project_client */
  client: string
  /** Associated pillar — taxonomy 'pillar' */
  pillar: 'digital' | 'ia' | 'conseil'
  /** Year of completion — ACF: project_year */
  year: number
  /** Placeholder image path or Pexels URL — ACF: project_cover_image */
  imagePlaceholder: string
  /** Category or technique tags — ACF: project_tags */
  tags: string[]
  /** One-sentence project description — ACF: project_brief_description */
  briefDescription: string
}

/* ----------------------------------------
   CASE STUDY
---------------------------------------- */

/** WordPress equivalent: CPT 'realisation' filtered to type = cas-client */
export interface CaseStudy extends Project {
  /** Narrative description of the client's challenge — ACF: case_challenge_body */
  challengeBody: string
  /** Narrative description of the agency's response — ACF: case_response_body */
  responseBody: string
  /** Quantified results — ACF: case_metrics (repeater) */
  metrics: Array<{ label: string; value: string }>
  /** Brief results summary for listing views — ACF: case_results_summary */
  resultsSummary: string
}

/* ----------------------------------------
   PORTFOLIO ITEM
---------------------------------------- */

/** WordPress equivalent: CPT 'realisation' filtered to type = portfolio */
export interface PortfolioItem extends Project {
  /** Additional gallery image paths — ACF: portfolio_gallery (gallery field) */
  galleryImages: string[]
  /** Brief context text for the detail page — ACF: portfolio_context */
  projectContext: string
}

/* ----------------------------------------
   ARTICLE
---------------------------------------- */

/** WordPress equivalent: native WordPress post */
export interface Article {
  /** URL slug — post_name */
  slug: string
  /** French article title — post_title */
  title: string
  /** Category label — post_category name */
  category: string
  /** Associated pillar — ACF: article_pillar */
  pillar: 'digital' | 'ia' | 'conseil'
  /** ISO 8601 date string — post_date */
  date: string
  /** Author display name — display_name from WP_User */
  author: string
  /** One- or two-sentence excerpt — post_excerpt */
  excerpt: string
  /** Cover image path or Pexels URL — featured image */
  imagePlaceholder: string
  /** Full article body in HTML — post_content */
  body: string
}

/* ----------------------------------------
   PROCESS STEP
---------------------------------------- */

/** WordPress equivalent: ACF repeater field 'method_steps' on Méthode page */
export interface ProcessStep {
  /** Step sequence number — ACF: step_number */
  number: number
  /** Short step title — ACF: step_title */
  title: string
  /** Step description — ACF: step_description */
  description: string
  /** Optional list of concrete deliverables for this step — ACF: step_deliverables (text area, line-separated) */
  deliverables?: string[]
  /** Optional duration estimate label, e.g. "1–2 semaines" — ACF: step_duration_label */
  durationLabel?: string
  /** Optional accent theme for visual differentiation — ACF: step_theme */
  theme?: AccentTheme
}

/* ----------------------------------------
   TOOLKIT CATEGORY
---------------------------------------- */

/** Grouping label for toolkit items — ACF: toolkit_category */
export type ToolkitCategory =
  | 'Stratégie'
  | 'Design'
  | 'Développement'
  | 'WordPress'
  | 'Performance'
  | 'Automatisation'
  | 'Intelligence Artificielle'
  | 'Collaboration'

/** How the ToolkitIcon is rendered — determines the CSS class applied */
export type ToolkitIconKind = 'initials' | 'css-mark'

/** Lifecycle / availability status of a toolkit item — ACF: toolkit_status */
export type ToolkitStatus = 'actif' | 'beta' | 'partenaire'

/* ----------------------------------------
   TOOLKIT ITEM
---------------------------------------- */

/** WordPress equivalent: ACF repeater 'toolkit_items' on Méthode and Expertise pages */
export interface ToolkitItem {
  /** Tool or methodology name — ACF: toolkit_name */
  name: string
  /** Brief description of how it is used — ACF: toolkit_description */
  description: string
  /** Icon placeholder identifier — ACF: toolkit_icon */
  iconPlaceholder: string
  /** Which rendering strategy the ToolkitIcon uses — ACF: toolkit_icon_kind */
  iconKind?: ToolkitIconKind
  /** Toolkit category for grouping — ACF: toolkit_category */
  category?: ToolkitCategory
  /** Short tag shown as a chip on the card — ACF: toolkit_label */
  label?: string
  /** Lifecycle status — ACF: toolkit_status */
  status?: ToolkitStatus
  /** Optional route or external URL for more information — ACF: toolkit_url */
  url?: string
}

/* ----------------------------------------
   COMPONENT VARIANT TYPES
---------------------------------------- */

/** Visual variant for ExpertiseCategoryCard */
export type ExpertiseCardVariant = 'light' | 'dark' | 'hybrid'

/** Visual variant for ExpertiseDetailHero */
export type ExpertiseHeroVariant = 'light' | 'dark' | 'priority'

/** Layout/visual variant for NumberedServiceIntro */
export type ServiceIntroVariant = 'light' | 'dark' | 'compact' | 'wide'

/* ----------------------------------------
   TEAM MEMBER
---------------------------------------- */

/** WordPress equivalent: CPT 'team_member' or ACF repeater on Agence page */
export interface TeamMember {
  /** Full name — post_title or ACF: member_name */
  name: string
  /** Job title or role — ACF: member_role */
  role: string
  /** Portrait image path — featured image or ACF: member_photo */
  imagePlaceholder: string
  /** Short biography — ACF: member_bio */
  bio: string
}

/* ----------------------------------------
   TESTIMONIAL
---------------------------------------- */

/** WordPress equivalent: CPT 'testimonial' or ACF repeater */
export interface TestimonialItem {
  /** The testimonial quote text — ACF: testimonial_quote */
  quote: string
  /** Client full name — ACF: testimonial_client_name */
  clientName: string
  /** Client job title — ACF: testimonial_client_role */
  clientRole: string
  /** Client company name — ACF: testimonial_client_company */
  clientCompany: string
  /** Optional portrait image — ACF: testimonial_photo */
  imagePlaceholder?: string
}

/* ----------------------------------------
   FAQ ITEM
---------------------------------------- */

/** WordPress equivalent: ACF repeater 'faq_items' on Expertise and Méthode pages */
export interface FAQItem {
  /** Question text — ACF: faq_question */
  question: string
  /** Answer text — ACF: faq_answer */
  answer: string
}

/* ----------------------------------------
   CONTACT FORM DATA
---------------------------------------- */

/** Form submission payload — handled by Contact Form 7 or WPForms in WordPress */
export interface ContactFormData {
  /** Visitor's full name — form field: name */
  name: string
  /** Company name — form field: company */
  company: string
  /** Email address — form field: email */
  email: string
  /** Telephone number — form field: telephone */
  telephone: string
  /** Project brief or message — form field: message */
  message: string
  /** Selected service category — form field: service_category */
  serviceCategory: 'digital' | 'ia' | 'conseil' | 'autre'
}
