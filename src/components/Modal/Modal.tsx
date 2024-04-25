import { useState, useEffect, MouseEvent, useCallback } from 'react'
import { createPortal } from 'react-dom'

import { ModalProps } from './types'
import scss from './Modal.module.scss'

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  /**ADD delay before show modal or hide to animate process */

  const closeModal = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose && onClose()
    }, 300)
  }, [onClose])

  /** set up visible modal window by change status*/

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

  /** handle keydown by user press keyboard on ESC and also filter if window already visible not to add extra one listener*/

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVisible, closeModal])

  /** add scroll block to body and remove that  */

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  /** handle click on backdrop to close modal */

  const handleClickBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div
      className={`${scss.backdrop} ${
        isVisible ? scss.visible : scss.invisible
      }`}
      onClick={handleClickBackdrop}
    >
      <div
        className={`${scss.modal} ${isVisible ? scss.visible : scss.invisible}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-portal') as HTMLElement
  )
}
