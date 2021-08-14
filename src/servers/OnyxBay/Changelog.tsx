import React from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'rehype-raw'
import { COLOR_BINDINGS, ICON_BINDINGS, LINKS } from '.'
import { GameServer } from '../../abstractions/GameServer'
import { GitHubCDN } from '../../abstractions/GitHubCdn'
import { ChangelogLayout } from '../../components/Changelog'
import { Spinner } from '../../components/Spinner'

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

  /**
   * Нужно ли выводить дату.
   */
  renderDate: boolean
}

/**
 * Компонент для рендеринга записи из чейнджлога.
 */
export const Changelog = (props: ChangelogEntry) => {
  return <div className='Changelog'>
    {props.renderDate ? <Changelog.Date date={props.date} /> : ''}
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
    <ReactMarkdown rehypePlugins={
      // @ts-expect-error
      [raw]} transformLinkUri={null}>{props.change.message}</ReactMarkdown>
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

const Header = (props: { serverName: string }) => {
  return <>
    <h2>{`Список изменений сервера ${props.serverName}`}</h2>
    <p>Разработка ведется при помощи игроков, которые поддерживают сервер своими пожертвованиями!
      Если вы хотите поддержать нас и принять участие в голосовании за то, какие фичи будут реализованы следующими,
      то подробную информацию можно найти в новостях на нашем сервере Discord!</p>
    <div className='Links'>
      {LINKS.map((link, index) => {
        return <a key={index} title={link.title} href={link.url}>
          <i className={link.icon}></i>
        </a>
      })}
    </div>
  </>
}

interface BodyProps {
  changelog: ChangelogEntry[]
}

const Body = (props: BodyProps) => {
  let previousDate: string = ''

  return <>
    {props.changelog.map((entry, index) => {
      let drawDate = true

      if (previousDate === entry.date) {
        drawDate = false
      } else {
        previousDate = entry.date
      }

      return <Changelog key={index} {...entry} renderDate={drawDate} />
    })}
  </>
}

interface ErrorProps {
  message: string
}

const Error = (props: ErrorProps) => {
  return <div className='Error'>{props.message}</div>
}

/**
 * Пропсы для {@link OnyxBayChangelogLayout}
 */
 interface OnyxBayChangelogLayoutProps {
  error?: string,
  changelog: ChangelogEntry[],
  serverName: string
}

export const OnyxBayChangelogLayout = (props: OnyxBayChangelogLayoutProps) => {
  return <ChangelogLayout theme='onyx'>
  <ChangelogLayout.Header>
    <Header serverName={props.serverName} />
  </ChangelogLayout.Header>
  <ChangelogLayout.Body>
    {props.error
      ? <Error message={props.error} />
      : props.changelog.length
        ? <Body changelog={props.changelog} />
        : <Spinner text='Загрузка чейнджлогов' />}
  </ChangelogLayout.Body>
</ChangelogLayout>
}

export const loadChangelog = (cdn: GitHubCDN, server: GameServer, onError: (reason: string) => void, onSuccessful: (data: unknown) => void) => {
  server.LoadChangelogAsync(cdn)
    .catch(reason => onError(reason))
    .then(data => onSuccessful(data))
}
