import { Link } from 'react-router-dom'
import type { PortfolioItem } from '../../types'
import type { ProjectMedia } from '../../types'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './PortfolioCard.css'

interface PortfolioCardProps {
  data: PortfolioItem
  media: ProjectMedia
  ctaPath: string
}

export default function PortfolioCard({ data, media, ctaPath }: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <Link to={ctaPath} className="portfolio-card__link" aria-label={`Voir le projet ${data.client}`}>
        <div className="portfolio-card__media">
          <MediaPlaceholder media={media} />
          <div className="portfolio-card__overlay" aria-hidden="true">
            <span className="portfolio-card__cta-hint label">Voir le projet</span>
          </div>
        </div>

        <div className="portfolio-card__content">
          <div className="portfolio-card__meta">
            <span className="portfolio-card__category label">{data.tags[0]}</span>
            <span className="portfolio-card__year label">{data.year}</span>
          </div>
          <h3 className="portfolio-card__title">{data.client}</h3>
          <p className="portfolio-card__description">{data.briefDescription}</p>
        </div>
      </Link>
    </article>
  )
}
