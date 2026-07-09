import './SocialRail.css'

interface SocialEntry {
  platform: string
  url: string
}

interface SocialRailProps {
  /** Social entries — only entries with a valid non-empty url are rendered */
  entries: SocialEntry[]
  /** Attach to the viewport (production) or to the nearest positioned ancestor (Style Lab demo) */
  demoMode?: boolean
}

/**
 * Persistent right-side social links rail.
 * Entries with empty or missing URLs are silently omitted.
 * Production: position fixed, viewport-relative.
 * Demo mode: position absolute, frame-relative.
 */
export default function SocialRail({ entries, demoMode = false }: SocialRailProps) {
  const validEntries = entries.filter(
    entry => entry.url && entry.url.trim().length > 0 && entry.url !== '#',
  )

  if (validEntries.length === 0) return null

  return (
    <aside className={`social-rail${demoMode ? ' social-rail--demo' : ''}`}>
      <div className="social-rail__line" aria-hidden="true" />
      <ul className="social-rail__list" role="list">
        {validEntries.map(entry => (
          <li key={entry.platform}>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-rail__link label"
              aria-label={`${entry.platform} (nouvel onglet)`}
            >
              {entry.platform}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
