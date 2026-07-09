import { useRef, useEffect, ReactNode, useId, RefObject } from 'react'
import IconButton from '../Button/IconButton'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import './Modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  triggerRef: RefObject<HTMLElement | null>
  title: string
  children: ReactNode
}

/**
 * Accessible modal dialog.
 * role="dialog", aria-modal="true", aria-labelledby pointing to the title.
 * Initial focus moves to the close button. Focus is restored to the trigger on close.
 */
export default function Modal({ isOpen, onClose, triggerRef, title, children }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useBodyScrollLock(isOpen)
  useEscapeKey(isOpen, onClose)
  useFocusTrap(containerRef, isOpen)

  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => {
        closeButtonRef.current?.focus()
      })
      return () => cancelAnimationFrame(frame)
    }
    return undefined
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      const frame = requestAnimationFrame(() => {
        triggerRef.current?.focus()
      })
      return () => cancelAnimationFrame(frame)
    }
    return undefined
  }, [isOpen, triggerRef])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={containerRef}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal__header">
          <h2 id={titleId} className="modal__title h5">
            {title}
          </h2>
          <IconButton
            ref={closeButtonRef}
            variant="close"
            label="Fermer"
            tone="dark"
            onClick={onClose}
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </IconButton>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}
