import { Blog } from 'contentlayer/generated'
import Link from 'next/link'

import PostCard from '@/components/Post/PostCard'

const MAX_DISPLAY = 2

interface IRecentPosts {
  posts: Omit<Blog, 'body' | '_raw' | '_id'>[]
}

const RecentPosts = ({ posts }: IRecentPosts) => {
  const slicedPost = posts.slice(0, MAX_DISPLAY)

  return (
    <>
      <div className="divide-gray-200 dark:divide-gray-700">
        <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Artikel Terbaru
        </h3>
        <PostCard posts={slicedPost} showTags={false} />
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog">
            <span className="underline-magical cursor-pointer font-bold" aria-label="all posts">
              Baca semua artikel &rarr;
            </span>
          </Link>
        </div>
      )}
    </>
  )
}

export default RecentPosts