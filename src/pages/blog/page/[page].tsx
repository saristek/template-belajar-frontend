import { allBlogs } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { allCoreContent } from '@/lib/utils/contentLayer'
import { sortedBlogPost } from '@/lib/utils/contentLayer'

import siteMetadata from '@/data/siteMetadata'

import ListLayout from '@/components/layouts/ListLayout'
import MainLayout from '@/components/layouts/page/MainLayout'
import { PageSEO } from '@/components/SEO'

import { POSTS_PER_PAGE } from '@/pages/blog'

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPosts = sortedBlogPost(allBlogs)
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = context.params?.page
  const posts = sortedBlogPost(allBlogs)
  const pageNumber = parseInt(page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
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

export default function PostPage({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </MainLayout>
  )
}
