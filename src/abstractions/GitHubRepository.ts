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

  constructor (name: string, owner: string) {
    this.name = name
    this.owner = owner
  }

  /**
   * Получение ссылки на GitHub репозитории.
   */
  public getUrl () {
    return `https://github.com/${this.owner}/${this.name}`
  }
}
