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
      <h3>{front}</h3>
      <Scrollable id={titleId}>{children}</Scrollable>
      <h3>{back}</h3>
    </Title>
  );
};

export default ScrollableTitle;
