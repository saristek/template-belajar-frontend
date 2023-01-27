import { type Post, allPosts } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface PageProps {
  post: Post;
}

const Page: NextPage<PageProps> = ({ post }: { post: Post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.date}</div>

      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

// Statically fetch post by slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  return { props: { post } };
};

export default Page;
