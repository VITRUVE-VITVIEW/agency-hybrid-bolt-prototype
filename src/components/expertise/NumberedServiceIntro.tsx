import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { ServiceIntroVariant } from '../../types'
import './NumberedServiceIntro.css'

interface NumberedServiceIntroProps {
  number: string | number
  eyebrow?: string
  title: string
  body: string
  ctaLabel?: string
  ctaPath?: string
  variant?: ServiceIntroVariant
  headingLevel?: 2 | 3 | 4
}

export default function NumberedServiceIntro({
  number,
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaPath,
  variant = 'light',
  headingLevel = 3,
}: NumberedServiceIntroProps) {
  const Tag = `h${headingLevel}` as ElementType

  return (
    <section className={`numbered-intro numbered-intro--${variant}`}>
      <div className="numbered-intro__inner container--reading">
        <div className="numbered-intro__number display-editorial" aria-hidden="true">
          {String(number).padStart(2, '0')}
        </div>

        {eyebrow && (
          <p className="numbered-intro__eyebrow label">{eyebrow}</p>
        )}

        <Tag className="numbered-intro__title">{title}</Tag>

        <p className="numbered-intro__body">{body}</p>

        {ctaLabel && ctaPath && (
          <Link
            to={ctaPath}
            className={`btn btn--${variant === 'dark' ? 'light' : 'secondary'} numbered-intro__cta`}
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  )
}
