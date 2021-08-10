
export interface ChangeEntry {
  /**
   * Префикс изменения.
   */
  prefix: string
  /**
   * Описание изменения.
   */
  message: string
  /**
   * Номер PR с которым связано изменение.
   */
  pr?: number
}

export interface ChangelogEntry {
  /**
   * Имя автора.
   */
  author?: string
  /**
   * Дата изменения в формате `YYYY-MM-DD`.
   */
  date?: string
  /**
   * Описание изменении.
   */
  changes?: ChangeEntry[]
}
