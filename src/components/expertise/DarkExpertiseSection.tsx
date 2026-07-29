import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { AccentTheme, ExpertiseProof } from '../../types'
import type { ProjectMedia } from '../../types'
import { resolveAccent } from '../../utils/accentTheme'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './DarkExpertiseSection.css'

interface DarkExpertiseSectionProps {
  number?: string | number
  categoryLabel: string
  title: string
  titleWords?: string[]
  outlineWordIndex?: number
  body: string
  proof?: ExpertiseProof
  cta: { label: string; path: string }
  theme: AccentTheme
  media?: ProjectMedia
  mediaAlign?: 'left' | 'right'
  gridLines?: boolean
  headingLevel?: 2 | 3 | 4
}

export default function DarkExpertiseSection({
  number,
  categoryLabel,
  title,
  titleWords,
  outlineWordIndex,
  body,
  proof,
  cta,
  theme,
  media,
  mediaAlign = 'right',
  gridLines = false,
  headingLevel = 3,
}: DarkExpertiseSectionProps) {
  const Tag = `h${headingLevel}` as ElementType
  const accentColor = resolveAccent(theme)

  const accentStyle = {
    '--dark-expert-accent': accentColor,
  } as React.CSSProperties

  const words = titleWords ?? title.split(' ')

  return (
    <section
      className={`dark-expertise dark-expertise--media-${mediaAlign}${gridLines ? ' dark-expertise--grid-lines' : ''}`}
      style={accentStyle}
    >
      {gridLines && (
        <div className="dark-expertise__grid-lines" aria-hidden="true">
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className="dark-expertise__grid-line" />
          ))}
        </div>
      )}

      <div className="dark-expertise__inner container--wide">
        <div className="dark-expertise__content">
          {number !== undefined && (
            <span className="dark-expertise__number label" aria-hidden="true">
              {String(number).padStart(2, '0')}
            </span>
          )}

          <p className="dark-expertise__category label">{categoryLabel}</p>

          <Tag className="dark-expertise__title display-editorial">
            {words.map((word, i) => (
              <span
                key={i}
                className={
                  i === outlineWordIndex ? 'text-outline' : 'dark-expertise__title-word'
                }
              >
                {word}{' '}
              </span>
            ))}
          </Tag>

          <p className="dark-expertise__body">{body}</p>

          {proof && (
            <div className="dark-expertise__proof">
              <span className="dark-expertise__proof-value display-editorial">
                {proof.value}
              </span>
              <span className="dark-expertise__proof-label label">{proof.label}</span>
            </div>
          )}

          <Link to={cta.path} className="btn btn--light dark-expertise__cta">
            {cta.label}
          </Link>
        </div>

        {media && (
          <div className="dark-expertise__media">
            <MediaPlaceholder media={media} />
          </div>
        )}
      </div>
    </section>
  )
}
