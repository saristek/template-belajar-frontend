import { useContext, useRef } from 'react'

import intro from '@/data/intro'

import { ScrollContext } from '@/components/ScrollObserver'

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber

  if (progress >= 0 && progress < 1) {
    return 1
  }

  return 0.2
}

export default function Intro() {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 3
  let progress = 0
  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black text-white dark:bg-white  dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-7xl">
        <div className="leading-[1.15]">
          {
            intro.map((data: string, key: number) => {
              const last = key == intro.length - 1
              return (
                <span
                  key={key}
                  className={`introText ${last ? "inline-block" : "inline-block after:content-['_']"}`
                  }
                  style={{ opacity: opacityForBlock(progress, key) }}>
                  {data}
                </span>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}