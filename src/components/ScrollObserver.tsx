import { createContext, useCallback, useEffect, useState } from 'react'

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
  scrollHeight: 0,
})

export const ScrollObserver = ({ children }: ScrollObserverProps) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
    setScrollHeight(document.body.scrollHeight)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ScrollContext.Provider value={{ scrollY, scrollHeight }}>
      {children}
    </ScrollContext.Provider>
  )
}


interface ScrollObserverProps {
  children: React.ReactNode
}

interface ScrollValue {
  scrollY: number
  scrollHeight: number
}