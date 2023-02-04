export type IWork = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export interface WorkProps {
  children: React.ReactNode
  progress: number
}

export interface WorkContentProps {
  work: IWork
  progress?: number
}
