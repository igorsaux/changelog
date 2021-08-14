import { GitHubRepository } from '../../abstractions/GitHubRepository'

/**
 * Класс, представляющий репозитории Chaotic Onyx.
 */
export class ChaoticOnyx extends GitHubRepository {
  constructor () {
    super('OnyxBay', 'ChaoticOnyx', 'release%2Fchaotic')
  }
}

export class Eos extends GitHubRepository {
  constructor () {
    super('OnyxBay', 'ChaoticOnyx', 'release%2Feos')
  }
}
