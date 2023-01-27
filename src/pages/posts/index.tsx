import { pick } from '@contentlayer/client';
import { type Post, allPosts } from 'contentlayer/generated';
import { NextPage } from 'next';
import Link from 'next/link';
interface PageProps {
  posts: Post[];
}
const Page: NextPage<PageProps> = ({ posts }: { posts: Post[] }) => {
  return (
    <section>
      <ul>
        {posts.map(({ slug, date, title }: Partial<Post>) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Statically fetch all posts
export async function getStaticProps() {
  const posts = allPosts.map((post: Post) =>
    pick(post, ['title', 'date', 'slug'])
  );
  // eslint-disable-next-line no-console
  console.log(allPosts);
  return { props: { posts } };
}

export default Page;
