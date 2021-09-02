import React, { ReactNode } from 'react'
import '../styles/Modal.scss'

/**
 * Пропсы для {@link Modal}
 */
interface ModalProps {
  children: ReactNode
  show?: boolean
  className?: string
}

export const Modal = (props: ModalProps) => {
  const { show, children, className } = props

  return <div
    className={`Modal ${className || ''} ${show ? '' : 'Modal--hide'}`}>
      {children}
  </div>
}
