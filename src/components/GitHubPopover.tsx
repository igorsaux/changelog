import React, { useCallback, useEffect, useState } from 'react'
import '../styles/GitHubPopover.scss'

/**
 * Пропсы для {@link GitHubPopover}
 */
type GitHubPopoverProps = {
  prUrl: string
}

/**
 * Информация о пулл реквеста которая будет отображена на карточке.
 */
type PullRequestInfo = {
  title: string,
  closed: string,
  author: {
    login: string,
    avatar: string
  },
  number: string,
  repository: {
    owner: string,
    name: string
  }
}

const popoverMargin = '-25px'
const popoverWidth = 300
const dateTimeFormat = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

function PullRequest (props: { pr: PullRequestInfo }) {
  const { pr } = props

  return <div className="PullRequestCard">
    <div className="Repository">
      {pr.repository.owner}/{pr.repository.name}
    </div>
    <div className="Naming">
      <span className="Number">#{pr.number}</span> <span className="Title">{pr.title}</span>
    </div>
    <div className="Misc">
      <img className="Avatar" src={pr.author.avatar} alt={pr.author.login} />
      <span className="Author">{pr.author.login}</span>
      <span className="CloseDate"> • {dateTimeFormat.format(new Date(pr.closed))}</span>
    </div>
  </div>
}

function PullRequestPlaceholder () {
  return <div className="PullRequestCard PullRequestCard--Placeholder">
    <div className="Repository Repository--Placeholder"></div>
    <div className="Naming Naming--Placeholder"></div>
    <div className="Misc Misc--Placeholder"></div>
  </div>
}

/**
 * Компонент для отображения "карточки" пулл реквеста при наведении мышки.
 */
function GitHubPopover (props: GitHubPopoverProps) {
  const splittedUrl = props.prUrl.split('/')
  const repositoryOwner = splittedUrl[3]
  const repositoryName = splittedUrl[4]
  const prNumber = splittedUrl[6]

  const [prData, setPrData] = useState<PullRequestInfo | undefined>(undefined)
  const [direction, setDirection] = useState<'right' | 'left'>('right')
  const tooltipRef = useCallback((instance: HTMLAnchorElement | null) => {
    if (!instance) {
      return setDirection('right')
    }

    const sizes = instance.getBoundingClientRect()

    if (sizes.x + popoverWidth > document.body.clientWidth - 50) {
      return setDirection('right')
    } else {
      return setDirection('left')
    }
  }, [])
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/pulls/${prNumber}`, {
      cache: 'force-cache'
    })
      .then(data => data.json())
      .then(data => {
        return setPrData({
          title: data.title,
          closed: data.closed_at,
          author: {
            login: data.user.login,
            avatar: data.user.avatar_url
          },
          number: prNumber,
          repository: {
            owner: repositoryOwner,
            name: repositoryName
          }
        })
      })
  }, [])

  const arrowStyle = {
    left: `${direction === 'right' ? 'calc(100% - 40px - 7px)' : '37px'}`
  }

  const popoverStyle = {
    [direction]: popoverMargin
  }

  return <a href={props.prUrl} style={popoverStyle} ref={tooltipRef} className="GitHubPopover">
    <svg style={arrowStyle} className='GitHubPopover__Arrow' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0L0 7H14L7 0Z" fill="#E1E4E8"/>
      <path d="M7 1.5L1.5 7H12.5L7 1.5Z" fill="white"/>
    </svg>
    <div className="GitHubPopover__Content" style={{
      width: `${popoverWidth}px`
    }}>
      {prData ? <PullRequest pr={prData} /> : <PullRequestPlaceholder /> }
    </div>
  </a>
}

export default GitHubPopover
