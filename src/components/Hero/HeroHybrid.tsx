import { Link } from 'react-router-dom'
import type { HeroData } from '../../types'
import HeroHeadline from './HeroHeadline'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'
import './HeroHybrid.css'

interface HeroHybridProps {
  data: HeroData
  headingLevel?: 1 | 2 | 3
  isDemo?: boolean
  accessibleLabel?: string
  scrollTargetId: string
}

/**
 * Recommended hybrid hero.
 * Primary headline: Space Grotesk 'geometric' segments.
 * Optional outlined accent word: Barlow Condensed 'outline' segment.
 * Background: hybrid dark violet gradient (--gradient-hybrid).
 * Restrained dark-violet shift — IA magenta/violet tokens used sparingly.
 */
export default function HeroHybrid({
  data,
  headingLevel = 2,
  isDemo = false,
  accessibleLabel = 'Héros hybride',
  scrollTargetId,
}: HeroHybridProps) {
  return (
    <section
      className={`hero-hybrid${isDemo ? ' hero-hybrid--demo' : ''}`}
      aria-label={isDemo ? accessibleLabel : undefined}
    >
      {data.gridLines && (
        <div className="hero-hybrid__grid" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="hero-hybrid__grid-line" />
          ))}
        </div>
      )}

      <div className="hero-hybrid__inner container--wide">
        <div className="hero-hybrid__content">
          <p className="hero-hybrid__eyebrow label">{data.eyebrow}</p>

          <HeroHeadline data={data} headingLevel={headingLevel} />

          <p className="hero-hybrid__body text-lead">{data.body}</p>

          <div className="hero-hybrid__ctas">
            <Link to={data.ctaPrimary.path} className="btn btn--primary">
              {data.ctaPrimary.label}
            </Link>
            {data.ctaSecondary && (
              <Link to={data.ctaSecondary.path} className="btn btn--light">
                {data.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="hero-hybrid__scroll">
        <ScrollIndicator targetId={scrollTargetId} label="Découvrir" />
      </div>
    </section>
  )
}
