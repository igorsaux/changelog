import { GitHubCDN } from '../abstractions/GitHubCdn'
import { GitHubRepository } from '../abstractions/GitHubRepository'
import MockData from '../mock/MockData.json'

/**
 * Мок CDN.
 */
export class Mock extends GitHubCDN {
  constructor () {
    super('https://localhost')
  }

  /**
   * Возвращает мок данные через 5 секунд.
   */
  public async fetchJson (repository: GitHubRepository, filePath: string): Promise<unknown> {
    return await new Promise((resolve, reject) => setTimeout(() => resolve(MockData), 5000))
  }
}
