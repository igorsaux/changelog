import { GitHubRepository } from './GitHubRepository'

/**
 * Класс представляющий игровой сервер SS13.
 */
export abstract class GameServer {
  /**
   * GitHub репозиторий сервера.
   */
  public readonly repository: GitHubRepository

  /**
   * Путь до чейнджлог файла (без / в конце).
   */
  public readonly changelogFilePath: string

  constructor (repository: GitHubRepository, changelogFilePath: string) {
    this.repository = repository
    this.changelogFilePath = changelogFilePath
  }
}
