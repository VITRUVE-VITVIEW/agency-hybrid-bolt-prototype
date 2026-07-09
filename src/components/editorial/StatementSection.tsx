import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { StatementSectionData } from '../../data/editorialSections'
import { resolveAccent } from '../../utils/accentTheme'
import './StatementSection.css'

interface StatementSectionProps {
  data: StatementSectionData
  headingLevel?: 2 | 3
}

export default function StatementSection({
  data,
  headingLevel = 3,
}: StatementSectionProps) {
  const Tag = `h${headingLevel}` as ElementType
  const accentColor = data.accent ? resolveAccent(data.accent) : undefined

  return (
    <section
      className={`statement statement--${data.variant}`}
      style={accentColor ? ({ '--statement-accent': accentColor } as React.CSSProperties) : undefined}
    >
      <div className="statement__inner container--reading">
        {data.eyebrow && (
          <p className="statement__eyebrow label">{data.eyebrow}</p>
        )}
        <Tag className="statement__text">{data.statement}</Tag>
        {data.ctaLabel && data.ctaPath && (
          <Link to={data.ctaPath} className="statement__cta btn btn--light">
            {data.ctaLabel}
          </Link>
        )}
      </div>
    </section>
  )
}
