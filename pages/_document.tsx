import Script from 'next/script';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const APP_NAME = 'Junwon Park | Portfolio';
const APP_DESCRIPTION = "Junwon's portfolio";
const APP_URL = 'https://studio.camerafi.com';
const APP_IMAGE = '/images/blog/blog01.webp';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="junwon" />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta property="og:description" content={APP_DESCRIPTION} />
          <meta property="og:image" content={APP_IMAGE} />
          <meta property="og:site_name" content={APP_NAME} />
          <meta property="og:title" content={APP_NAME} />
          <meta property="og:type" content="website" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#FFFFFF"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#0d1116"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={APP_URL} />
          <meta name="twitter:title" content={APP_NAME} />
          <meta name="twitter:description" content={APP_DESCRIPTION} />
          <meta name="twitter:image" content={APP_IMAGE} />
          <meta name="twitter:site" content="@julrum" />
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Script src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
