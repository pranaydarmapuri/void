import { MutableRefObject, useEffect, useState } from "react"

const useIsVisible = (ref: any, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (ref.current == null) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    )
    observer.observe(ref.current)
    return () => {
      if (ref.current == null) return
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(ref.current)
    }
  }, [ref, rootMargin])

  return isVisible
}

export default useIsVisible