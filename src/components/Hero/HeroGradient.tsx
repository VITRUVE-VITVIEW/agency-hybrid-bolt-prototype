import { Link } from 'react-router-dom'
import type { HeroData } from '../../types'
import HeroHeadline from './HeroHeadline'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'
import IconButton from '../Button/IconButton'
import './HeroGradient.css'

interface HeroGradientProps {
  data: HeroData
  headingLevel?: 1 | 2 | 3
  isDemo?: boolean
  accessibleLabel?: string
  scrollTargetId: string
}

/**
 * Esprit 02 gradient hero.
 * Display font: Space Grotesk via 'geometric' headline segments.
 * Uses the IA gradient (magenta → violet) approved for this hero.
 * Large negative space, geometric bold headline, horizontal split layout.
 */
export default function HeroGradient({
  data,
  headingLevel = 2,
  isDemo = false,
  accessibleLabel = 'Héros dégradé',
  scrollTargetId,
}: HeroGradientProps) {
  return (
    <section
      className={`hero-gradient${isDemo ? ' hero-gradient--demo' : ''}`}
      aria-label={isDemo ? accessibleLabel : undefined}
    >
      <div className="hero-gradient__inner container--wide">
        <div className="hero-gradient__content">
          <p className="hero-gradient__eyebrow label">{data.eyebrow}</p>

          <HeroHeadline data={data} headingLevel={headingLevel} />

          <p className="hero-gradient__body text-lead">{data.body}</p>

          <div className="hero-gradient__ctas">
            <Link to={data.ctaPrimary.path} className="btn btn--dark">
              {data.ctaPrimary.label}
            </Link>
            {data.ctaSecondary && (
              <Link to={data.ctaSecondary.path} className="btn btn--light">
                {data.ctaSecondary.label}
              </Link>
            )}
            {data.playButtonLabel && (
              <IconButton variant="play" label={data.playButtonLabel} tone="light">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 5l8 5-8 5V5z" fill="currentColor" />
                </svg>
              </IconButton>
            )}
          </div>
        </div>
      </div>

      <div className="hero-gradient__scroll">
        <ScrollIndicator targetId={scrollTargetId} label="Explorer" />
      </div>
    </section>
  )
}
