import { GetStaticProps } from 'next';
import Layout from 'components/templates/Layout';
import { getAllPosts } from 'lib/api';
import { PostType } from 'types/post';
import PostPreview from 'components/molecules/PostPreview';

const Index = ({ posts }: { posts: PostType[] }): JSX.Element => {
  return (
    <Layout>
      {posts?.map((post) => <PostPreview post={post} key={post.slug} />)}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'image', 'slug', 'title']);
  return {
    props: { posts },
  };
};

export default Index;
