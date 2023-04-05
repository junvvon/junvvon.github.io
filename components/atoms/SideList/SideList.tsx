import { SideListProps } from './SideList.type';
import { Wrapper } from './SideList.style';

const SideList = ({ title, list }: SideListProps) => (
  <Wrapper>
    <h3>{title}</h3>
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Wrapper>
);

export default SideList;
