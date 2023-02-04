import dynamic from 'next/dynamic'

const GiscusComponent = dynamic(
  () => {
    return import('./Core')
  },
  { ssr: false }
)

const PostComments = () => {
  return (
    <div id="comment">
      <GiscusComponent />
    </div>
  )
}

export default PostComments
