import { GitHubRepository } from '../../abstractions/GitHubRepository'

/**
 * Класс, представляющий репозитории OnyxBay
 */
export class Repository extends GitHubRepository {
  constructor () {
    super('OnyxBay', 'ChaoticOnyx')
  }
}
