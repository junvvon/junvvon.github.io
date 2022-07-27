import { ReactNode } from 'react';

import { StyledH3 } from './H3.style';

const H3 = ({ children }: { children: ReactNode }) => (
  <StyledH3>{children}</StyledH3>
);

export default H3;
