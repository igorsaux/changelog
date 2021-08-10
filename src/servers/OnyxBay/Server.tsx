import React from 'react'
import { Repository } from './Repository'
import { GameServer } from '../../abstractions/GameServer'
import { Changelog } from '../../components/Changelog'

interface Link {
  title: string
  url: string
  icon: string
}

const LINKS: Link[] = [
  {
    title: 'Patreon',
    url: 'https://www.patreon.com/chaoticonyx',
    icon: 'fab fa-patreon'
  },
  {
    title: 'Wiki',
    url: 'https://wiki.ss13.ru',
    icon: 'fas fa-book'
  },
  {
    title: 'GitHub',
    url: 'https://github.com/ChaoticOnyx/OnyxBay',
    icon: 'fab fa-github'
  },
  {
    title: 'Discord',
    url: 'https://discord.gg/5BRMMFg',
    icon: 'fab fa-discord'
  }
]

const Header = () => {
  return <>
    <h2>Список изменений сервера Chaotic Onyx</h2>
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

const Body = () => {
  return <>
    Hello!
  </>
}

/**
 * OnyxBay сервер.
 */
export class Server extends GameServer {
  constructor () {
    super(new Repository(), '/html/changelogs/.all_changelog.json')
  }

  public Changelog () {
    return <Changelog theme='onyx'>
      <Changelog.Header>
        {Header()}
      </Changelog.Header>
      <Changelog.Body>
        {Body()}
      </Changelog.Body>
    </Changelog>
  }
}
