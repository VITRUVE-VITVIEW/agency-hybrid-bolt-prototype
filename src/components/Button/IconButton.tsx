import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import './IconButton.css'

type IconButtonVariant = 'menu' | 'close' | 'play' | 'previous' | 'next' | 'scroll'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: IconButtonVariant
  /** Accessible label — always required for icon-only buttons */
  label: string
  children: ReactNode
  /** 'light' renders on dark backgrounds, 'dark' renders on light backgrounds */
  tone?: 'light' | 'dark'
}

/**
 * Icon-only control button.
 * Handles menu, close, play, previous, next, scroll triggers.
 * Use Button for text-based actions.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { variant, label, children, tone = 'light', className = '', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`icon-btn icon-btn--${variant} icon-btn--${tone} ${className}`.trim()}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  )
})

export default IconButton
