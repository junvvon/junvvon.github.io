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
                aria-label="Go to Github page"
                title="Go to Github page"
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
                aria-label="Go to Linkedin page"
                title="Go to Linkedin page"
              >
                <Linkedin />
              </Link>
            </Icon>
          )}
          {mailLink && (
            <Icon>
              <Link
                href={mailLink}
                aria-label={`Mail to ${mailLink}`}
                title={`Mail to ${mailLink}`}
              >
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
