import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Repository } from './Repository'
import { GameServer } from '../../abstractions/GameServer'
import { ChangelogLayout } from '../../components/Changelog'
import { Changelog, ChangelogEntry } from '.'
import { Spinner } from '../../components/Spinner'
import { GitHubCDN } from '../../abstractions/GitHubCdn'
import mockData from '../../mock/MockData.json'

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

interface BodyProps {
  changelog: ChangelogEntry[]
}

const Body = (props: BodyProps) => {
  return <>
    {props.changelog.map((entry, index) => {
      return <Changelog key={index} {...entry} />
    })}
  </>
}

const LoadChangelogMock = (setChangelog: Dispatch<SetStateAction<ChangelogState>>) => {
  setChangelog({
    loaded: true,
    changelog: mockData
  })
}

interface ChangelogState {
  loaded: boolean
  changelog?: ChangelogEntry[]
}

/**
 * OnyxBay сервер.
 */
export class Server extends GameServer {
  private cdn: GitHubCDN

  constructor (cdn: GitHubCDN) {
    super(new Repository(), '/html/changelogs/.all_changelog.json')

    this.cdn = cdn
  }

  public Changelog () {
    const [changelog, setChangelog] = useState<ChangelogState>({
      loaded: false
    })

    useEffect(() => {
      LoadChangelogMock(setChangelog)
    }, [])

    return <ChangelogLayout theme='onyx'>
      <ChangelogLayout.Header>
        <Header />
      </ChangelogLayout.Header>
      <ChangelogLayout.Body>
        {changelog.loaded ? <Body changelog={changelog.changelog!} /> : <Spinner text='Загрузка чейнджлогов' />}
      </ChangelogLayout.Body>
    </ChangelogLayout>
  }
}
