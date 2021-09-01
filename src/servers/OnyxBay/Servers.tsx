import React, { useContext, useEffect, useState } from 'react'
import * as Repository from './Repository'
import { GameServer } from '../../abstractions/GameServer'
import { ChangelogEntry, loadChangelog, OnyxBayChangelogLayout } from '.'
import { AppContext } from '../../components/App'

const OnyxBayChangelog = (props: { server: GameServer }): React.ReactElement => {
  const [error, setError] = useState<string | undefined>(undefined)
  const [changelog, setChangelog] = useState<ChangelogEntry[]>([])
  const { cdn } = useContext(AppContext)

  useEffect(() => {
    loadChangelog(cdn, props.server,
      _ => setError('Проблемы с подключением ⚠️'),
      data => setChangelog(
        data as ChangelogEntry[]
      ))
  }, [])

  return <OnyxBayChangelogLayout serverName='Chaotic Onyx' changelog={changelog} error={error} />
}

/**
 * Сервер Chaotic Onyx.
 */
export class ChaoticOnyx extends GameServer {
  constructor () {
    super('Chaotic Onyx', new Repository.ChaoticOnyx(), '/html/changelogs/.all_changelog.json')
  }

  public override Changelog (): () => React.ReactElement {
    return () => OnyxBayChangelog({ server: this })
  }
}

/**
 * Сервер EOS.
 */
export class Eos extends GameServer {
  constructor () {
    super('EOS', new Repository.Eos(), '/html/changelogs/.all_changelog.json')
  }

  public override Changelog (): () => React.ReactElement {
    return () => OnyxBayChangelog({ server: this })
  }
}
