import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { GlobalStyle } from 'styles/global-style';
import { lightTheme, darkTheme } from 'styles/theme';
import FontStyles from 'public/fonts/fonts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
  const { value } = useDarkMode(false);
  const theme = value ? darkTheme : lightTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FontStyles />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
