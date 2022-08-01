import styled from 'styled-components';

import { media } from 'styles/theme';

export const Paragraph = styled.div`
  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;

    ${media.tablet} {
      font-size: 1.5rem;
    }
  }
`;
