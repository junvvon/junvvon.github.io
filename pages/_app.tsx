import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global-style";
import { lightTheme, darkTheme } from "styles/theme";
import FontStyles from "public/fonts/fonts";
import { useTheme } from "hooks/useTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [themeMode, setThemeMode] = useTheme();
  const theme = themeMode === "light" ? lightTheme : darkTheme;

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
