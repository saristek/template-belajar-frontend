import works from '@/data/works'

import { Tile, TileBackground, TileContent, TileWrapper } from '@/components/Tiles'
import { WorkBackground } from '@/components/Works/WorkBackground'
import WorkContent from '@/components/Works/WorkContent'

import { IWork } from '@/types/IWork'

const Works = () => {
  return (
    <TileWrapper numOfPages={works.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        {works.map((work: IWork, i: number) => (
          <Tile page={i} key={work.title}>
            <WorkContent work={work} />
          </Tile>
        ))}
      </TileContent>
    </TileWrapper>
  )
}

export default Works