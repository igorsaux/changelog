/**
 * Класс представляющий репозитории GitHub.
 */
export abstract class GitHubRepository {
  /**
   * Название репозитория.
   */
  public readonly name: string

  /**
   * Владелец репозитория.
   */
  public readonly owner: string

  /**
   * Ветка с чейнджлогом.
   */
  public readonly branch: string

  constructor (name: string, owner: string, branch: string) {
    this.name = name
    this.owner = owner
    this.branch = branch
  }

  /**
   * Получение ссылки на GitHub репозитории.
   */
  public getUrl () {
    return `https://github.com/${this.owner}/${this.name}`
  }
}
