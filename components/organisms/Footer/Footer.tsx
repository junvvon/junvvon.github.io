import Link from 'next/link';
import { Wrapper, LinkWrapper, LinkText } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Link href="https://github.com/Julrum/julrum.github.io" passHref>
        <LinkWrapper>
          <LinkText>@julrum</LinkText>
        </LinkWrapper>
      </Link>
    </Wrapper>
  );
};

export default Footer;
