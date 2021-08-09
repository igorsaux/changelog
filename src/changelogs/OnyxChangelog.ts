export interface OnyxChangeEntry {
  /**
   * Префикс изменения.
   */
  prefix:
    | 'BugFix'
    | 'Balance'
    | 'Tweak'
    | 'SoundAdd'
    | 'SoundDel'
    | 'RscAdd'
    | 'RscDel'
    | 'ImageAdd'
    | 'ImageDel'
    | 'MapTweak'
    | 'SpellCheck'
    | 'Experiment'
    | 'Admin'
  /**
   * Описание изменения.
   */
  message: string
  /**
   * Номер PR с которым связано изменение.
   */
  pr?: number
}

export interface OnyxChangelogEntry {
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
  changes?: OnyxChangeEntry[]
}
