import { Content } from './SideListLayout.style';
import { SideListLayoutProps } from './SideListLayout.type';

const SideListLayout = ({ children }: SideListLayoutProps) => {
  return <Content>{children}</Content>;
};

export default SideListLayout;
