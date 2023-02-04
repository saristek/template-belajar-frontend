import { allBlogs } from 'contentlayer/generated'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentLayer'

import siteMetadata from '@/data/siteMetadata'

import Header from '@/components/Bar/Header'
import SectionContainer from '@/components/containers/SectionContainer'
import { HeaderGradient } from '@/components/Gradient'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import HomeLayout from '@/components/layouts/page/HomeLayout'
import RecentPosts from '@/components/RecentPosts'
import { PageSEO } from '@/components/SEO'
import Works from '@/components/Works'
export const getStaticProps: GetStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

// const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageSEO title={siteMetadata.author} description={siteMetadata.description} />
      <HeaderGradient />
      <SectionContainer>
        <Header />
      </SectionContainer>
      <Hero />
      <Intro />
      <Works />
      <HomeLayout>
        <RecentPosts posts={posts} />
      </HomeLayout>
    </>
  )
}
export default Home
