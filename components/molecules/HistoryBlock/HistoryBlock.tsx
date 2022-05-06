import Link from 'next/link';
import Github from 'components/atoms/Icons/Github';
import OpenInNewTab from 'components/atoms/Icons/OpenInNewTab';
import { HistoryBlockProps } from './HistoryBlock.type';
import {
  Block,
  ChildrenContent,
  ExternalLink,
  Extratitle,
  ExtratitleContent,
  Header,
  SubTitle,
  SubTitleContent,
  Title,
  TitleContent,
} from './HistoryBlock.style';

const HistoryBlock = ({
  githubLink,
  children,
  companyName,
  originalLink,
  projectType,
  skill,
  subTitle,
  title,
}: HistoryBlockProps) => {
  const matchProjectType = (type: string) => {
    switch (type) {
      case 'company':
        return '사내 프로젝트';
      case 'contest':
        return '외부 대회';
      case 'private':
        return '개인 프로젝트';
      case 'school':
        return '교내 프로젝트';
      default:
        return '기타';
    }
  };

  return (
    <Block>
      <Header hasChildren={!!children}>
        <Title>
          {originalLink ? (
            <Link href={originalLink} passHref>
              <ExternalLink target="_blank">
                <TitleContent>{title}</TitleContent>
                <OpenInNewTab />
              </ExternalLink>
            </Link>
          ) : (
            <TitleContent>{title}</TitleContent>
          )}
          {githubLink && (
            <Link href={githubLink} passHref>
              <a target="_blank">
                <Github />
              </a>
            </Link>
          )}
        </Title>
        <Extratitle>
          <ExtratitleContent>{subTitle}</ExtratitleContent>
          {projectType && (
            <ExtratitleContent>
              {matchProjectType(projectType)}
            </ExtratitleContent>
          )}
        </Extratitle>
      </Header>
      {companyName && projectType && (
        <SubTitle>
          <SubTitleContent>
            <strong>소속회사명</strong> {companyName}
          </SubTitleContent>
        </SubTitle>
      )}
      {skill && (
        <SubTitle>
          <SubTitleContent>
            <strong>주사용기술</strong> {skill}
          </SubTitleContent>
        </SubTitle>
      )}
      <ChildrenContent>{children}</ChildrenContent>
    </Block>
  );
};

export default HistoryBlock;
