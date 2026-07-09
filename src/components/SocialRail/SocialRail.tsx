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
      {/* X / Twitter logotype shape */}
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.945l4.262 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
        fill="currentColor"
      />
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
  const validEntries = entries.filter(entry => {
    if (!entry.url || entry.url.trim().length === 0 || entry.url === '#') return false
    // Omit bare-domain placeholders that point nowhere meaningful
    const PLACEHOLDER_PATTERN = /^https?:\/\/(www\.)?(linkedin|instagram|twitter|x)\.com\/?$/
    return !PLACEHOLDER_PATTERN.test(entry.url.trim())
  })

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
