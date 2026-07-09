import { useEffect } from 'react'

/**
 * Calls onEscape when the Escape key is pressed, only while isActive is true.
 * Listener is attached and removed based on isActive to avoid stale closures.
 */
export function useEscapeKey(isActive: boolean, onEscape: () => void): void {
  useEffect(() => {
    if (!isActive) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onEscape()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, onEscape])
}
