import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

import { Github, Linkedin, Mail } from 'components/atoms/Icons';

import { Titleprops } from './Title.type';
import { Header, StyledTitle, Icons, Icon } from './Title.style';

const Title = ({
  date,
  githubLink,
  linkedinLink,
  mailLink,
  title,
}: Titleprops) => {
  return (
    <>
      <Header>
        <StyledTitle>{title}</StyledTitle>
        <Icons>
          {githubLink && (
            <Icon>
              <Link
                href={githubLink}
                target="_blank"
                aria-label="Go to Github link"
              >
                <Github />
              </Link>
            </Icon>
          )}
          {linkedinLink && (
            <Icon>
              <Link
                href={linkedinLink}
                target="_blank"
                aria-label="Go to Linkedin link"
              >
                <Linkedin />
              </Link>
            </Icon>
          )}
          {mailLink && (
            <Icon>
              <Link href={mailLink} aria-label={mailLink}>
                <Mail />
              </Link>
            </Icon>
          )}
        </Icons>
      </Header>
      {date && (
        <p>{format(parseISO(String(date)), 'MMMM do, yyyy', { locale: ko })}</p>
      )}
    </>
  );
};
export default Title;
