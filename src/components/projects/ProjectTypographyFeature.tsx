import { ElementType } from 'react'
import type { AccentTheme, ProjectMedia } from '../../types'
import { resolveAccent } from '../../utils/accentTheme'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './ProjectTypographyFeature.css'

interface ProjectTypographyFeatureProps {
  /** Full readable title for screen readers */
  accessibleTitle: string
  /** Display title — array of words */
  titleWords: string[]
  outlineMode: 'outline-only' | 'solid-only' | 'mixed'
  /** In mixed mode, words at or before this index are outlined */
  outlineSplitIndex?: number
  accent: AccentTheme
  client: string
  category: string
  media: ProjectMedia
  headingLevel?: 2 | 3 | 4
}

export default function ProjectTypographyFeature({
  accessibleTitle,
  titleWords,
  outlineMode,
  outlineSplitIndex = 1,
  accent,
  client,
  category,
  media,
  headingLevel = 3,
}: ProjectTypographyFeatureProps) {
  const Tag = `h${headingLevel}` as ElementType
  const accentColor = resolveAccent(accent)

  function getWordClass(index: number): string {
    if (outlineMode === 'outline-only') return 'project-typo__word--outline'
    if (outlineMode === 'solid-only') return 'project-typo__word--solid'
    return index <= outlineSplitIndex ? 'project-typo__word--outline' : 'project-typo__word--solid'
  }

  return (
    <article
      className="project-typo"
      style={{ '--project-accent': accentColor } as React.CSSProperties}
    >
      <div className="project-typo__inner">
        <div className="project-typo__heading-area">
          <Tag className="project-typo__title">
            <span className="sr-only">{accessibleTitle}</span>
            <span aria-hidden="true">
              {titleWords.map((word, i) => (
                <span key={i} className={`project-typo__word ${getWordClass(i)}`}>
                  {word}
                  {i < titleWords.length - 1 && ' '}
                </span>
              ))}
            </span>
          </Tag>
        </div>

        <div className="project-typo__media-area">
          <MediaPlaceholder media={media} />
        </div>

        <div className="project-typo__meta-area">
          <span className="project-typo__client label">{client}</span>
          <span className="project-typo__category label">{category}</span>
        </div>
      </div>
    </article>
  )
}
