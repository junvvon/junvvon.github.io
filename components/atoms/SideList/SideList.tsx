import { SideListProps } from './SideList.type';
import { Title, List } from './SideList.style';

const SideList = ({ title, list }: SideListProps) => {
  return (
    <>
      <Title>{title}</Title>
      <List>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </>
  );
};

export default SideList;
