import React, { useEffect, useState } from 'react'
import * as Repository from './Repository'
import { GameServer } from '../../abstractions/GameServer'
import { GitHubCDN } from '../../abstractions/GitHubCdn'
import { ChangelogEntry, loadChangelog, OnyxBayChangelogLayout } from '.'

/**
 * Сервер Chaotic Onyx.
 */
export class ChaoticOnyx extends GameServer {
  constructor () {
    super(new Repository.ChaoticOnyx(), '/html/changelogs/.all_changelog.json')
  }

  public Changelog (cdn: GitHubCDN) {
    // eslint-disable-next-line react/display-name
    return () => {
      const [error, setError] = useState<string | undefined>(undefined)
      const [changelog, setChangelog] = useState<ChangelogEntry[]>([])

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
    super(new Repository.Eos(), '/html/changelogs/.all_changelog.json')
  }

  public Changelog (cdn: GitHubCDN) {
    // eslint-disable-next-line react/display-name
    return () => {
      const [error, setError] = useState<string | undefined>(undefined)
      const [changelog, setChangelog] = useState<ChangelogEntry[]>([])

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
