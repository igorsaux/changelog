import React from 'react'
import { OnyxHeader } from './OnyxHeader'
import { Spinner } from './Spinner'
import '../styles/Changelog.scss'
import { GitHubRepository } from '../abstractions/GitHubRepository'

/**
 * Пропсы для {@link Changelog}
 */
export interface ChangelogProps {
  /**
   * Github репозиторий из которого будет получен чейнджлог.
   */
  repository: GitHubRepository
}

/**
 * Чейнджлог
 */
export const Changelog = (props: ChangelogProps) => {
  return <div className='Changelog'>
    <OnyxHeader />
    <Spinner text='Загрузка чейнджлогов' />
  </div>
}
