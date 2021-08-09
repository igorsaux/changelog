import React from 'react'
import { Header, Link } from './Header'

/**
 * Шапка для Chaotic Onyx.
 */
export const OnyxHeader = () => {
  const links: Link[] = [
    {
      title: 'Patreon',
      url: 'https://www.patreon.com/chaoticonyx',
      icon: 'fab fa-patreon'
    },
    {
      title: 'Wiki',
      url: 'https://wiki.ss13.ru/index.php?title=Main_Page',
      icon: 'fas fa-book'
    },
    {
      title: 'Github',
      url: 'https://github.com/ChaoticOnyx/OnyxBay',
      icon: 'fab fa-github'
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/5BRMMFg',
      icon: 'fab fa-discord'
    }
  ]

  return <Header title='Список изменений сервера Chaotic Onyx' text='Разработка ведется при помощи игроков, которые поддерживают сервер своими пожертвованиями!
  Если вы хотите поддержать нас и принять участие в голосовании за то, какие фичи будут реализованы следующими,
  то подробную информацию можно найти в новостях на нашем сервере Discord!' links={links} />
}
