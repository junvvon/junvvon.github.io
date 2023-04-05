import Link from 'next/link';

import { Github } from 'components/atoms/Icons';
import Period from 'components/atoms/Period';

import { ProjectProps } from './Project.type';
import { Block, Header, Title } from './Project.style';

const HistoryBlock = ({
  children,
  description,
  githubLink,
  other = false,
  skill,
  dateFrom,
  dateTo,
  title,
}: ProjectProps) => (
  <Block other={other}>
    <Header>
      <Title>
        <h4>{title}</h4>
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            aria-label="Go to Github link"
          >
            <Github />
          </Link>
        )}
      </Title>
      <Period dateFrom={dateFrom} dateTo={dateTo} />
    </Header>

    <h5>Description</h5>
    {description}
    <h5>What did I Do</h5>
    <div>{children}</div>
    {skill && (
      <>
        <h5>Tech Stack</h5>
        {skill}
      </>
    )}
  </Block>
);

export default HistoryBlock;
