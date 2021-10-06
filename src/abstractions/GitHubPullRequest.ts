/* eslint-disable camelcase */
/**
 * Неполный тип представляющий GitHub Pull Request для REST API.
 */
export type GitHubPullRequest = {
  title: string
  number: number
  closed_at: number
  user: {
    login: string
    avatar_url: string
  }
  base: {
    repo: {
      name: string
      owner: {
        login: string
      }
    }
  }
}
