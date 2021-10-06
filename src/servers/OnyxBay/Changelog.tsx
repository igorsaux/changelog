import React, { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'rehype-raw'
import { COLOR_BINDINGS, ICON_BINDINGS, LINKS } from '.'
import { GameServer } from '../../abstractions/GameServer'
import { GitHubCDN } from '../../abstractions/GitHubCdn'
import { ChangelogLayout } from '../../components/Changelog'
import GitHubPopover from '../../components/GitHubPopover'
import { GoUp } from '../../components/GoUp'
import { Modal } from '../../components/Modal'
import { Spinner } from '../../components/Spinner'
import '../../themes/onyx.scss'

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
  const linkRef = useRef<HTMLAnchorElement>(null)
  const url = `https://github.com/ChaoticOnyx/OnyxBay/pull/${props.pr}`

  return <sup
      className='PR'>
    <GitHubPopover prUrl={url}>
      <a ref={linkRef} rel='noreferrer' target='_blank' className='PR__link' href={url}>#{props.pr}</a>
    </GitHubPopover>
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
  show: boolean
}

const ErrorModal = (props: ErrorProps) => {
  return <Modal className='Error' show={props.show}>
      <span>{props.message}</span>
    </Modal>
}

interface LoadingProps {
  message: string
  show: boolean
}

const LoadingModal = (props: LoadingProps) => {
  return <Modal show={props.show}>
    <Spinner text={props.message} />
  </Modal>
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
  const headerRef = useRef<HTMLDivElement>(null)

  return <ChangelogLayout theme='onyx'>
    <ChangelogLayout.Header ref={headerRef}>
      <Header serverName={props.serverName} />
    </ChangelogLayout.Header>
    {(props.changelog.length && <>
      <ChangelogLayout.Body>
        <Body changelog={props.changelog} />
      </ChangelogLayout.Body>
      <GoUp topElement={headerRef} />
      </>) || ''}
    <LoadingModal
      message='Загрузка чейнджлогов'
      show={!props.changelog.length && !props.error} />
    {props.error && <ErrorModal
      message={props.error}
      show={true} />}
  </ChangelogLayout>
}

export const loadChangelog = (cdn: GitHubCDN, server: GameServer, onError: (reason: string) => void, onSuccessful: (data: unknown) => void) => {
  server.LoadChangelogAsync(cdn)
    .then(data => onSuccessful(data))
    .catch(reason => onError(reason))
}
