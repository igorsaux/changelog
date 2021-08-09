import React from 'react'
import '../styles/Header.scss'

/**
 * Пропсы для {@link Header}
 */
export interface HeaderProps {
  /**
   * Заголовок шапки.
   */
  title: string;

  /**
   * Текст шапки.
   */
  text: string;

  /**
   * Ссылки шапки.
   */
  links: Link[];
}

/**
 * Пропсы для {@link HeaderTitle}
 */
export interface HeaderTitleProps {
  /**
   * Заголовок шапки.
   */
  text: string;
}

/**
 * Пропсы для {@link HeaderText}
 */
export interface HeaderTextProps {
  /**
   * Текст шапки.
   */
  text: string;
}

/**
 * Пропсы для {@link Link}
 */
export interface Link {
  /**
   * URL Ссылка.
   */
  url: string;

  /**
   * Название Font Awesome класса иконки
   * @example 'fas fa-next'
   */
  icon: string;

  /**
   * Текст, выводимый при наведении курсора.
   */
  title: string;
}

/**
 * Пропсы для {@link HeaderLinks}
 */
export interface HeaderLinksProps {
  links: Link[];
}

/**
 * Заголовок шапки.
 */
export const HeaderTitle = (props: HeaderTitleProps) => {
  return <h2 className='Header__title'>{props.text}</h2>
}

/**
 * Текст шапки.
 */
export const HeaderText = (props: HeaderTextProps) => {
  return <p className='Header__text'>{props.text}</p>
}

/**
 * Ссылки шапки.
 */
export const HeaderLinks = (props: HeaderLinksProps) => {
  return <div className='Header__links'>
    {props.links.map((link) => {
      return <a className='HeaderLink' key={link.url} href={link.url} title={link.title}>
        <i className={link.icon}></i>
      </a>
    })}
  </div>
}

/**
 * Шапка чейнджлога.
 */
export const Header = (props: HeaderProps) => {
  return <div className='Header'>
    <HeaderTitle text={props.title} />
    <HeaderText text={props.text} />
    <HeaderLinks links={props.links} />
  </div>
}
