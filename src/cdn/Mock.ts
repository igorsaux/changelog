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
  public override async FetchJsonAsync (repository: GitHubRepository, filePath: string, branch: string): Promise<unknown> {
    return await new Promise((resolve, reject) => setTimeout(() => resolve(MockData), 5000))
  }
}
