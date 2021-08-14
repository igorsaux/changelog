import React from 'react'
import { Link } from 'react-router-dom'
import { GameServer } from '../abstractions/GameServer'
import '../styles/ServersList.scss'

/**
 * Пропсы для {@link ServersListProps}
 */
interface ServersListProps {
  children: React.ReactNode
}

export const ServersList = (props: ServersListProps) => {
  return <div className='ServersList'>
    <h1 className='ServersList__title'>Список серверов:</h1>
    {props.children}
  </div>
}

/**
 * Пропсы для {@link ServersListEntry}
 */
interface ServersListEntryProps {
  /**
   * Игровой сервер.
   */
  server: GameServer,

  /**
   * ID сервера. Используется для навигации по приложению.
   */
  id: string
}

const ServersListEntry = (props: ServersListEntryProps) => {
  const { server } = props

  return <h3 className='ServersList__entry'>
    <Link to={`/${props.id}`}>{server.name}</Link>
  </h3>
}

ServersList.Entry = ServersListEntry
