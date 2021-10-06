import { GitHubApi } from '../abstractions/GitHubApi'
import { GitHubPullRequest } from '../abstractions/GitHubPullRequest'
import { GitHubRepository } from '../abstractions/GitHubRepository'

export class RealGitHubApi implements GitHubApi {
  private baseUrl = 'https://api.github.com'

  public async PullRequest (
    repository: GitHubRepository,
    pullRequestNumber: number | string
  ) {
    const response = await fetch(
      `${this.baseUrl}/repos/${repository.owner}/${repository.name}/pulls/${pullRequestNumber}`
    )
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return (await response.json()) as GitHubPullRequest
  }
}
