import React from "react";
import { GatsbyBrowser } from "gatsby";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import { darkTheme, lightTheme, media } from "../styles/theme";

const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  const GlobalStyle = createGlobalStyle`
		${normalize}

		* {
			box-sizing: border-box;
			font-size: 1.1rem;
		}

		::selection {
			background: ${({ theme }) => theme.colors.selection};
		}

		html,
		body {
			-moz-osx-font-smoothing: grayscale;
			-ms-overflow-style: none;
			-webkit-font-smoothing: antialiased;
			-webkit-text-size-adjust: none;
			background: ${({ theme }) => theme.colors.basicBg};
			color: ${({ theme }) => theme.colors.main};
			font-family: ${({ theme }) => theme.fontFamily.text}, -apple-system,
				BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
				'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
			font-size: 16px;
			height: 100%;
			line-height: 1.15;
			margin: 0;
			padding: 0;
			scrollbar-width: none;
			word-break: keep-all;
			transition: all 0.3s ease-in-out;

			${media.tablet} {
				font-size: 14px;
			}
		}

		#root {
			height: 100%;
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

  const query = "(prefers-color-scheme: dark)";
  const theme = window.matchMedia(query).matches ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};

export default wrapRootElement;
