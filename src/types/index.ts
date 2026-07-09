/**
 * All TypeScript data models for the agency prototype.
 * Each field is annotated with its future WordPress/ACF equivalent.
 */

/* ----------------------------------------
   AGENCY CONFIGURATION
---------------------------------------- */

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
}

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
}

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
