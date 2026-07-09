import type { ProjectMedia } from '../../types'
import { resolveAccent, resolveAccentSecondary } from '../../utils/accentTheme'
import './MediaPlaceholder.css'

interface MediaPlaceholderProps {
  media: ProjectMedia
  /** When true, renders aria-hidden and no figcaption — for purely decorative uses */
  decorative?: boolean
  className?: string
}

const RATIO_VALUE: Record<string, string> = {
  '16/9':   '56.25%',
  '4/3':    '75%',
  '3/4':    '133.33%',
  '1/1':    '100%',
  'cinema': '42%',
}

export default function MediaPlaceholder({ media, decorative = false, className = '' }: MediaPlaceholderProps) {
  const accent = media.accent ? resolveAccent(media.accent) : 'var(--color-text-muted)'
  const accentSecondary = media.accent ? resolveAccentSecondary(media.accent) : 'var(--color-bg-charcoal)'
  const paddingTop = RATIO_VALUE[media.ratio] ?? '75%'

  if (decorative) {
    return (
      <div
        aria-hidden="true"
        className={`media-placeholder media-placeholder--${media.variant} ${className}`.trim()}
        style={{
          '--media-accent': accent,
          '--media-accent-secondary': accentSecondary,
          '--media-ratio': paddingTop,
        } as React.CSSProperties}
      />
    )
  }

  return (
    <figure
      className={`media-placeholder media-placeholder--${media.variant} ${className}`.trim()}
      style={{
        '--media-accent': accent,
        '--media-accent-secondary': accentSecondary,
        '--media-ratio': paddingTop,
      } as React.CSSProperties}
    >
      <div className="media-placeholder__visual" aria-hidden="true">
        <div className="media-placeholder__layer media-placeholder__layer--bg" />
        <div className="media-placeholder__layer media-placeholder__layer--pattern" />
        {(media.variant === 'device-frame' || media.variant === 'print-frame') && (
          <div className="media-placeholder__frame-outline" aria-hidden="true" />
        )}
      </div>
      <figcaption className="media-placeholder__caption">{media.label}</figcaption>
    </figure>
  )
}
