import H3 from 'components/atoms/H3';

import { ScrollableTitleProps } from './ScrollableTitle.type';
import { Title, Scrollable } from './ScrollableTitle.style';

const ScrollableTitle = ({
  back,
  children,
  front,
  scroll,
  titleId,
}: ScrollableTitleProps) => {
  document.getElementById(titleId)?.scrollTo(0, scroll * 28.8);

  return (
    <Title>
      <H3>{front}</H3>
      <Scrollable id={titleId}>{children}</Scrollable>
      <H3>{back}</H3>
    </Title>
  );
};

export default ScrollableTitle;
