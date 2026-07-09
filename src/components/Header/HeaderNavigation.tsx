import { Link, NavLink } from 'react-router-dom'
import IconButton from '../Button/IconButton'
import './Header.css'

interface NavItem {
  path: string
  label: string
}

interface HeaderNavigationProps {
  logoText: string
  primaryNav: NavItem[]
  /** Contact CTA — shown as a button-like link at the far right on desktop */
  contactLabel?: string
  contactPath?: string
  onMenuOpen: () => void
  variant?: 'transparent' | 'solid-dark' | 'solid-light'
  demoMode?: boolean
}

/**
 * Variant B — header with horizontal primary navigation.
 * On desktop: logo + nav links + contact CTA. Burger is hidden.
 * Below the collapse breakpoint (1024px): logo + burger only. Nav links hidden.
 */
export default function HeaderNavigation({
  logoText,
  primaryNav,
  contactLabel = 'Contact',
  contactPath = '/contact',
  onMenuOpen,
  variant = 'solid-dark',
  demoMode = false,
}: HeaderNavigationProps) {
  return (
    <header
      className={[
        'site-header',
        'site-header--with-nav',
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

        {/* Desktop nav — hidden at collapse breakpoint */}
        <nav className="site-header__nav" aria-label="Navigation principale">
          <ul className="site-header__nav-list" role="list">
            {primaryNav.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `site-header__nav-link label${isActive ? ' site-header__nav-link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop contact CTA — hidden at collapse breakpoint */}
        <div className="site-header__desktop-cta">
          {contactLabel && contactPath && (
            <Link
              to={contactPath}
              className={`btn btn--primary site-header__contact-btn`}
            >
              {contactLabel}
            </Link>
          )}
        </div>

        {/* Mobile burger — hidden on desktop when nav is visible */}
        <IconButton
          variant="menu"
          label="Ouvrir la navigation"
          tone={variant === 'solid-light' ? 'dark' : 'light'}
          onClick={onMenuOpen}
          className="site-header__burger"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </IconButton>
      </div>
    </header>
  )
}
