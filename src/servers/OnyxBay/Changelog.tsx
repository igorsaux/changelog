import React from 'react'
import { COLOR_BINDINGS, ICON_BINDINGS } from '.'

export interface ChangeEntry {
  /**
   * Префикс изменения.
   */
  prefix: string
  /**
   * Описание изменения.
   */
  message: string
  /**
   * Номер PR с которым связано изменение.
   */
  pr?: number
}

export interface ChangelogEntry {
  /**
   * Имя автора.
   */
  author: string
  /**
   * Дата изменения в формате `YYYY-MM-DD`.
   */
  date: string
  /**
   * Описание изменении.
   */
  changes: ChangeEntry[]
}

/**
 * Компонент для рендеринга записи из чейнджлога.
 */
export const Changelog = (props: ChangelogEntry) => {
  return <div className='Changelog'>
    <Changelog.Date date={props.date} />
    <Changelog.Author author={props.author} />
    <Changelog.Changes changes={props.changes} />
  </div>
}

interface DateHeaderProps {
  date: string
}

const dateTimeFormat = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

const DateHeader = (props: DateHeaderProps) => {
  return <div className='Changelog__date'>
    <span>{dateTimeFormat.format(new Date(props.date))}</span>
  </div>
}

Changelog.Date = DateHeader

interface ChangeAuthorProps {
  author: string
}

const Author = (props: ChangeAuthorProps) => {
  return <h3 className='Changelog__author'>{props.author} updated:</h3>
}

Changelog.Author = Author

interface PrLinkProps {
  pr: number;
}

const PrLink = (props: PrLinkProps) => {
  return <sup className='PR'>
    <a className='PR__link' href={`https://github.com/ChaoticOnyx/OnyxBay/pull/${props.pr}`}>#{props.pr}</a>
  </sup>
}

interface ChangeProps {
  change: ChangeEntry
}

const Change = (props: ChangeProps) => {
  const prefix = props.change.prefix.toLowerCase()

  return <li className={`Changes__change ${COLOR_BINDINGS[prefix]}`}>
    <i className={ICON_BINDINGS[prefix]} />
    <span>{props.change.message}</span>
    {props.change.pr ? <PrLink pr={props.change.pr} /> : ''}
  </li>
}

interface ChangesProps {
  changes: ChangeEntry[]
}

const Changes = (props: ChangesProps) => {
  return <ul className='Changes'>{props.changes.map((change, index) => {
    return <Change key={index} change={change} />
  })}</ul>
}

Changelog.Changes = Changes
