import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { NumberedEditorialItem } from '../../data/editorialSections'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './NumberedEditorialSection.css'

interface NumberedEditorialSectionProps {
  data: NumberedEditorialItem
  headingLevel?: 2 | 3 | 4
}

export default function NumberedEditorialSection({
  data,
  headingLevel = 3,
}: NumberedEditorialSectionProps) {
  const Tag = `h${headingLevel}` as ElementType

  return (
    <section className={`numbered-section numbered-section--media-${data.mediaPosition}`}>
      <div className="numbered-section__inner container--wide">
        {/* Text column */}
        <div className="numbered-section__text-col">
          <span className="numbered-section__number display-editorial" aria-hidden="true">
            {data.number}
          </span>

          <Tag className="numbered-section__title">{data.title}</Tag>

          <p className="numbered-section__body">{data.body}</p>

          {data.list && data.list.length > 0 && (
            <ul className="numbered-section__list">
              {data.list.map((item, i) => (
                <li key={i} className="numbered-section__list-item">{item}</li>
              ))}
            </ul>
          )}

          {data.ctaLabel && data.ctaPath && (
            <Link to={data.ctaPath} className="numbered-section__cta btn btn--light">
              {data.ctaLabel}
            </Link>
          )}
        </div>

        {/* Media column */}
        {data.media && (
          <div className="numbered-section__media-col">
            <MediaPlaceholder media={data.media} />
          </div>
        )}
      </div>
    </section>
  )
}
