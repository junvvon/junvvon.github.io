import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import Github from 'components/atoms/Icons/Github';
import { Titleprops } from './Title.type';
import { Header, StyledTitle, Divider } from './Title.style';

const Title = ({ date, link, title }: Titleprops) => {
  return (
    <>
      <Header>
        <StyledTitle>{title}</StyledTitle>
        {link && (
          <Link href={link} passHref>
            <a target="_blank">
              <Github />
            </a>
          </Link>
        )}
      </Header>
      <p>{format(parseISO(String(date)), 'MMMM do, yyyy', { locale: ko })}</p>
      <Divider />
    </>
  );
};
export default Title;
