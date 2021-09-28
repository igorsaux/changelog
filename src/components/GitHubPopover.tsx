import React, { MutableRefObject, useCallback, useEffect, useState } from 'react'
import '../styles/GitHubPopover.scss'

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

const arrowWidth = 14
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

function PullRequestError () {
  return <div className="PullRequestCard PullRequestCard--Error">
    😔 Гитхаб недоступен.
  </div>
}

/**
 * Пропсы для {@link GitHubPopover}
 */
 type GitHubPopoverProps = {
  prUrl: string,
  target: MutableRefObject<HTMLAnchorElement | null>
}

/**
 * Компонент для отображения "карточки" пулл реквеста при наведении мышки.
 */
function GitHubPopover (props: GitHubPopoverProps) {
  const splittedUrl = props.prUrl.split('/')
  const repositoryOwner = splittedUrl[3]
  const repositoryName = splittedUrl[4]
  const prNumber = splittedUrl[6]

  const [isError, setIsError] = useState(false)
  const [prData, setPrData] = useState<PullRequestInfo | undefined>(undefined)
  const [popoverMargin, setPopoverMargin] = useState(0)
  const [arrowMargin, setArrowMargin] = useState(0)
  const tooltipRef = useCallback((instance: HTMLAnchorElement | null) => {
    if (!instance || !props.target.current) {
      return setPopoverMargin(0)
    }

    const selfSize = instance.getBoundingClientRect()
    const targetSize = props.target.current.getBoundingClientRect()
    let newPopoverMargin = 0
    let newArrowMargin = 0

    if (selfSize.x + popoverWidth >= document.body.offsetWidth) {
      newPopoverMargin = -(selfSize.x + popoverWidth - document.body.offsetWidth + 10)
    }

    newArrowMargin = targetSize.x - selfSize.x - newPopoverMargin

    setPopoverMargin(newPopoverMargin)
    setArrowMargin(newArrowMargin)
  }, [])
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/pulls/${prNumber}`, {
      cache: 'force-cache'
    })

      .then(data => data.json())
      .then(data => {
        setIsError(false)
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
      .catch(_ => {
        setIsError(true)
        return _
      })
  }, [])

  const arrowStyle = {
    left: `${arrowWidth + arrowMargin}px`
  }

  const popoverStyle = {
    left: `${popoverMargin}px`
  }

  return <a href={props.prUrl} rel='noreferrer' target='_blank' style={popoverStyle} ref={tooltipRef} className="GitHubPopover">
    <svg style={arrowStyle} className='GitHubPopover__Arrow' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0L0 7H14L7 0Z" fill="#D0D7DE"/>
      <path d="M7 1.5L1.5 7H12.5L7 1.5Z" fill="white"/>
    </svg>
    <div className="GitHubPopover__Content" style={{
      width: `${popoverWidth}px`
    }}>
      {isError
        ? <PullRequestError />
        : prData
          ? <PullRequest pr={prData} />
          : <PullRequestPlaceholder /> }
    </div>
  </a>
}

export default GitHubPopover
