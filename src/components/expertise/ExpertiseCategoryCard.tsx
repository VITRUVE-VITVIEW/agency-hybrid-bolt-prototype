import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { ExpertiseCategory, ExpertiseCardVariant } from '../../types'
import { resolveAccent } from '../../utils/accentTheme'
import './ExpertiseCategoryCard.css'

interface ExpertiseCategoryCardProps {
  category: ExpertiseCategory
  variant?: ExpertiseCardVariant
  headingLevel?: 2 | 3 | 4
  showIndex?: boolean
}

export default function ExpertiseCategoryCard({
  category,
  variant = 'light',
  headingLevel = 3,
  showIndex = false,
}: ExpertiseCategoryCardProps) {
  const Tag = `h${headingLevel}` as ElementType
  const accentColor = resolveAccent(category.pillar)

  const accentStyle = {
    '--card-accent': accentColor,
  } as React.CSSProperties

  return (
    <article
      className={`expertise-card expertise-card--${variant} expertise-card--${category.pillar}`}
      style={accentStyle}
    >
      {variant === 'dark' && showIndex && (
        <span className="expertise-card__index display-editorial text-outline" aria-hidden="true">
          0{category.index}
        </span>
      )}

      {variant !== 'dark' && (
        <div className="expertise-card__accent-bar" aria-hidden="true" />
      )}

      <div className="expertise-card__body">
        <Tag className="expertise-card__title">{category.label}</Tag>
        <p className="expertise-card__positioning">{category.positioning}</p>
        <p className="expertise-card__description">{category.description}</p>

        {category.proof && (
          <div className="expertise-card__proof">
            <span className="expertise-card__proof-value display-editorial">
              {category.proof.value}
            </span>
            <span className="expertise-card__proof-label label">
              {category.proof.label}
            </span>
          </div>
        )}
      </div>

      <div className="expertise-card__footer">
        <span className="expertise-card__service-count label">
          {category.expertiseSlugs.length} expertise{category.expertiseSlugs.length > 1 ? 's' : ''}
        </span>
        <Link
          to={category.route}
          className={`btn btn--${variant === 'light' ? 'secondary' : 'light'} expertise-card__cta`}
        >
          {category.ctaLabel}
        </Link>
      </div>
    </article>
  )
}
