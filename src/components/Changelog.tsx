import React, { ReactNode } from 'react'
import '../styles/Changelog.scss'

/**
 * Пропсы для {@link Changelog}.
 */
export interface ChangelogProps {
  /**
   * Тема чейнджлога, подставляется с префиксом theme-.
   */
  theme?: string

  children: ReactNode
}

/**
 * Основной компонент чейнджлога.
 */
export const Changelog = (props: ChangelogProps) => {
  return <div className={`Changelog ${props.theme ? `theme-${props.theme}` : ''}`}>
    {props.children}
  </div>
}

/**
 * Пропсы для {@link Changelog.Body}.
 */
export interface BodyProps {
  children: ReactNode
}

const Body = (props: BodyProps) => {
  return <div className='Changelog__body'>
    {props.children}
  </div>
}

/**
 * Шапка чейнджлога.
 */
Changelog.Body = Body

/**
 * Пропсы для {@link Changelog.Header}
 */
 interface HeaderProps {
  children: ReactNode
}

const Header = (props: HeaderProps) => {
  return <div className='Changelog__header'>
    {props.children}
  </div>
}

/**
 * Шапка чейнджлога.
 */
Changelog.Header = Header
