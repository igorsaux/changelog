import { OnyxBayRepository } from '../repos/OnyxBayRepository'
import { GameServer } from '../abstractions/GameServer'

export class OnyxBayServer extends GameServer {
  constructor () {
    super(new OnyxBayRepository(), '/html/changelogs/.all_changelog.json')
  }
}
