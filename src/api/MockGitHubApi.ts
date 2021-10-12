import { GitHubApi } from '../abstractions/GitHubApi'
import { GitHubPullRequest } from '../abstractions/GitHubPullRequest'
import { GitHubRepository } from '../abstractions/GitHubRepository'

export class MockGitHubApi implements GitHubApi {
  public PullRequest (
    repository: GitHubRepository,
    pullRequestNumber: number | string
  ): Promise<GitHubPullRequest> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          title: 'Фиксы багов',
          number: 5523,
          closed_at: Date.now(),
          user: {
            login: 'ghost',
            avatar_url: 'https://avatars.githubusercontent.com/u/10137?v=4'
          },
          base: {
            repo: {
              name: 'GhostTown',
              owner: {
                login: 'OctoGhost'
              }
            }
          }
        })
      }, 500)
    })
  }
}
