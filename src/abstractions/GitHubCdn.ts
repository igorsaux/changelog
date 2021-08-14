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

  protected async Fetch (url: string): Promise<Response> {
    return await fetch(`${this.cdn}/${url}`, {
      method: 'GET',
      mode: 'cors'
    })
  }

  /**
   * Получение данных по указанному пути для указанного репозитория в формате JSON.
   * @param repository Репозиторий из которого нужно получить данные.
   * @param filePath Путь до данных (без / в конце).
   */
  public async FetchJsonAsync (repository: GitHubRepository, filePath: string): Promise<unknown> {
    const response = await this.Fetch(this.Join(repository, filePath))
    return await response.json()
  }

  /**
   * Объединяет информацию о репозитории и путь до файла в один путь (без / в конце).
   * @param repository Репозиторий к которому нужно привязать путь.
   * @param filePath Путь до данных.
   * @example join({ name: 'OnyxBay', owner: 'ChaoticOnyx' }, '/html/changelog.html') => '/ChaoticOnyx/OnyxBay/html/changelog.html'
   */
  public Join (repository: GitHubRepository, filePath: string): string {
    return `${repository.owner}/${repository.name}/${repository.branch}${filePath}`
  }
}
