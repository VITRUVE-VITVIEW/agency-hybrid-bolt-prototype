import type { PortfolioItem } from '../../types'
import type { ProjectMedia } from '../../types'
import PortfolioCard from './PortfolioCard'
import './PortfolioGrid.css'

interface PortfolioGridItem {
  data: PortfolioItem
  media: ProjectMedia
  ctaPath: string
}

interface PortfolioGridProps {
  items: PortfolioGridItem[]
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  if (items.length === 0) return null

  return (
    <section className="portfolio-grid" aria-label="Portfolio">
      <ul className="portfolio-grid__list" role="list">
        {items.map((item) => (
          <li key={item.data.slug} className="portfolio-grid__item">
            <PortfolioCard
              data={item.data}
              media={item.media}
              ctaPath={item.ctaPath}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
