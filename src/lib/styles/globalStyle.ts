import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
	${normalize}

	html,
	body {
		height: 100%;
		padding: 0;
 		margin: 0;
		padding-top: 64px;
		box-sizing: border-box;
 		font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	background: #e9ecef;
		color: ${({ theme }) => theme.colors.main};
		font-size: ${({ theme }) => theme.fontSizes.body};
	}
	#root {
		height: 100%;
	}
	code {
	  font-family: D2Coding, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
	* {
 		box-sizing: border-box;
 	}
`;

export default GlobalStyle;
