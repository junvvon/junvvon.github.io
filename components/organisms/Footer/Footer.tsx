import Link from 'next/link';
import Github from 'components/atoms/Icons/Github';
import { Wrapper, LinkWrapper, LinkText } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Link href="https://github.com/Julrum/julrum.github.io" passHref>
        <LinkWrapper>
          <Github />
          <LinkText>julrum.github.io</LinkText>
        </LinkWrapper>
      </Link>
    </Wrapper>
  );
};

export default Footer;
