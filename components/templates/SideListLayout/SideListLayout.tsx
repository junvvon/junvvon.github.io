import type { ReactNode } from 'react';

import { Content } from './SideListLayout.style';

const SideListLayout = ({ children }: { children: ReactNode }) => (
  <Content>{children}</Content>
);

export default SideListLayout;
