import Tippy from '@tippyjs/react'
import React, { useContext, useState } from 'react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/border.css'
import '../styles/GitHubPopover.scss'
import { AppContext } from './App'
import { GitHubRepository } from '../abstractions/GitHubRepository'
import { GitHubPullRequest } from '../abstractions/GitHubPullRequest'

const dateTimeFormat = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

function PullRequest (props: { pr: GitHubPullRequest }) {
  const { pr } = props

  return (
    <div className='PullRequestCard'>
      <div className='Repository'>
        {pr.base.repo.owner.login}/{pr.base.repo.name}
      </div>
      <div className='Naming'>
        <span className='Number'>#{pr.number}</span>{' '}
        <span className='Title'>{pr.title}</span>
      </div>
      <div className='Misc'>
        <img className='Avatar' src={pr.user.avatar_url} alt={pr.user.login} />
        <span className='Author'>{pr.user.login}</span>
        <span className='CloseDate'>
          {' '}
          • {dateTimeFormat.format(new Date(pr.closed_at))}
        </span>
      </div>
    </div>
  )
}

function PullRequestPlaceholder () {
  return (
    <div className='PullRequestCard PullRequestCard--Placeholder'>
      <div className='Repository Repository--Placeholder'></div>
      <div className='Naming Naming--Placeholder'></div>
      <div className='Misc Misc--Placeholder'></div>
    </div>
  )
}

function PullRequestError () {
  return (
    <div className='PullRequestCard PullRequestCard--Error'>
      😔 Гитхаб недоступен.
    </div>
  )
}

/**
 * Пропсы для {@link GitHubPopoverProps}
 */
type GitHubPopoverProps = {
  children: React.ReactElement
  prUrl: string
}

function GitHubPopover (props: GitHubPopoverProps) {
  const splittedUrl = props.prUrl.split('/')
  const repositoryOwner = splittedUrl[3]
  const repositoryName = splittedUrl[4]
  const prNumber = splittedUrl[6]

  const [isError, setIsError] = useState(false)
  const [prData, setPrData] = useState<GitHubPullRequest | undefined>(undefined)
  const { api } = useContext(AppContext)

  return (
    <Tippy
      animation='scale'
      theme='light'
      interactive
      interactiveBorder={10}
      maxWidth={300}
      inertia
      delay={[0, 250]}
      onShow={() => {
        api
          .PullRequest(
            new GitHubRepository(repositoryName, repositoryOwner),
            prNumber
          )
          .then(data => {
            setIsError(false)
            return setPrData(data)
          })
          .catch(_ => setIsError(true))
      }}
      content={
        <a
          href={props.prUrl}
          rel='noreferrer'
          target='_blank'
          className='GitHubPopover'>
          {isError
            ? (
            <PullRequestError />
              )
            : prData
              ? (
            <PullRequest pr={prData} />
                )
              : (
            <PullRequestPlaceholder />
                )}
        </a>
      }>
      {props.children}
    </Tippy>
  )
}

export default GitHubPopover
