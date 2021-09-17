import React, { MouseEventHandler, RefObject, useMemo, useState } from 'react'
import useObserver from '../hooks/useObserver'
import '../styles/GoUp.scss'

/**
 * Пропсы для {@link GoUp}
 */
interface GoUpProps {
  topElement: RefObject<Element>
}

export const GoUp = (props: GoUpProps) => {
  const isIntersecting = useObserver(props.topElement)

  return <button
      onClick={() => window.scrollTo(0, 0)}
      className={`GoUp ${isIntersecting ? 'GoUp--hide' : ''}`}
    >
    <i className='fas fa-arrow-up' />
  </button>
}
