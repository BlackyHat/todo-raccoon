import { useState, useEffect, MouseEvent, useCallback } from 'react'
import { createPortal } from 'react-dom'

import { ModalProps } from './types'

import scss from './Modal.module.scss'

import CloseIcon from '@assets/icons/icon-plus.svg?react'

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose && onClose()
    }, 300)
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

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

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
        <div className={scss.modalTitle}>
          <p>Add new goal</p>
          <button
            className={scss.closeButton}
            onClick={closeModal}
            aria-label="close window"
          >
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-portal') as HTMLElement
  )
}
