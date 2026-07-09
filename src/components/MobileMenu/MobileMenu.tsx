import { useRef, useEffect, useState, RefObject } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '../Button/IconButton'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import './MobileMenu.css'

interface NavItem {
  path: string
  label: string
  children?: NavItem[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  triggerRef: RefObject<HTMLElement | null>
  navItems: NavItem[]
  logoText: string
  /**
   * Bypasses the media-query display hiding so the menu trigger and panel
   * are visible at desktop widths in the Style Lab. Does not affect
   * production responsive behavior.
   */
  forceDemoMode?: boolean
}

/**
 * Slide-in mobile navigation panel.
 * Accordion groups are supported — focusable elements are recalculated
 * dynamically on every Tab/Shift+Tab, so expanding a group does not break
 * the focus trap.
 */
export default function MobileMenu({
  isOpen,
  onClose,
  triggerRef,
  navItems,
  logoText,
  forceDemoMode = false,
}: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set())

  useBodyScrollLock(isOpen)
  useEscapeKey(isOpen, onClose)
  useFocusTrap(containerRef, isOpen)

  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => {
        closeButtonRef.current?.focus()
      })
      return () => cancelAnimationFrame(frame)
    }
    return undefined
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      const frame = requestAnimationFrame(() => {
        triggerRef.current?.focus()
      })
      return () => cancelAnimationFrame(frame)
    }
    return undefined
  }, [isOpen, triggerRef])

  function toggleGroup(path: string) {
    setOpenGroups(prev => {
      const next = new Set(prev)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      return next
    })
  }

  return (
    <div
      className={[
        'mobile-menu',
        isOpen ? 'mobile-menu--open' : '',
        forceDemoMode ? 'mobile-menu--force-visible' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
      ref={containerRef}
      tabIndex={-1}
    >
      <div className="mobile-menu__header">
        <span className="mobile-menu__logo label">{logoText}</span>
        <IconButton
          ref={closeButtonRef}
          variant="close"
          label="Fermer le menu"
          tone="dark"
          onClick={onClose}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </IconButton>
      </div>

      <nav className="mobile-menu__nav" aria-label="Navigation mobile">
        <ul className="mobile-menu__list" role="list">
          {navItems.map(item => (
            <li key={item.path} className="mobile-menu__item">
              {item.children && item.children.length > 0 ? (
                <>
                  <button
                    className={`mobile-menu__group-trigger label${openGroups.has(item.path) ? ' mobile-menu__group-trigger--open' : ''}`}
                    onClick={() => toggleGroup(item.path)}
                    aria-expanded={openGroups.has(item.path)}
                  >
                    {item.label}
                    <svg className="mobile-menu__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openGroups.has(item.path) && (
                    <ul className="mobile-menu__sub-list" role="list">
                      {item.children.map(child => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className="mobile-menu__sub-link label"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="mobile-menu__link"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
