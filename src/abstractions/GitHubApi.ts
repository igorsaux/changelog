import { GitHubPullRequest } from './GitHubPullRequest'
import { GitHubRepository } from './GitHubRepository'

export abstract class GitHubApi {
  /**
   * Возвращает информацию о Pull Request.
   * @param repository Репозитории, которому принадлежит Pull Request.
   * @param pullRequestNumber Номер Pull Request.
   */
  public abstract PullRequest(
    repository: GitHubRepository,
    pullRequestNumber: number | string,
  ): Promise<GitHubPullRequest>
}
