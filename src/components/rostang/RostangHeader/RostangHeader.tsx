import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import rostangNavigation, { rostangPrimaryCta } from '../../../data/rostangNavigation'
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock'
import { useEscapeKey } from '../../../hooks/useEscapeKey'
import { useFocusTrap } from '../../../hooks/useFocusTrap'
import './RostangHeader.css'

export default function RostangHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useBodyScrollLock(mobileOpen)
  useEscapeKey(mobileOpen, () => setMobileOpen(false))
  useFocusTrap(menuRef, mobileOpen)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setProjectsOpen(false)
  }, [location.pathname])

  // Close desktop dropdown on route change
  useEffect(() => {
    setProjectsOpen(false)
  }, [location.pathname])

  return (
    <header className="rostang-header" role="banner">
      <div className="rostang-header__inner">
        <Link to="/" className="rostang-header__logo" aria-label="ROSTANG — Accueil">
          ROSTANG
        </Link>

        {/* Desktop navigation */}
        <nav className="rostang-header__nav" aria-label="Navigation principale">
          <ul className="rostang-header__nav-list">
            {rostangNavigation.map((item) => (
              <li
                key={item.path}
                className={`rostang-header__nav-item${item.children ? ' rostang-header__nav-item--has-children' : ''}`}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="rostang-header__nav-trigger"
                      aria-expanded={projectsOpen}
                      aria-haspopup="true"
                      onClick={() => setProjectsOpen(!projectsOpen)}
                    >
                      {item.label}
                      <span className="rostang-header__nav-caret" aria-hidden="true">▾</span>
                    </button>
                    {projectsOpen && (
                      <ul className="rostang-header__submenu" role="menu">
                        {item.children.map((child) => (
                          <li key={child.path} role="none">
                            <Link
                              to={child.path}
                              role="menuitem"
                              className="rostang-header__submenu-link"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.path} className="rostang-header__nav-link">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="rostang-header__actions">
          <Link to={rostangPrimaryCta.path} className="rostang-btn rostang-btn--primary">
            {rostangPrimaryCta.label}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="rostang-header__burger"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="rostang-mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="rostang-header__burger-line" />
            <span className="rostang-header__burger-line" />
            <span className="rostang-header__burger-line" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="rostang-mobile-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile menu panel */}
      <nav
        ref={menuRef}
        id="rostang-mobile-menu"
        className={`rostang-mobile-menu${mobileOpen ? ' rostang-mobile-menu--open' : ''}`}
        aria-label="Navigation mobile"
        aria-hidden={!mobileOpen}
      >
        <div className="rostang-mobile-menu__header">
          <span className="rostang-mobile-menu__title">Menu</span>
          <button
            type="button"
            className="rostang-mobile-menu__close"
            aria-label="Fermer le menu"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="rostang-mobile-menu__list">
          {rostangNavigation.map((item) => (
            <li key={item.path} className="rostang-mobile-menu__item">
              <Link to={item.path} className="rostang-mobile-menu__link">
                {item.label}
              </Link>
              {item.children && (
                <ul className="rostang-mobile-menu__sublist">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link to={child.path} className="rostang-mobile-menu__sublink">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="rostang-mobile-menu__cta">
          <Link
            to={rostangPrimaryCta.path}
            className="rostang-btn rostang-btn--primary rostang-btn--block"
          >
            {rostangPrimaryCta.label}
          </Link>
        </div>
      </nav>
    </header>
  )
}
