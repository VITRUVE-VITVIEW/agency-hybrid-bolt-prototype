import { ElementType } from 'react'
import type { HeroData } from '../../types'
import './HeroHeadline.css'

interface HeroHeadlineProps {
  data: HeroData
  headingLevel?: 1 | 2 | 3
}

const TREATMENT_CLASS: Record<string, string> = {
  geometric: 'hero-headline__segment--geometric display-geometric',
  editorial: 'hero-headline__segment--editorial display-editorial',
  outline:   'hero-headline__segment--outline display-editorial text-outline',
  accent:    'hero-headline__segment--accent display-accent',
}

/**
 * Renders the hero heading with accessible text pattern:
 * - sr-only span contains accessibleHeadline (always read by AT)
 * - aria-hidden span contains the visual segmented headline
 * This prevents the decorative visual treatment from interfering with accessibility.
 */
export default function HeroHeadline({ data, headingLevel = 2 }: HeroHeadlineProps) {
  const Tag = `h${headingLevel}` as ElementType

  return (
    <Tag className="hero-headline">
      <span className="sr-only">{data.accessibleHeadline}</span>
      <span className="hero-headline__visual" aria-hidden="true">
        {data.headline.map((segment, index) => (
          <span key={index}>
            <span className={`hero-headline__segment ${TREATMENT_CLASS[segment.treatment] ?? ''}`}>
              {segment.text}
            </span>
            {segment.lineBreakAfter && <br />}
          </span>
        ))}
      </span>
    </Tag>
  )
}
