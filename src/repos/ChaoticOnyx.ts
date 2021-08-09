import { GitHubRepository } from '../utils/GitHubRepository'

/**
 * Класс, представляющий репозитории OnyxBay
 */
export class ChaoticOnyx extends GitHubRepository {
  constructor () {
    super('ChaoticOnyx', 'OnyxBay')
  }

  public getChangelogFilePath () {
    return '/html/changelogs/.all_changelog.json'
  }
}
