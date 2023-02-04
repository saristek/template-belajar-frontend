import dynamic from 'next/dynamic'

import { IPostCard } from '@/types/IPostCard'

const PostCardComponent = dynamic(
  () => {
    return import('./Core')
  },
  { ssr: false }
)

const PostCard = ({ posts, showTags }: IPostCard) => {
  return (
    <div id="comment">
      <PostCardComponent posts={posts} showTags={showTags} />
    </div>
  )
}

export default PostCard
