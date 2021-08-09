import { GitHubRepository } from './GitHubRepository'

/**
 * Класс для получения данных GitHub через CDN.
 */
export abstract class GitHubCDN {
  /**
   * URL используемого CDN (без / в конце).
   */
  public cdn: string

  constructor (cdn: string) {
    this.cdn = cdn
  }

  /**
   * Получение данных по указанному URL.
   * @param url URL данных.
   */
  public async fetch (url: string) {
    return await fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    })
  }

  /**
   * Получение данных по указанному пути для указанного репозитория.
   * @param repository Репозиторий из которого нужно получить данные.
   * @param filePath Путь до данных (без / в конце).
   */
  public async fetchFile (repository: GitHubRepository, filePath: string) {
    return await this.fetch(this.join(repository, filePath))
  }

  /**
   * Объединяет информацию о репозитории и путь до файла в один путь (без / в конце).
   * @param repository Репозиторий к которому нужно привязать путь.
   * @param filePath Путь до данных.
   * @example join({ name: 'OnyxBay', owner: 'ChaoticOnyx' }, '/html/changelog.html') => '/ChaoticOnyx/OnyxBay/html/changelog.html'
   */
  public join (repository: GitHubRepository, filePath: string) {
    return `${repository.owner}/${repository.name}${filePath}`
  }
}
