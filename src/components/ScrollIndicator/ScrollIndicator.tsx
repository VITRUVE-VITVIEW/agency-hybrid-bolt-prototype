import { useCallback } from 'react'
import './ScrollIndicator.css'

interface ScrollIndicatorProps {
  /** ID of the target section to scroll to. Required — no implicit DOM traversal. */
  targetId: string
  /** Label shown beside the arrow */
  label?: string
}

/**
 * Animated scroll-down prompt.
 * targetId must reference an existing DOM element id.
 * If the target is not found the click fails safely with no error.
 * Respects prefers-reduced-motion.
 */
export default function ScrollIndicator({ targetId, label = 'Découvrir' }: ScrollIndicatorProps) {
  const handleClick = useCallback(() => {
    const target = document.getElementById(targetId)
    if (!target) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })
    target.focus({ preventScroll: true })
  }, [targetId])

  return (
    <button
      className="scroll-indicator"
      onClick={handleClick}
      aria-label={`${label} — défiler vers la section suivante`}
    >
      <span className="scroll-indicator__label label">{label}</span>
      <span className="scroll-indicator__track" aria-hidden="true">
        <span className="scroll-indicator__dot" />
      </span>
    </button>
  )
}
