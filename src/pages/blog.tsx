import { allBlogs } from 'contentlayer/generated'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentLayer'

import siteMetadata from '@/data/siteMetadata'

import ListLayout from '@/components/layouts/ListLayout'
import MainLayout from '@/components/layouts/page/MainLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 5

export const getStaticProps: GetStaticProps = async () => {
  const activePosts = allBlogs.filter((p) => p.draft === false)
  const posts = sortedBlogPost(activePosts)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}

const Page: NextPage = ({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainLayout>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Blog"
      />
    </MainLayout>
  )
}
export default Page