import { Link } from 'react-router-dom'
import type { HeroData } from '../../types'
import HeroHeadline from './HeroHeadline'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'
import IconButton from '../Button/IconButton'
import VerticalRail from '../VerticalRail/VerticalRail'
import SocialRail from '../SocialRail/SocialRail'
import './HeroGradient.css'

interface SocialEntry {
  platform: 'linkedin' | 'instagram' | 'twitter'
  url: string
}

interface HeroGradientProps {
  data: HeroData
  headingLevel?: 1 | 2 | 3
  isDemo?: boolean
  accessibleLabel?: string
  scrollTargetId: string
  showRail?: boolean
  sectionLabel?: string
  socialEntries?: SocialEntry[]
}

export default function HeroGradient({
  data,
  headingLevel = 2,
  isDemo = false,
  accessibleLabel = 'Héros dégradé',
  scrollTargetId,
  showRail = false,
  sectionLabel = 'Accueil',
  socialEntries = [],
}: HeroGradientProps) {
  return (
    <section
      className={`hero-gradient${isDemo ? ' hero-gradient--demo' : ''}`}
      aria-label={isDemo ? accessibleLabel : undefined}
    >
      {showRail && <VerticalRail sectionLabel={sectionLabel} demoMode={isDemo} />}
      {socialEntries.length > 0 && <SocialRail entries={socialEntries} demoMode={isDemo} />}

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
