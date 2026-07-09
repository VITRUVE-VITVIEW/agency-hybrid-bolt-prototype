import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'dark' | 'editorial'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

/**
 * Text-based action button.
 * Variants: primary (blue filled), secondary (outlined blue), light (outlined white),
 * dark (black filled), editorial (white text / no border, dark context only).
 * Use IconButton for icon-only controls.
 */
export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}
