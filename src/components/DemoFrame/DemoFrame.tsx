import { ReactNode, CSSProperties } from 'react'
import './DemoFrame.css'

type DemoBackground = 'dark' | 'light' | 'transparent' | 'gradient-ia' | 'gradient-hybrid'

interface DemoFrameProps {
  label: string
  /** Explicit height — omit for content-driven height */
  height?: string
  background?: DemoBackground
  /**
   * Clip the viewport — only use for components whose overflow is intentionally
   * decorative (e.g. grid lines, background layers). Never clip meaningful content.
   */
  clip?: boolean
  children: ReactNode
}

/**
 * Wraps a component specimen in the Style Lab.
 * position:relative so that demo-mode absolute elements resolve against this frame.
 * Content height is driven by children unless an explicit height is provided.
 */
export default function DemoFrame({
  label,
  height,
  background = 'transparent',
  clip = false,
  children,
}: DemoFrameProps) {
  const style: CSSProperties = {}
  if (height) style.height = height
  if (clip) style.overflow = 'hidden'

  return (
    <div className="demo-frame">
      <p className="demo-frame__label label">{label}</p>
      <div
        className={`demo-frame__viewport demo-frame__viewport--${background}`}
        style={style}
      >
        {children}
      </div>
    </div>
  )
}
