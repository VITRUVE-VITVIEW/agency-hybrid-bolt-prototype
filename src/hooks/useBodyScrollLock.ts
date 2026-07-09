import { useEffect } from 'react'
import { lock } from '../utils/bodyScrollLock'

/**
 * Locks the page scroll while isLocked is true.
 * Uses the shared singleton so nested overlays do not corrupt body state.
 * Each effect invocation acquires its own release closure.
 */
export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return
    const release = lock()
    return () => {
      release()
    }
  }, [isLocked])
}
