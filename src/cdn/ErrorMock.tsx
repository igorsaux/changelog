import { GitHubCDN } from '../abstractions/GitHubCdn'
import { GitHubRepository } from '../abstractions/GitHubRepository'

export class ErrorMock extends GitHubCDN {
  constructor () {
    super('https://localhost')
  }

  public async fetchJson (repository: GitHubRepository, filePath: string): Promise<unknown> {
    return await this.fetch('https://localhost:75824')
  }
}
