import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { MetaProps } from 'types/layout';

export const WEBSITE_HOST_URL = 'https://julrum.github.io';

const Head = ({ customMeta }: { customMeta?: MetaProps }) => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Portfolio | Junwon Park',
    description: "Junwon's portfolio.",
    image: '/images/blog/blog01.webp',
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
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
