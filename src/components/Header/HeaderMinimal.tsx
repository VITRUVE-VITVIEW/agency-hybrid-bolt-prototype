import { Link } from 'react-router-dom'
import IconButton from '../Button/IconButton'
import './Header.css'

interface HeaderProps {
  /** Agency wordmark text */
  logoText: string
  /** Open the fullscreen navigation menu */
  onMenuOpen: () => void
  /** transparent variant floats over a hero; solid shows opaque bar */
  variant?: 'transparent' | 'solid-dark' | 'solid-light'
  /**
   * Demo mode: renders position:absolute relative to the DemoFrame
   * rather than position:sticky on the viewport.
   */
  demoMode?: boolean
}

/**
 * Variant A — minimal header: logo left, menu trigger right.
 * No horizontal navigation links.
 */
export default function HeaderMinimal({
  logoText,
  onMenuOpen,
  variant = 'solid-dark',
  demoMode = false,
}: HeaderProps) {
  return (
    <header
      className={[
        'site-header',
        `site-header--${variant}`,
        demoMode ? 'site-header--demo' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="site-header__inner container--wide">
        <Link to="/" className="site-header__logo" aria-label={`${logoText} — Accueil`}>
          <span className="site-header__logo-text">{logoText}</span>
        </Link>

        <IconButton
          variant="menu"
          label="Ouvrir la navigation"
          tone={variant === 'solid-light' ? 'dark' : 'light'}
          onClick={onMenuOpen}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </IconButton>
      </div>
    </header>
  )
}
