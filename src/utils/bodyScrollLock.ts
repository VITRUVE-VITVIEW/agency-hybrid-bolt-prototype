/**
 * Shared module-level body scroll lock singleton.
 *
 * Maintains one global counter so nested overlays do not corrupt body state.
 * Each call to lock() returns its own idempotent release closure — the only
 * way to decrement the counter is through the returned function, which
 * executes at most once. This prevents any component from releasing a lock
 * it did not acquire and is safe under React Strict Mode double-invocation.
 */

interface CapturedBodyState {
  position: string
  top: string
  width: string
  overflow: string
  scrollY: number
}

let lockCount = 0
let capturedState: CapturedBodyState | null = null

function applyLock(scrollY: number): void {
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = '100%'
  document.body.style.overflow = 'hidden'
}

function restoreLock(state: CapturedBodyState): void {
  document.body.style.position = state.position
  document.body.style.top = state.top
  document.body.style.width = state.width
  document.body.style.overflow = state.overflow
  window.scrollTo({ top: state.scrollY, behavior: 'instant' as ScrollBehavior })
}

/**
 * Acquires a body scroll lock.
 * Returns an idempotent release function bound to this single acquisition.
 * Call the returned function to release — it does nothing on subsequent calls.
 */
export function lock(): () => void {
  lockCount += 1

  if (lockCount === 1) {
    const scrollY = window.scrollY
    capturedState = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      scrollY,
    }
    applyLock(scrollY)
  }

  let released = false

  return function release() {
    if (released) return
    released = true

    lockCount = Math.max(0, lockCount - 1)

    if (lockCount === 0 && capturedState !== null) {
      restoreLock(capturedState)
      capturedState = null
    }
  }
}
