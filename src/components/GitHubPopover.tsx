import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/border.css'
import '../styles/GitHubPopover.scss'
import { ComponentChild, createRef } from 'preact'

/**
 * Пропсы для {@link GitHubPopoverProps}
 */
type GitHubPopoverProps = {
  children: ComponentChild
  prUrl: string
}

function GitHubPopover(props: GitHubPopoverProps) {
  const splittedUrl = props.prUrl.split('/')
  const repositoryOwner = splittedUrl[3]
  const repositoryName = splittedUrl[4]
  const prNumber = splittedUrl[6]

  const imageRef = createRef<HTMLImageElement>()

  return (
    <Tippy
      animation='scale'
      theme='light'
      interactive
      interactiveBorder={10}
      maxWidth={400}
      inertia
      delay={[0, 250]}
      touch={false}
      onShow={() => {
        if (!imageRef.current) {
          return
        }

        imageRef.current.src = `https://opengraph.githubassets.com/1/${repositoryOwner}/${repositoryName}/pull/${prNumber}`
      }}
      content={
        <a
          href={props.prUrl}
          rel='noreferrer'
          target='_blank'
          className='GitHubPopover'
        >
          <img
            ref={imageRef}
            src='https://opengraph.githubassets.com/1/'
            alt=''
          />
        </a>
      }
    >
      {props.children}
    </Tippy>
  )
}

export default GitHubPopover
