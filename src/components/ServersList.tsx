import { GameServer } from '../abstractions/GameServer'
import { BlinkCursor } from './BlinkCursor'
import '../styles/ServersList.scss'
import { ComponentChild } from 'preact'
import { Link } from 'preact-router'

/**
 * Пропсы для {@link ServersListProps}
 */
interface ServersListProps {
  children: ComponentChild
}

export const ServersList = (props: ServersListProps) => {
  return (
    <div className='ServersList'>
      <h1 className='ServersList__title'>Список серверов:</h1>
      {props.children}
      <BlinkCursor />
    </div>
  )
}

/**
 * Пропсы для {@link ServersListEntry}
 */
interface ServersListEntryProps {
  /**
   * Игровой сервер.
   */
  server: GameServer

  /**
   * ID сервера. Используется для навигации по приложению.
   */
  id: string
}

const ServersListEntry = (props: ServersListEntryProps) => {
  const { server } = props

  return (
    <h3 className='ServersList__entry'>
      <Link href={`/${props.id}`}>{server.name}</Link>
    </h3>
  )
}

ServersList.Entry = ServersListEntry
