import React, { useContext, useEffect, useState } from 'react'
import * as Repository from './Repository'
import { GameServer } from '../../abstractions/GameServer'
import { ChangelogEntry, loadChangelog, OnyxBayChangelogLayout } from '.'
import { AppContext } from '../../components/App'
import { ReactElement } from 'react-markdown/lib/react-markdown'

const OnyxBayChangelog = (props: { server: GameServer }): ReactElement => {
  const [error, setError] = useState<string | undefined>(undefined)
  const [changelog, setChangelog] = useState<ChangelogEntry[]>([])
  const { cdn } = useContext(AppContext)

  useEffect(() => {
    loadChangelog(
      cdn,
      props.server,
      _ => setError('Проблемы с подключением ⚠️'),
      data => setChangelog(data as ChangelogEntry[])
    )
  }, [])

  return (
    <OnyxBayChangelogLayout
      serverName={props.server.name}
      changelog={changelog}
      error={error}
    />
  )
}

/**
 * Сервер Chaotic Onyx.
 */
export class ChaoticOnyx extends GameServer {
  constructor () {
    super(
      'Chaotic Onyx',
      new Repository.ChaoticOnyx(),
      '/html/changelogs/.all_changelog.json',
      'release/chaotic'
    )
  }

  public override Changelog (): () => ReactElement {
    return () => OnyxBayChangelog({ server: this })
  }
}

/**
 * Сервер EOS.
 */
export class Eos extends GameServer {
  constructor () {
    super(
      'EOS',
      new Repository.Eos(),
      '/html/changelogs/.all_changelog.json',
      'release/eos'
    )
  }

  public override Changelog (): () => ReactElement {
    return () => OnyxBayChangelog({ server: this })
  }
}
