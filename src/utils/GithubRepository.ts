/**
 * Класс для работы с GitHub репозитоием.
 */
export class GitHubRepository {
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
   * @returns Ссылка на GitHub репозитории.
   */
  public getUrl () {
    return `https://github.com/${this.owner}/${this.name}`
  }
}
