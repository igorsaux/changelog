import { RefObject } from 'preact'
import { useEffect, useMemo, useState } from 'preact/hooks'

export default function useObserver(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(true)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  )

  useEffect(() => {
    if (!ref.current) {
      return
    }

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}
