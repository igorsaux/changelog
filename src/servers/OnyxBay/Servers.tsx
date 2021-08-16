import React, { useContext, useEffect, useState } from 'react'
import * as Repository from './Repository'
import { GameServer } from '../../abstractions/GameServer'
import { ChangelogEntry, loadChangelog, OnyxBayChangelogLayout } from '.'
import { AppContext } from '../../components/App'

/**
 * Сервер Chaotic Onyx.
 */
export class ChaoticOnyx extends GameServer {
  constructor () {
    super('Chaotic Onyx', new Repository.ChaoticOnyx(), '/html/changelogs/.all_changelog.json')
  }

  public Changelog () {
    // eslint-disable-next-line react/display-name
    return () => {
      const [error, setError] = useState<string | undefined>(undefined)
      const [changelog, setChangelog] = useState<ChangelogEntry[]>([])
      const { cdn } = useContext(AppContext)

      useEffect(() => {
        loadChangelog(cdn, this,
          _ => setError('Проблемы с подключением ⚠️'),
          data => setChangelog(
            data as ChangelogEntry[]
          ))
      }, [])

      return <OnyxBayChangelogLayout serverName='Chaotic Onyx' changelog={changelog} error={error} />
    }
  }
}

/**
 * Сервер EOS.
 */
export class Eos extends GameServer {
  constructor () {
    super('EOS', new Repository.Eos(), '/html/changelogs/.all_changelog.json')
  }

  public Changelog () {
    // eslint-disable-next-line react/display-name
    return () => {
      const [error, setError] = useState<string | undefined>(undefined)
      const [changelog, setChangelog] = useState<ChangelogEntry[]>([])
      const { cdn } = useContext(AppContext)

      useEffect(() => {
        loadChangelog(cdn, this,
          _ => setError('Проблемы с подключением ⚠️'),
          data => setChangelog(
            data as ChangelogEntry[]
          ))
      }, [])

      return <OnyxBayChangelogLayout serverName='EOS' changelog={changelog} error={error} />
    }
  }
}
