import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import emoji from 'remark-emoji';
import Layout from 'components/templates/Layout';
import { MetaProps } from 'types/layout';
import { PostType } from 'types/post';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';
import CodeBlock from 'components/atoms/CodeBlock';
import QuoteBlock from 'components/atoms/QuoteBlock';
import TableBlock from 'components/atoms/TableBlock';
import ImageDescription from 'components/molecules/ImageDescription';

const components = {
  Head,
  Link,
  code: (props: any) => <CodeBlock {...props} />,
  blockquote: (props: any) => <QuoteBlock {...props} />,
  table: (props: any) => <TableBlock {...props} />,
  img: (props: any) => (
    <ImageDescription src={props.src} alt={props.alt}>
      {props.children}
    </ImageDescription>
  ),
};

const PostPage = ({
  source,
  frontMatter,
}: {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
}) => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Junwon Park`,
    description: frontMatter.description,
    image: `${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <article>
        <h1>{frontMatter.title}</h1>
        <p>{format(parseISO(String(frontMatter.date)), 'MMMM dd, yyyy')}</p>
        <div>
          <MDXRemote {...source} components={components} />
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
      remarkPlugins: [
        require('remark-code-titles'),
        require('remark-sub-super'),
        emoji,
      ],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
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
