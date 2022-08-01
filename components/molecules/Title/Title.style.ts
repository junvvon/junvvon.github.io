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
  word-break: keep-all;
`;

export const Icons = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  padding: 10px;
`;
