import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import './ProcessIntro.css'

interface ProcessIntroProps {
  eyebrow?: string
  title: string
  body: string
  ctaLabel?: string
  ctaPath?: string
  variant?: 'light' | 'dark'
  headingLevel?: 2 | 3 | 4
}

export default function ProcessIntro({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaPath,
  variant = 'light',
  headingLevel = 3,
}: ProcessIntroProps) {
  const Tag = `h${headingLevel}` as ElementType

  return (
    <section className={`process-intro process-intro--${variant}`}>
      <div className="process-intro__inner container--reading">
        {eyebrow && (
          <p className="process-intro__eyebrow label">{eyebrow}</p>
        )}

        <Tag className="process-intro__title">{title}</Tag>

        <p className="process-intro__body">{body}</p>

        {ctaLabel && ctaPath && (
          <Link
            to={ctaPath}
            className={`btn btn--${variant === 'dark' ? 'light' : 'secondary'} process-intro__cta`}
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  )
}
