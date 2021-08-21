import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Routes from '@pages/Routes';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';
import FontStyle from '@styles/fonts/fonts';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FontStyle />
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root'),
);
