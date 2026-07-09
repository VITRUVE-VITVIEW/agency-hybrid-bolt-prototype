import { Link } from 'react-router-dom'
import IconButton from '../Button/IconButton'
import './Header.css'

interface HeaderMinimalProps {
  logoText: string
  onMenuOpen: () => void
  /** Contact link text — shown as a discreet inline action to the right of the logo */
  contactLabel?: string
  /** Contact page path */
  contactPath?: string
  variant?: 'transparent' | 'solid-dark' | 'solid-light'
  demoMode?: boolean
}

/**
 * Variant A — minimal header: logo left, optional contact link, menu trigger right.
 */
export default function HeaderMinimal({
  logoText,
  onMenuOpen,
  contactLabel = 'Contact',
  contactPath = '/contact',
  variant = 'solid-dark',
  demoMode = false,
}: HeaderMinimalProps) {
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

        <div className="site-header__actions">
          {contactLabel && contactPath && (
            <Link
              to={contactPath}
              className={`site-header__contact-link label${variant === 'solid-light' ? ' site-header__contact-link--dark' : ''}`}
            >
              {contactLabel}
            </Link>
          )}

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
      </div>
    </header>
  )
}
