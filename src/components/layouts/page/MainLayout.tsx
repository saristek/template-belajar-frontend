import { motion } from 'framer-motion'

import Footer from '@/components/Bar/Footer'
import Header from '@/components/Bar/Header'
import SectionContainer from '@/components/containers/SectionContainer'
import { HeaderGradient } from '@/components/Gradient'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  }

  return (
    <SectionContainer>
      <HeaderGradient />
      <Header />
      <div className="flex h-screen flex-col justify-between">
        <motion.main
          className="mb-auto"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </SectionContainer>
  )
}