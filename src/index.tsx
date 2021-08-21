import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Routes from '@pages/Routes';
import theme from './lib/styles/theme';
import GlobalStyle from './lib/styles/globalStyle';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root'),
);
