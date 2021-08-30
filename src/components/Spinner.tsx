import React from 'react'
require('../styles/Spinner.scss')

/**
 * Пропсы для {@link Spinner}
 */
export interface SpinnerProps {
  /**
   * Сообщение.
   */
  text: string;
}

/**
 * Спиннер.
 */
export const Spinner = (props: SpinnerProps) => {
  return <div className='Spinner'>
    <i className='Spinner__icon fas fa-spinner'>
    </i><span className='Spinner__text'>{props.text}</span>
  </div>
}
