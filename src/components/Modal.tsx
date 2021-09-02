import React from 'react'
import '../styles/Modal.scss'

interface ModalProps {
  children: React.ReactElement
  show?: boolean
  className?: string
}

export const Modal = (props: ModalProps) => {
  const { show, children, className } = props

  return <div
    className={`Modal ${className} ${show ? '' : 'Modal--hide'}`}>
      {children}
  </div>
}
