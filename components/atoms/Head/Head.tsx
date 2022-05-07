import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { MetaProps } from 'types/layout';

export const WEBSITE_HOST_URL = 'https://julrum.github.io/';

const Head = ({ customMeta }: { customMeta?: MetaProps }) => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Develog',
    description: "Junwon's portfolio.",
    image:
      'https://user-images.githubusercontent.com/26790365/156870889-d2bb48ea-6c75-4a61-8a50-bd6cdb3c0b61.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={meta.description} />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#FAFAFA"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#161b22"
      />
      <meta name="author" content="junwon" />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Junwon Park | Portfolio" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@julrum" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Head;
