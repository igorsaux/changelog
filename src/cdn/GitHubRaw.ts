import { GitHubCDN } from '../abstractions/GitHubCdn'

/**
 * Представляет GitHub Raw файлы.
 */
export class GitHubRaw extends GitHubCDN {
  constructor () {
    super('https://raw.githubusercontent.com')
  }
}
