import { useRef, useEffect, RefObject } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '../Button/IconButton'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import './FullscreenMenu.css'

interface NavItem {
  path: string
  label: string
  pillar?: 'digital' | 'ia' | 'conseil'
}

interface FullscreenMenuProps {
  isOpen: boolean
  onClose: () => void
  triggerRef: RefObject<HTMLElement | null>
  navItems: NavItem[]
  logoText: string
}

const PILLAR_LABELS: Record<string, string> = {
  digital: 'Digital',
  ia: 'Intelligence Artificielle',
  conseil: 'Conseil',
}

/**
 * Full-screen editorial navigation overlay.
 * All three overlay hooks are used — scroll lock, Escape, focus trap.
 * Focus is moved to the close button on open and restored to the trigger on close.
 */
export default function FullscreenMenu({
  isOpen,
  onClose,
  triggerRef,
  navItems,
  logoText,
}: FullscreenMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useBodyScrollLock(isOpen)
  useEscapeKey(isOpen, onClose)
  useFocusTrap(containerRef, isOpen)

  /* Move focus to close button when opened */
  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => {
        closeButtonRef.current?.focus()
      })
      return () => cancelAnimationFrame(frame)
    }
    return undefined
  }, [isOpen])

  /* Restore focus to trigger on close */
  useEffect(() => {
    if (!isOpen) {
      const frame = requestAnimationFrame(() => {
        triggerRef.current?.focus()
      })
      return () => cancelAnimationFrame(frame)
    }
    return undefined
  }, [isOpen, triggerRef])

  const mainItems = navItems.filter(item => !item.pillar)
  const pillarItems = navItems.filter(item => item.pillar)

  return (
    <div
      className={`fullscreen-menu${isOpen ? ' fullscreen-menu--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      ref={containerRef}
      tabIndex={-1}
    >
      <div className="fullscreen-menu__bar container--wide">
        <span className="fullscreen-menu__logo label">{logoText}</span>
        <IconButton
          ref={closeButtonRef}
          variant="close"
          label="Fermer le menu"
          tone="light"
          onClick={onClose}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </IconButton>
      </div>

      <nav className="fullscreen-menu__nav container--wide" aria-label="Navigation principale">
        <ul className="fullscreen-menu__main-list" role="list">
          {mainItems.map((item, index) => (
            <li key={item.path} className="fullscreen-menu__item">
              <span className="fullscreen-menu__number label">
                {String(index + 1).padStart(2, '0')}
              </span>
              <Link to={item.path} className="fullscreen-menu__link display-editorial" onClick={onClose}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {pillarItems.length > 0 && (
          <ul className="fullscreen-menu__pillar-list" role="list">
            {pillarItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="fullscreen-menu__pillar-link label"
                  onClick={onClose}
                >
                  {item.pillar && PILLAR_LABELS[item.pillar]
                    ? PILLAR_LABELS[item.pillar]
                    : item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  )
}
