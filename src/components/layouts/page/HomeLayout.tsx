import Footer from '@/components/Bar/Footer'
import SectionContainer from '@/components/containers/SectionContainer'

interface Props {
  children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-evenly pt-6 md:pt-9">
        <main>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}