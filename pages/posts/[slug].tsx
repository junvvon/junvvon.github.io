import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remarkGfm from 'remark-gfm';
import supersub from 'remark-supersub';
import emoji from 'remark-emoji';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';

import QuoteBlock from 'components/atoms/QuoteBlock';
import TableBlock from 'components/atoms/TableBlock';
import ImageDescription from 'components/molecules/ImageDescription';
import Title from 'components/molecules/Title';
import Layout from 'components/templates/Layout';
import { MetaProps } from 'types/layout';
import { PostType } from 'types/post';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';

const PostPage = ({
  mdxSource,
  frontMatter,
}: {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: PostType;
}) => {
  const customMeta: MetaProps = {
    date: frontMatter.date,
    description: frontMatter.description,
    image: `${frontMatter.image}`,
    title: `${frontMatter.title} | Junwon Park`,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <article>
        <Title
          date={frontMatter.date}
          githubLink={frontMatter.originalLink}
          title={frontMatter.title}
        />
        <div>
          <MDXRemote
            {...mdxSource}
            components={{
              Head,
              ImageDescription,
              QuoteBlock,
              TableBlock,
            }}
            lazy
          />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [emoji, remarkGfm, supersub],
      rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeCodeTitles],
    },
    scope: data,
  });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
