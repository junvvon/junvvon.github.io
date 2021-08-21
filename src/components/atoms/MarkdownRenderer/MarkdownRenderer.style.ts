import styled from 'styled-components';

export const MarkdownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
`;

export const InlineCode = styled.span`
  background-color: yellow;
`;

export const Pre = styled.pre`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  line-height: 1.5rem;
  margin: 2rem auto;
`;
