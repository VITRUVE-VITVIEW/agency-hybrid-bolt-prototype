import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { AccentTheme } from '../../types'
import type { ProjectMedia } from '../../types'
import { resolveAccent } from '../../utils/accentTheme'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './StrategyFeatureSection.css'

interface StrategyFeatureSectionProps {
  eyebrow?: string
  title: string
  titleWords?: string[]
  body: string
  bullets?: string[]
  cta: { label: string; path: string }
  theme: AccentTheme
  useGradient?: boolean
  media?: ProjectMedia
  headingLevel?: 2 | 3 | 4
}

export default function StrategyFeatureSection({
  eyebrow,
  title,
  titleWords,
  body,
  bullets,
  cta,
  theme,
  useGradient = false,
  media,
  headingLevel = 3,
}: StrategyFeatureSectionProps) {
  const Tag = `h${headingLevel}` as ElementType
  const accentColor = resolveAccent(theme)

  const accentStyle = {
    '--strategy-accent': accentColor,
  } as React.CSSProperties

  const words = titleWords ?? title.split(' ')

  return (
    <section
      className={`strategy-feature${useGradient ? ' strategy-feature--gradient' : ''}`}
      style={accentStyle}
    >
      <div className="strategy-feature__inner container--wide">
        <div className="strategy-feature__content">
          {eyebrow && (
            <p className="strategy-feature__eyebrow label">{eyebrow}</p>
          )}

          <Tag className="strategy-feature__title display-editorial">
            {words.map((word, i) => (
              <span
                key={i}
                className={i === 0 ? 'strategy-feature__title-word' : 'text-outline'}
              >
                {word}{i < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </Tag>

          <p className="strategy-feature__body">{body}</p>

          {bullets && bullets.length > 0 && (
            <ul className="strategy-feature__bullets">
              {bullets.map((b, i) => (
                <li key={i} className="strategy-feature__bullet label">{b}</li>
              ))}
            </ul>
          )}

          <Link to={cta.path} className="btn btn--light strategy-feature__cta">
            {cta.label}
          </Link>
        </div>

        {media && (
          <div className="strategy-feature__media">
            <MediaPlaceholder media={media} decorative />
          </div>
        )}
      </div>
    </section>
  )
}
