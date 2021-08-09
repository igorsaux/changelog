import { GitHubCDN } from '../abstractions/GitHubCdn'

/**
 * Представляет Vercel CDN.
 */
export class Vercel extends GitHubCDN {
  constructor () {
    super('https://github-cdn.vercel.app')
  }
}
