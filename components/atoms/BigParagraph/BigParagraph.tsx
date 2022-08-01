import { ReactNode } from 'react';

import { Paragraph } from './BigParagraph.style';

const BigParagraph = ({ children }: { children: ReactNode }) => (
  <Paragraph>{children}</Paragraph>
);

export default BigParagraph;
