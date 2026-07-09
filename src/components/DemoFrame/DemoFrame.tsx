import { ReactNode } from 'react'
import './DemoFrame.css'

interface DemoFrameProps {
  label: string
  height?: string
  /** Use 'dark' for dark-background demos, 'light' for light, 'transparent' for none */
  background?: 'dark' | 'light' | 'transparent'
  /** Allow overflow clipping for positioned elements inside */
  clip?: boolean
  children: ReactNode
}

/**
 * Wraps a component specimen in the Style Lab.
 * Provides position:relative so that demo-mode fixed/sticky elements
 * resolve against this frame rather than the browser viewport.
 */
export default function DemoFrame({
  label,
  height = 'auto',
  background = 'transparent',
  clip = false,
  children,
}: DemoFrameProps) {
  return (
    <div className="demo-frame">
      <p className="demo-frame__label label">{label}</p>
      <div
        className={`demo-frame__viewport demo-frame__viewport--${background}`}
        style={{
          height,
          overflow: clip ? 'hidden' : 'visible',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  )
}
