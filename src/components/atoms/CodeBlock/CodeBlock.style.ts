import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const InlineCode = styled.code`
  color: ${({ theme }) => theme.colors.inlineCodeColor};
  background-color: ${({ theme }) => theme.colors.inlinebg};
  border-radius: 6px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
`;

export const Pre = styled.pre`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  line-height: 1.5rem;
  margin: 2rem auto;
  overflow-x: auto;
  display: inline-flex;
`;

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  background: ${({ theme }) => theme.colors.codebg} !important;

  code > span {
    font-family: 'D2Coding ligature';
    background: rgba(255, 255, 255, 0) !important;
  }
`;
