import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { ExpertisePage, ExpertiseHeroVariant } from '../../types'
import { resolveAccent } from '../../utils/accentTheme'
import './ExpertiseDetailHero.css'

interface ExpertiseDetailHeroProps {
  page: ExpertisePage
  variant?: ExpertiseHeroVariant
  headingLevel?: 2 | 3 | 4
  ctaLabel?: string
  secondaryCtaLabel?: string
  secondaryCtaPath?: string
  isDemo?: boolean
}

export default function ExpertiseDetailHero({
  page,
  variant = 'light',
  headingLevel = 2,
  ctaLabel = 'Discutons de votre projet',
  secondaryCtaLabel,
  secondaryCtaPath,
  isDemo = false,
}: ExpertiseDetailHeroProps) {
  const Tag = `h${headingLevel}` as ElementType
  const accentColor = resolveAccent(page.pillar)

  const accentStyle = {
    '--hero-accent': accentColor,
  } as React.CSSProperties

  const headlineLines = page.headline.split('\n')

  return (
    <section
      className={`expertise-hero expertise-hero--${variant}${isDemo ? ' expertise-hero--demo' : ''}`}
      style={accentStyle}
      aria-label={isDemo ? `Démonstration : héros expertise — ${page.title}` : undefined}
    >
      <div className="expertise-hero__inner container--content">
        <div className="expertise-hero__content">
          <p className="expertise-hero__pillar label">{page.pillar.toUpperCase()}</p>

          <Tag className="expertise-hero__title">
            {variant === 'dark' || variant === 'priority' ? (
              <>
                <span className="expertise-hero__title-solid display-editorial">
                  {headlineLines[0]}
                </span>
                {headlineLines[1] && (
                  <>
                    {' '}
                    <span className="expertise-hero__title-outline display-editorial text-outline">
                      {headlineLines[1]}
                    </span>
                  </>
                )}
              </>
            ) : (
              <span className="expertise-hero__title-geometric">{page.headline}</span>
            )}
          </Tag>

          <p className="expertise-hero__positioning">{page.positioning}</p>
          <p className="expertise-hero__problem">{page.problemStatement}</p>

          {variant === 'priority' && page.proof && (
            <div className="expertise-hero__proof">
              <span className="expertise-hero__proof-value display-editorial">
                {page.proof.value}
              </span>
              <span className="expertise-hero__proof-label label">{page.proof.label}</span>
            </div>
          )}

          <div className="expertise-hero__actions">
            <Link to="/contact" className={`btn btn--${variant === 'light' ? 'primary' : 'light'}`}>
              {ctaLabel}
            </Link>
            {secondaryCtaLabel && secondaryCtaPath && (
              <Link
                to={secondaryCtaPath}
                className={`btn btn--${variant === 'light' ? 'secondary' : 'editorial'}`}
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
