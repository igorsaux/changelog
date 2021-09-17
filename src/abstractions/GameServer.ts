import { ReactNode } from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import { GitHubCDN } from './GitHubCdn'
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

  /**
   * Название сервера.
   */
  public readonly name: string

  constructor (name: string, repository: GitHubRepository, changelogFilePath: string) {
    this.name = name
    this.repository = repository
    this.changelogFilePath = changelogFilePath
  }

  /**
   * Загружает чейнджлоги через CDN.
   * @param cdn Используемый CDN.
   * @returns Чейнджлог в формате JSON.
   */
  public async LoadChangelogAsync (cdn: GitHubCDN) {
    return await cdn.FetchJsonAsync(this.repository, this.changelogFilePath)
  }

  /**
   * Возвращает компонент для отрисовки чейнджлога.
   */
  public abstract Changelog (): () => ReactElement
}
