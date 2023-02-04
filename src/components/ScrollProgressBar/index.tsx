import dynamic from 'next/dynamic'

const ScrollProgressBarComponent = dynamic(
  () => {
    return import('./Core')
  },
  { ssr: false }
)

const ScrollProgressBar = () => {
  return <ScrollProgressBarComponent />
}

export default ScrollProgressBar
