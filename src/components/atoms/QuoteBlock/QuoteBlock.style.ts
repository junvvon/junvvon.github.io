import styled from 'styled-components';

export const StyledQuoted = styled.blockquote`
  border-left: 0.25em solid ${({ theme }) => theme.colors.quotedBorder};
  color: ${({ theme }) => theme.colors.quotedColor};
  padding: 0 1em;
  margin-bottom: 16px;
  margin-top: 0;
  margin: 0;

  p {
    &:last-child {
      margin-bottom: 0;
    }
    &:first-child {
      margin-top: 0;
    }
  }
`;
