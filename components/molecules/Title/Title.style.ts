import styled from 'styled-components';
import { media } from 'styles/theme';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin: 0.67em 0;
  word-break: keep-all;

  ${media.tablet} {
    font-size: 3rem;
  }
`;

export const Icons = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  padding: 10px;
`;
