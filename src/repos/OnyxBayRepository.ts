import { GitHubRepository } from '../abstractions/GitHubRepository'

/**
 * Класс, представляющий репозитории OnyxBay
 */
export class OnyxBayRepository extends GitHubRepository {
  constructor () {
    super('ChaoticOnyx', 'OnyxBay')
  }
}
