import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { AccentTheme } from '../../types'
import type { ProjectMedia } from '../../types'
import { resolveAccent, resolveAccentSecondary } from '../../utils/accentTheme'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './ExpertiseSplitSection.css'

interface SplitCTA {
  label: string
  path: string
}

interface ExpertiseSplitSectionProps {
  number?: string | number
  eyebrow?: string
  title: string
  description: string
  secondaryParagraph?: string
  cta: SplitCTA
  theme: AccentTheme
  media: ProjectMedia
  mediaAlign?: 'left' | 'right'
  headingLevel?: 2 | 3 | 4
}

export default function ExpertiseSplitSection({
  number,
  eyebrow,
  title,
  description,
  secondaryParagraph,
  cta,
  theme,
  media,
  mediaAlign = 'right',
  headingLevel = 3,
}: ExpertiseSplitSectionProps) {
  const Tag = `h${headingLevel}` as ElementType

  const accentStyle = {
    '--split-accent':           resolveAccent(theme),
    '--split-accent-secondary': resolveAccentSecondary(theme),
  } as React.CSSProperties

  return (
    <section
      className={`expertise-split expertise-split--media-${mediaAlign}`}
      style={accentStyle}
    >
      <div className="expertise-split__content">
        {number !== undefined && (
          <span className="expertise-split__number display-editorial" aria-hidden="true">
            {String(number).padStart(2, '0')}
          </span>
        )}

        {eyebrow && (
          <p className="expertise-split__eyebrow label">{eyebrow}</p>
        )}

        <Tag className="expertise-split__title">{title}</Tag>

        <p className="expertise-split__description">{description}</p>

        {secondaryParagraph && (
          <p className="expertise-split__secondary">{secondaryParagraph}</p>
        )}

        <Link to={cta.path} className="btn btn--secondary expertise-split__cta">
          {cta.label}
        </Link>
      </div>

      <div className="expertise-split__panel">
        <div className="expertise-split__media-wrap">
          <MediaPlaceholder media={media} decorative={false} />
        </div>
      </div>
    </section>
  )
}
