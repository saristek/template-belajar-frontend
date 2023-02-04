import { allBlogs } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { coreContent, sortedBlogPost } from '@/lib/utils/contentLayer'

import LayoutRenderer from '@/components/layouts/LayoutRenderer'
import MainLayout from '@/components/layouts/page/MainLayout'
import PageTitle from '@/components/PageTitle'
import ScrollProgressBar from '@/components/ScrollProgressBar'

const DEFAULT_LAYOUT = 'PostLayout'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = sortedBlogPost(allBlogs)
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug.split('/') } })),
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const sortedPosts = sortedBlogPost(allBlogs)
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug.join('/'))

  // TODO: Refactor this extraction of coreContent
  const prevContent = sortedPosts[postIndex + 1] || null
  const prev = prevContent ? coreContent(prevContent) : null
  const nextContent = sortedPosts[postIndex - 1] || null
  const next = nextContent ? coreContent(nextContent) : null
  const post = sortedPosts.find((p) => p.slug === slug.join('/'))
  const author = post?.author || ['default']

  return {
    props: {
      post,
      author,
      prev,
      next,
    },
  }
}

export default function Blog({
  post,
  author,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ScrollProgressBar />
      <MainLayout>
        {post && 'draft' in post && post.draft !== true ? (
          <LayoutRenderer
            layout={post.layout || DEFAULT_LAYOUT}
            toc={post.toc}
            content={post}
            authorDetails={author}
            prev={prev}
            next={next}
          />
        ) : (
          <div className="mt-24 text-center">
            <PageTitle>
              Under Construction{' '}
              <span role="img" aria-label="roadwork sign">
                🚧
              </span>
            </PageTitle>
          </div>
        )}
      </MainLayout>
    </>
  )
}
