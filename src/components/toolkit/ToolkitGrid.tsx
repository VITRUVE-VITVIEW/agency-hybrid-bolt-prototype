import type { ToolkitItem, ToolkitCategory } from '../../types'
import ToolkitCard from './ToolkitCard'
import './ToolkitGrid.css'

const CATEGORY_ORDER: ToolkitCategory[] = [
  'Stratégie',
  'Design',
  'Développement',
  'WordPress',
  'Performance',
  'Automatisation',
  'Intelligence Artificielle',
  'Collaboration',
]

interface ToolkitGridProps {
  items: ToolkitItem[]
}

export default function ToolkitGrid({ items }: ToolkitGridProps) {
  const grouped = CATEGORY_ORDER.reduce<Record<string, ToolkitItem[]>>((acc, cat) => {
    const group = items.filter(item => item.category === cat)
    if (group.length > 0) acc[cat] = group
    return acc
  }, {})

  const uncategorised = items.filter(item => !item.category)

  return (
    <div className="toolkit-grid">
      {Object.entries(grouped).map(([category, groupItems]) => (
        <section key={category} className="toolkit-grid__group">
          <h3 className="toolkit-grid__group-label label">{category}</h3>
          <ul className="toolkit-grid__list" role="list">
            {groupItems.map(item => (
              <li key={item.name}>
                <ToolkitCard item={item} />
              </li>
            ))}
          </ul>
        </section>
      ))}

      {uncategorised.length > 0 && (
        <section className="toolkit-grid__group">
          <h3 className="toolkit-grid__group-label label">Autres</h3>
          <ul className="toolkit-grid__list" role="list">
            {uncategorised.map(item => (
              <li key={item.name}>
                <ToolkitCard item={item} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
