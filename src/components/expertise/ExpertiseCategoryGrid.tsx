import type { ExpertiseCategory, ExpertiseCardVariant } from '../../types'
import ExpertiseCategoryCard from './ExpertiseCategoryCard'
import './ExpertiseCategoryGrid.css'

interface ExpertiseCategoryGridProps {
  categories: ExpertiseCategory[]
  variant?: ExpertiseCardVariant
  headingLevel?: 2 | 3 | 4
  showIndex?: boolean
}

export default function ExpertiseCategoryGrid({
  categories,
  variant = 'light',
  headingLevel = 3,
  showIndex = false,
}: ExpertiseCategoryGridProps) {
  return (
    <div className={`expertise-grid expertise-grid--${variant}`}>
      {categories.map(category => (
        <ExpertiseCategoryCard
          key={category.slug}
          category={category}
          variant={variant}
          headingLevel={headingLevel}
          showIndex={showIndex}
        />
      ))}
    </div>
  )
}
