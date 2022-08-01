import styled from 'styled-components';

import { media } from 'styles/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column;
  }
`;
