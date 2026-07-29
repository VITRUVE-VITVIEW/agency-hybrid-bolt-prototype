import { Link } from 'react-router-dom'
import type { ToolkitItem } from '../../types'
import ToolkitIcon from './ToolkitIcon'
import './ToolkitCard.css'

interface ToolkitCardProps {
  item: ToolkitItem
}

const STATUS_LABEL: Record<string, string> = {
  actif:      'Actif',
  beta:       'Bêta',
  partenaire: 'Partenaire',
}

export default function ToolkitCard({ item }: ToolkitCardProps) {
  return (
    <article className="toolkit-card">
      <header className="toolkit-card__header">
        <ToolkitIcon
          value={item.iconPlaceholder}
          kind={item.iconKind ?? 'initials'}
          label={item.name}
        />
        <div className="toolkit-card__meta">
          {item.label && (
            <span className="toolkit-card__label label">{item.label}</span>
          )}
          {item.status && (
            <span className={`toolkit-card__status toolkit-card__status--${item.status} label`}>
              {STATUS_LABEL[item.status]}
            </span>
          )}
        </div>
      </header>

      <h3 className="toolkit-card__name">
        {item.url ? (
          <Link to={item.url} className="toolkit-card__link">
            {item.name}
          </Link>
        ) : (
          item.name
        )}
      </h3>

      <p className="toolkit-card__description">{item.description}</p>
    </article>
  )
}
