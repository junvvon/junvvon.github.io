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
    line-height: 1.8rem;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    word-break: keep-all;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  code {
    font-family: ${({ theme }) => theme.fontFamily.codeLigature},
      source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  li {
    list-style-position: inside;
    text-indent: -20px;
    padding-left: 20px;
  }

  ul {
    padding: 0px;
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
