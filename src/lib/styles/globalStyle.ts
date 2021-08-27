import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
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
`;

export default GlobalStyle;
