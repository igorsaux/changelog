import { ComponentChild, ComponentChildren } from 'preact'
import { forwardRef } from 'preact/compat'
import '../styles/Changelog.scss'

/**
 * Пропсы для {@link ChangelogLayout}.
 */
export interface ChangelogProps {
  /**
   * Тема чейнджлога, подставляется с префиксом theme-.
   */
  theme?: string

  children: ComponentChildren
}

/**
 * Основной компонент чейнджлога.
 */
export const ChangelogLayout = (props: ChangelogProps) => {
  return (
    <div
      className={`ChangelogLayout ${props.theme ? `theme-${props.theme}` : ''}`}
    >
      {props.children}
    </div>
  )
}

/**
 * Пропсы для {@link ChangelogLayout.Body}.
 */
export interface BodyProps {
  children: ComponentChild
}

const Body = (props: BodyProps) => {
  return <div className='ChangelogLayout__body'>{props.children}</div>
}

/**
 * Тело чейнджлога.
 */
ChangelogLayout.Body = Body

/**
 * Пропсы для {@link ChangelogLayout.Header}
 */
interface HeaderProps {
  children: ComponentChild
}

/**
 * Шапка чейнджлога.
 */
ChangelogLayout.Header = forwardRef<HTMLDivElement, HeaderProps>(
  function Header(props, ref) {
    return (
      <div ref={ref} className='ChangelogLayout__header'>
        {props.children}
      </div>
    )
  }
)
