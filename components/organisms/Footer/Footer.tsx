import Link from 'next/link';

import { Wrapper, LinkText } from './Footer.style';

const Footer = () => (
  <Wrapper>
    <Link
      href="https://github.com/Julrum"
      passHref
      aria-label="Go to Github link"
    >
      <LinkText>@julrum</LinkText>
    </Link>
  </Wrapper>
);

export default Footer;
