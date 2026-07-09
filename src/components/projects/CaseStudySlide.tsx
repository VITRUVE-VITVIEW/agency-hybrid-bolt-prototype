import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../../types'
import type { ProjectMedia } from '../../types'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './CaseStudySlide.css'

interface CaseStudySlideProps {
  data: CaseStudy
  media: ProjectMedia
  index: number
  ctaPath: string
  isActive?: boolean
}

const CaseStudySlide = forwardRef<HTMLElement, CaseStudySlideProps>(
  ({ data, media, index, ctaPath, isActive = false }, ref) => {
    return (
      <article
        ref={ref}
        className={`cs-slide${isActive ? ' cs-slide--active' : ''}`}
        aria-label={`Cas client ${index + 1} : ${data.client}`}
      >
        <div className="cs-slide__media">
          <MediaPlaceholder media={media} />
        </div>

        <div className="cs-slide__content">
          <div className="cs-slide__meta">
            <span className="cs-slide__index label" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="cs-slide__category label">{data.tags[0]}</span>
            <span className="cs-slide__year label">{data.year}</span>
          </div>

          <h3 className="cs-slide__title">{data.client}</h3>

          <p className="cs-slide__description">{data.briefDescription}</p>

          {data.resultsSummary && (
            <p className="cs-slide__result">
              <span className="cs-slide__result-label label">Résultat</span>
              {data.resultsSummary}
            </p>
          )}

          <Link to={ctaPath} className="btn btn--light cs-slide__cta">
            Voir le cas client
          </Link>
        </div>
      </article>
    )
  }
)

CaseStudySlide.displayName = 'CaseStudySlide'

export default CaseStudySlide
