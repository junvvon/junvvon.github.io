import React from 'react';
import { QuoteBlockProps } from './QuoteBlock.type';
import { StyledQuoted } from './QuoteBlock.style';

const QuoteBlock: React.FC<QuoteBlockProps> = ({ ...rest }) => {
  return <StyledQuoted {...rest} />;
};

export default QuoteBlock;
