import { GitHubCDN } from '../utils/GitHubCdn'

/**
 * Представляет Vercel CDN.
 */
export class Vercel extends GitHubCDN {
  constructor () {
    super('https://github-cdn.vercel.app')
  }
}
