import { QuoteBlockProps } from './QuoteBlock.type';
import { StyledQuoted } from './QuoteBlock.style';

const QuoteBlock = ({ ...rest }: QuoteBlockProps) => {
  return <StyledQuoted {...rest} />;
};

export default QuoteBlock;
