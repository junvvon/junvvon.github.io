import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from 'components/templates/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

const Index = ({ posts }: { posts: PostType[] }): JSX.Element => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Next.js starter for your next blog or personal site.</p>

      {posts?.map((post) => (
        <article key={post.slug}>
          <p>{format(parseISO(String(post.date)), 'MMMM dd, yyyy')}</p>
          <h1>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>{post.title}</a>
            </Link>
          </h1>
          <p>{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
      <a href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog">
        Get the source code!
      </a>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);
  return {
    props: { posts },
  };
};

export default Index;
