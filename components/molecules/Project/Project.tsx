import Link from 'next/link';

import { Github } from 'components/atoms/Icons';
import Period from 'components/atoms/Period';

import { ProjectProps } from './Project.type';
import { Block, Header, Title } from './Project.style';

const HistoryBlock = ({
  children,
  dateFrom,
  dateTo,
  description,
  detailLink,
  githubLink,
  other = false,
  skill,
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
    <p>
      {description}
      &nbsp;
      {detailLink ? <Link href={detailLink}>자세히 보기</Link> : null}
    </p>
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
