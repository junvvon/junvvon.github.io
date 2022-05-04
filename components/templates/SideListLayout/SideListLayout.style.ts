import styled from 'styled-components';
import { media } from 'styles/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: row;
  }
  ${media.mobile} {
    flex-direction: column;
  }
`;
