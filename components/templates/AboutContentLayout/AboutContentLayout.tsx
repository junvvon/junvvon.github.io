import { ReactNode } from 'react';

import { Content } from './AboutContentLayout.style';

const AboutContentLayout = ({ children }: { children: ReactNode }) => (
  <Content>{children}</Content>
);

export default AboutContentLayout;
