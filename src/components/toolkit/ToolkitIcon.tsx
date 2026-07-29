import type { ToolkitIconKind } from '../../types'
import './ToolkitIcon.css'

interface ToolkitIconProps {
  /** Two-character initials or identifier used for 'initials' kind */
  value: string
  kind?: ToolkitIconKind
  /** Accessible label — tool name */
  label: string
}

export default function ToolkitIcon({ value, kind = 'initials', label }: ToolkitIconProps) {
  return (
    <div
      className={`toolkit-icon toolkit-icon--${kind}`}
      aria-label={label}
      role="img"
    >
      {kind === 'initials' && (
        <span className="toolkit-icon__initials" aria-hidden="true">
          {value.slice(0, 2).toUpperCase()}
        </span>
      )}
      {kind === 'css-mark' && (
        <span className="toolkit-icon__mark" aria-hidden="true" />
      )}
    </div>
  )
}
