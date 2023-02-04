import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  duration: number
  delay?: number
}

export const FadeDown = ({ children, duration, delay }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  )
}
