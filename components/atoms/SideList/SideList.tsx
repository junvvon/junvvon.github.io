import { SideListProps } from './SideList.type';
import { Wrapper, Title, List } from './SideList.style';

const SideList = ({ title, list }: SideListProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </Wrapper>
  );
};

export default SideList;
