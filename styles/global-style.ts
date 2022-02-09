import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
	body {
		height: 100%;
		padding: 0;
 		margin: 0;
		box-sizing: border-box;
 		font-family: ${({ theme }) =>
      theme.fontFamily
        .text}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	background: ${({ theme }) => theme.colors.basicBg};
		color: ${({ theme }) => theme.colors.main};
		font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.8rem;
    -webkit-text-size-adjust: none;
    ${media.tablet}{
      font-size: 10px;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
	}
	#root {
		height: 100%;
	}
	code {
	  font-family: ${({ theme }) =>
      theme.fontFamily
        .codeLigature}, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
	* {
 		box-sizing: border-box;
 	}

  .pc-tablet-only {
    display: block;
    ${media.mobile} {
        display: none;
    }
  }
  .tablet-mobile-only{
    display: none;
    ${media.tablet}{
        display:block;
    }
  }
  .mobile-only {
    display: none;
    ${media.mobile} {
        display: block;
    }
  }
`;
