import React from 'react'
import '../styles/GoUp.scss'

/**
 * Пропсы для {@link GoUp}
 */
interface GoUpProps {
  show?: boolean
}

export const GoUp = (props: GoUpProps) => {
  return <button
      onClick={() => window.scrollTo(0, 0)}
      className={`GoUp ${props.show ? '' : 'GoUp--hide'}`}
    >
    <i className='fas fa-arrow-up' />
  </button>
}
