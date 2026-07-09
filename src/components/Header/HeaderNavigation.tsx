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
  onMenuOpen: () => void
  variant?: 'transparent' | 'solid-dark' | 'solid-light'
  demoMode?: boolean
}

/**
 * Variant B — header with horizontal primary navigation links.
 */
export default function HeaderNavigation({
  logoText,
  primaryNav,
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
