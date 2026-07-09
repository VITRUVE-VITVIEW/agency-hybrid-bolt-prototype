import './SocialRail.css'

interface SocialEntry {
  platform: 'linkedin' | 'instagram' | 'twitter'
  url: string
}

interface SocialRailProps {
  entries: SocialEntry[]
  demoMode?: boolean
}

/* Inline SVG paths — no external dependency */
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 17v-3.5c0-1.5 1-2.5 2.5-2.5S16 12 16 13.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 4l16 16M4 20 20 4" stroke="currentColor" strokeWidth="0.1" opacity="0" />
      <path d="M3 5h4l3.5 5L14 5h4l-6 7.5L19 19h-4l-4-5.5L7.5 19H4l6.5-8L3 5z" fill="currentColor" />
    </svg>
  )
}

const ICONS: Record<SocialEntry['platform'], () => JSX.Element> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
}

const LABELS: Record<SocialEntry['platform'], string> = {
  linkedin: 'LinkedIn (nouvel onglet)',
  instagram: 'Instagram (nouvel onglet)',
  twitter: 'Twitter / X (nouvel onglet)',
}

/**
 * Persistent right-side social icon rail.
 * All icons are inline SVG — no external dependency.
 * Platform names are never rendered as visible text; all labels are aria-label only.
 * Production: position fixed. Demo mode: position absolute inside DemoFrame.
 */
export default function SocialRail({ entries, demoMode = false }: SocialRailProps) {
  const validEntries = entries.filter(
    entry => entry.url && entry.url.trim().length > 0 && entry.url !== '#',
  )

  if (validEntries.length === 0) return null

  return (
    <aside
      className={`social-rail${demoMode ? ' social-rail--demo' : ''}`}
      aria-label="Réseaux sociaux"
    >
      <div className="social-rail__line" aria-hidden="true" />
      <ul className="social-rail__list" role="list">
        {validEntries.map(entry => {
          const Icon = ICONS[entry.platform]
          if (!Icon) return null
          return (
            <li key={entry.platform}>
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-rail__link"
                aria-label={LABELS[entry.platform]}
              >
                <Icon />
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
