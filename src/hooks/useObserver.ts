import React, { useEffect, useMemo, useState } from 'react'

export default function useObserver (ref: React.RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(true)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [])

  useEffect(() => {
    if (!ref.current) {
      return
    }

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}
