import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import Github from 'components/atoms/Icons/Github';
import Linkedin from 'components/atoms/Icons/Linkedin';
import Mail from 'components/atoms/Icons/Mail';
import { Titleprops } from './Title.type';
import { Header, StyledTitle, Divider, Icons, Icon } from './Title.style';

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
              <Link href={githubLink} passHref>
                <a target="_blank">
                  <Github />
                </a>
              </Link>
            </Icon>
          )}
          {linkedinLink && (
            <Icon>
              <Link href={linkedinLink} passHref>
                <a target="_blank">
                  <Linkedin />
                </a>
              </Link>
            </Icon>
          )}
          {mailLink && (
            <Icon>
              <Link href={mailLink} passHref>
                <a>
                  <Mail />
                </a>
              </Link>
            </Icon>
          )}
        </Icons>
      </Header>
      {date && (
        <p>{format(parseISO(String(date)), 'MMMM do, yyyy', { locale: ko })}</p>
      )}
      <Divider />
    </>
  );
};
export default Title;
