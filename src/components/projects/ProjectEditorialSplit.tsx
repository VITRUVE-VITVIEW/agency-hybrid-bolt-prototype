import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { CaseStudy, AccentTheme, ProjectMedia } from '../../types'
import { resolveAccent } from '../../utils/accentTheme'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './ProjectEditorialSplit.css'

interface ProjectEditorialSplitProps {
  data: CaseStudy
  media: ProjectMedia
  layout?: 'content-left' | 'content-right'
  headingLevel?: 2 | 3 | 4
  accent: AccentTheme
  /** Index of the word in the display title to receive text-outline treatment (0-based) */
  outlineWordIndex?: number
  showGridLines?: boolean
  ctaPath: string
}

export default function ProjectEditorialSplit({
  data,
  media,
  layout = 'content-left',
  headingLevel = 3,
  accent,
  outlineWordIndex = 0,
  showGridLines = true,
  ctaPath,
}: ProjectEditorialSplitProps) {
  const Tag = `h${headingLevel}` as ElementType
  const accentColor = resolveAccent(accent)
  const displayTitle = data.briefDescription.split('.')[0]
  const displayWords = displayTitle.split(' ')

  return (
    <article
      className={`project-split project-split--${layout}`}
      style={{ '--project-accent': accentColor } as React.CSSProperties}
    >
      {showGridLines && (
        <div className="project-split__grid" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="project-split__grid-line" />
          ))}
        </div>
      )}

      <div className="project-split__inner">
        <div className="project-split__number" aria-hidden="true">
          {String(data.year).slice(-2)}
        </div>

        <div className="project-split__media-col">
          <MediaPlaceholder media={media} />
        </div>

        <div className="project-split__content-col">
          <div className="project-split__meta">
            <span className="project-split__category label">{data.tags[0]}</span>
            <span className="project-split__year label" aria-label={`Année ${data.year}`}>{data.year}</span>
          </div>

          <Tag className="project-split__title">
            <span className="sr-only">{data.briefDescription}</span>
            <span aria-hidden="true">
              {displayWords.map((word, i) => (
                <span key={i}>
                  <span className={`project-split__word${i === outlineWordIndex ? ' project-split__word--outline' : ''}`}>
                    {word}
                  </span>
                  {i < displayWords.length - 1 && ' '}
                </span>
              ))}
            </span>
          </Tag>

          <p className="project-split__client label">{data.client}</p>

          <p className="project-split__description">{data.briefDescription}</p>

          {data.metrics.length > 0 && (
            <ul className="project-split__metrics" aria-label="Résultats clés">
              {data.metrics.slice(0, 2).map((m, i) => (
                <li key={i} className="project-split__metric">
                  <span className="project-split__metric-value">{m.value}</span>
                  <span className="project-split__metric-label">{m.label}</span>
                </li>
              ))}
            </ul>
          )}

          <Link to={ctaPath} className="btn btn--light project-split__cta">
            Voir le projet
          </Link>
        </div>
      </div>
    </article>
  )
}
