import type { AccentTheme } from '../types'

export const ACCENT_TOKEN_MAP: Record<AccentTheme, string> = {
  digital:  'var(--color-digital-blue)',
  ia:       'var(--color-ia-violet)',
  conseil:  'var(--color-conseil-coral)',
  neutral:  'var(--color-text-muted)',
  blue:     'var(--color-cta-blue)',
  magenta:  'var(--color-ia-magenta)',
  coral:    'var(--color-conseil-coral-light)',
}

export const ACCENT_SECONDARY_TOKEN_MAP: Record<AccentTheme, string> = {
  digital:  'var(--color-digital-navy)',
  ia:       'var(--color-ia-purple)',
  conseil:  'var(--color-conseil-red)',
  neutral:  'var(--color-bg-charcoal)',
  blue:     'var(--color-digital-blue-dark)',
  magenta:  'var(--color-ia-violet)',
  coral:    'var(--color-conseil-coral)',
}

export function resolveAccent(theme: AccentTheme): string {
  return ACCENT_TOKEN_MAP[theme]
}

export function resolveAccentSecondary(theme: AccentTheme): string {
  return ACCENT_SECONDARY_TOKEN_MAP[theme]
}
