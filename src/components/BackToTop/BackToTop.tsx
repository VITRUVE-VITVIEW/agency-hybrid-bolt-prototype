import { useEffect, useState, useCallback, useRef } from 'react'
import './BackToTop.css'

interface BackToTopProps {
  /** ID of the element to focus after scrolling to top — defaults to 'page-top' */
  topAnchorId?: string
}

/**
 * Fixed back-to-top button. Appears after scrolling past 400px.
 * After activation, scrolls to top and moves focus to topAnchorId.
 * Respects prefers-reduced-motion: uses 'smooth' or 'auto' accordingly.
 */
export default function BackToTop({ topAnchorId = 'page-top' }: BackToTopProps) {
  const [visible, setVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = useCallback(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })

    const anchor = document.getElementById(topAnchorId)
    if (anchor) {
      anchor.focus({ preventScroll: true })
    }
  }, [topAnchorId])

  return (
    <button
      ref={buttonRef}
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Retour en haut de page"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
