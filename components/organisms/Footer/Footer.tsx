import Link from 'next/link';

import { Wrapper, LinkWrapper, LinkText } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Link
        href="https://github.com/Julrum"
        passHref
        aria-label="Go to Github link"
      >
        <LinkWrapper>
          <LinkText>@julrum</LinkText>
        </LinkWrapper>
      </Link>
    </Wrapper>
  );
};

export default Footer;
