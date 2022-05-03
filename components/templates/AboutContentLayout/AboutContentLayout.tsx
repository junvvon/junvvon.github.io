import { Content } from './AboutContentLayout.style';
import { AboutContentLayoutProps } from './AboutContentLayout.type';

const AboutContentLayout = ({ children }: AboutContentLayoutProps) => {
  return <Content>{children}</Content>;
};

export default AboutContentLayout;
