import * as styled from 'styled-components';
import { normalize } from 'styled-normalize';

import { media } from './theme';

export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}
  html,
	body {
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: none;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    background: ${({ theme }) => theme.colors.basicBg};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.main};
    font-family: ${({ theme }) => theme.fontFamily.text}, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.body};
    height: 100%;
    line-height: 1.15;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    word-break: keep-all;

    ${media.tablet} {
      font-size: 14px;
    }
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    font-size: 1.1rem;
  }

  a {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;
  }

  code {
    font-family: ${({ theme }) => theme.fontFamily.codeLigature},
      source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ul {
    font-size: 1.1rem;
    list-style: none;
    margin: 0 0 1rem;
    padding: 0;
  }

  ul > li {
    padding: 0.2rem 0 0.2rem 1rem;
    position: relative;
  }

  ul > li:before {
    color: ${({ theme }) => theme.colors.primary};
    content: '•';
    display: inline-block;
    left: 0;
    position: absolute;
  }

  h1 {
    font-size: 5rem;
    line-height: 1.1;
    margin: 0.67em 0;

    ${media.tablet} {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 3rem;
    margin: 4rem 0 2rem;
  }

  h3 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }

  h4 {
    font-size: 2rem;
    margin: 0 0 1rem;

    ${media.tablet} {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.3rem;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.scrollTrackBg};
    border: solid 1px ${({ theme }) => theme.colors.scrollBorder};
    margin: 1px;
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border: solid 3px transparent;
    box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.colors.scrollTrackBg};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: solid 3px transparent;
    box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.colors.scrollThumbBg};
  }

  .pc-tablet-only {
    display: block;

    ${media.mobile} {
      display: none;
    }
  }

  .tablet-mobile-only {
    display: none;

    ${media.tablet} {
      display: block;
    }
  }

  .mobile-only {
    display: none;

    ${media.mobile} {
      display: block;
    }
  }
`;
