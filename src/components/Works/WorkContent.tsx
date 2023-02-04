import Image from 'next/image'

import { WorkContainer } from '@/components/containers/WorkContainer'
import { WorkLeft } from '@/components/Works/WorkLeft'
import { WorkRight } from '@/components/Works/WorkRight'

import { WorkContentProps } from '@/types/IWork'

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, image } = work
  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className="text-2xl font-medium md:text-3xl xl:text-4xl">{description}</div>
        <span className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">{title}</span>
      </WorkLeft>
      <WorkRight progress={progress}>
        <div className="drop-shadow-2xl sm:mt-10 md:mt-24">
          <Image src={image.src} alt={title} width={image.width} height={image.height} />
        </div>
      </WorkRight>
    </WorkContainer>
  )
}
