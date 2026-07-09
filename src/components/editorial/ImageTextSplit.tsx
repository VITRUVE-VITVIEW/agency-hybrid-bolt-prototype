import { ElementType } from 'react'
import { Link } from 'react-router-dom'
import type { ImageTextSplitData } from '../../data/editorialSections'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './ImageTextSplit.css'

type MediaPosition = 'left' | 'right'
type SplitRatio = 'balanced' | 'asymmetric-media' | 'asymmetric-text'

interface ImageTextSplitProps {
  data: ImageTextSplitData
  mediaPosition: MediaPosition
  ratio?: SplitRatio
  headingLevel?: 2 | 3 | 4
  darkBackground?: boolean
}

export default function ImageTextSplit({
  data,
  mediaPosition,
  ratio = 'balanced',
  headingLevel = 3,
  darkBackground = false,
}: ImageTextSplitProps) {
  const Tag = `h${headingLevel}` as ElementType

  return (
    <section className={`image-split image-split--media-${mediaPosition} image-split--${ratio}${darkBackground ? ' image-split--dark' : ''}`}>
      <div className="image-split__inner container--wide">
        <div className="image-split__media-col">
          <MediaPlaceholder media={data.media} />
        </div>

        <div className="image-split__text-col">
          {data.eyebrow && (
            <p className="image-split__eyebrow label">{data.eyebrow}</p>
          )}
          <Tag className="image-split__title">{data.title}</Tag>
          <p className="image-split__body">{data.body}</p>
          {data.ctaLabel && data.ctaPath && (
            <Link
              to={data.ctaPath}
              className={`btn btn--${darkBackground ? 'light' : 'secondary'} image-split__cta`}
            >
              {data.ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
