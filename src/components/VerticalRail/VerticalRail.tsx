import './VerticalRail.css'

interface VerticalRailProps {
  /** Page section label displayed rotated — e.g. "Accueil" */
  sectionLabel?: string
  /** Attach to the viewport (production) or to the nearest positioned ancestor (Style Lab demo) */
  demoMode?: boolean
}

/**
 * Persistent left-side vertical section marker.
 * Production: position fixed, viewport-relative.
 * Demo mode: position absolute, frame-relative.
 */
export default function VerticalRail({ sectionLabel = 'Accueil', demoMode = false }: VerticalRailProps) {
  return (
    <aside
      className={`vertical-rail${demoMode ? ' vertical-rail--demo' : ''}`}
      aria-hidden="true"
    >
      <div className="vertical-rail__line" />
      <span className="vertical-rail__label label">{sectionLabel}</span>
    </aside>
  )
}
