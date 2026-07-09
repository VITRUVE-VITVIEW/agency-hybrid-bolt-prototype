import { Link } from 'react-router-dom'
import type { HeroData } from '../../types'
import HeroHeadline from './HeroHeadline'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'
import './HeroDarkEditorial.css'

interface HeroDarkEditorialProps {
  data: HeroData
  headingLevel?: 1 | 2 | 3
  isDemo?: boolean
  accessibleLabel?: string
  scrollTargetId: string
}

/**
 * Esprit 01 dark editorial hero.
 * Display font: Barlow Condensed via 'editorial' and 'outline' headline segments.
 * Features vertical grid lines, asymmetric composition, minimal white CTAs.
 */
export default function HeroDarkEditorial({
  data,
  headingLevel = 2,
  isDemo = false,
  accessibleLabel = 'Héros éditorial sombre',
  scrollTargetId,
}: HeroDarkEditorialProps) {
  return (
    <section
      className={`hero-dark${isDemo ? ' hero-dark--demo' : ''}`}
      aria-label={isDemo ? accessibleLabel : undefined}
    >
      {data.gridLines && (
        <div className="hero-dark__grid" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="hero-dark__grid-line" />
          ))}
        </div>
      )}

      <div className="hero-dark__inner container--wide">
        <div className="hero-dark__content">
          <p className="hero-dark__eyebrow label">{data.eyebrow}</p>

          <HeroHeadline data={data} headingLevel={headingLevel} />

          <p className="hero-dark__body text-lead">{data.body}</p>

          <div className="hero-dark__ctas">
            <Link to={data.ctaPrimary.path} className="btn btn--light">
              {data.ctaPrimary.label}
            </Link>
            {data.ctaSecondary && (
              <Link to={data.ctaSecondary.path} className="btn btn--editorial">
                {data.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>

        <div className="hero-dark__number-marker label" aria-hidden="true">
          01
        </div>
      </div>

      <div className="hero-dark__scroll">
        <ScrollIndicator targetId={scrollTargetId} label="Découvrir" />
      </div>
    </section>
  )
}
