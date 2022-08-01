import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

import H3 from 'components/atoms/H3';
import ScrollableTitle from 'components/atoms/ScrollableTitle';
import Title from 'components/molecules/Title';
import AboutContentLayout from 'components/templates/AboutContentLayout';
import Layout from 'components/templates/Layout';
import Head from 'next/head';

const SideList = dynamic(() => import('components/atoms/SideList'));
const HistoryBlock = dynamic(() => import('components/molecules/HistoryBlock'));
const SideListLayout = dynamic(
  () => import('components/templates/SideListLayout'),
);

const About = () => {
  const [scrollStep, setScrollStep] = useState(0);

  const handleIsScrollEvent = useCallback(() => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    setScrollStep(parseInt(`${(scrollTop + 10) / 50}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollStep]);

  useEffect(() => {
    window.addEventListener('scroll', handleIsScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleIsScrollEvent);
    };
  }, [handleIsScrollEvent]);

  return (
    <Layout customMeta={{ title: 'Junwon Park | Resume' }}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <article>
        <Title
          title="새로운 것을 끊임없이 탐구하는 개발자 박준원입니다."
          githubLink="https://github.com/Julrum"
          linkedinLink="https://www.linkedin.com/in/julrum/"
          mailLink="mailto:junwon@duck.com"
        />
        <AboutContentLayout>
          <div>
            <div>
              <p>
                &nbsp;2년 차 개발자로 스타트업에서 웹 서비스를
                기획/개발/배포/운영하였습니다. 주로 웹 서비스 개발을
                담당하였으며 PO(Product Owner) 역할을 겸하였습니다.
                <br />
                <br />
                &nbsp;코드 컨벤션을 설정하여 일관성을 유지하는 것을 좋아하며
                같은 기능을 하는 코드도 알아보기 쉽게 간단한 코드로 작성하고
                있습니다. 레거시 코드를 리팩터링하고 개선하는 것을 즐겨합니다.
                <br />
                <br />
                &nbsp;혼자서의 개발보다는 동료들과의 끊임없는 커뮤니케이션을
                통해 협업하는 것을 더 선호합니다. 국방부에서 진행한
                프로젝트에서도 동료들과의 계속된 소통으로 서로의 생각을 정리하고
                공유하여 성공적으로 프로젝트를 끝마친 경험이 있습니다.
              </p>
              <ScrollableTitle
                back="추구합니다."
                front="저는"
                scroll={scrollStep}
                titleId="title1"
              >
                <H3>같은 기능을 해도 알아보기 쉬운 코드를</H3>
                <H3>주석 없이도 알아 볼 수 있는 코드를</H3>
                <H3>재활용성이 높은 코드를</H3>
              </ScrollableTitle>
              <ScrollableTitle
                back="좋아합니다."
                front="저는"
                scroll={scrollStep}
                titleId="title2"
              >
                <H3>새로운 기술에 관심을 가지며 학습하기를</H3>
                <H3>컨벤션을 설정하여 일관성을 유지하기를</H3>
                <H3>과거에 작성한 코드들도 리팩터링하기를</H3>
                <H3>혼자보다는 동료들과 협업하는 것을</H3>
              </ScrollableTitle>
            </div>

            <h2>Project</h2>
            <HistoryBlock
              title="B2B 대시보드 페이지"
              subTitle="2022-02 ~ "
              companyName="볼트 마이크로"
              projectType="company"
              skill="Typescript, Next.Js, Mui, Styled-components, firebase, Storybook"
            >
              <p>
                프로젝트 수행 역할 서비스 중인 앱의 구독과 부가기능을 위한 B2B
                대시보드 페이지 제작 프로젝트입니다. 계정 정보 및 구독 상태를 볼
                수 있는 계정 페이지 프로젝트 설계부터 디자인, 개발을 맡았습니다.
              </p>
              <ul>
                <li>프론트엔드 기술환경 구성 및 기본 기능 구현</li>
                <li>
                  Mui와 styled-components를 결합한 커스텀 글로벌 테마 개발
                </li>
                <li>스토리북을 이용한 컴포넌트 기반 개발</li>
                <li>Firebase를 사용한 스토어 디자인</li>
                <li>React기반 컴포넌트 계층 구조 디자인</li>
                <li>paddle을 이용한 구독 서비스 개발</li>
              </ul>
            </HistoryBlock>
            <HistoryBlock
              title="스코어보드 및 타이머 제작"
              subTitle="2022-01 ~ 2022-02"
              companyName="볼트 마이크로"
              projectType="company"
              skill="Javascript, CSS, HTML5"
            >
              <p>
                서비스 중인 앱 내에 Webview 상에 띄울 각종 종목의 스코어보드 및
                타이머 제작 프로젝트 입니다. 온보딩 과정이었으며 가볍게 제작하기
                위해 Vanilla Javascript를 사용하였습니다.
              </p>

              <ul>
                <li>프론트엔드 기술환경 구성 및 모든 기능 구현</li>
                <li>다양한 브라우저 환경 및 사이즈 대응</li>
                <li>
                  BroadcastChannel을 이용하여 컨트롤러와 뷰어간의 통신이
                  가능하도록 구현
                </li>
              </ul>
            </HistoryBlock>
            <HistoryBlock
              githubLink="https://github.com/Julrum/ITE3068_team8"
              projectType="private"
              skill="Javascript, React, AWS Amplify, GraphQL, styled-components"
              subTitle="2021-11 ~ 2021-12"
              title="대선 뉴스 모아보기 페이지"
            >
              <p>
                한양대학교 소프트웨어스튜디오2 수업 과제로 대선 관련 정보를 모아
                볼 수 있는 웹페이지를 제작 프로젝트 입니다. 팀원 4명이서
                진행하였으며 팀장을 맡아 기획, 디자인 개발 등 전 과정을
                담당하였습니다.
              </p>
              <ul>
                <li>프론트엔드 기술환경 구성 및 기본 기능 구현</li>
                <li>
                  AWS Amplify를 이용한 회원 정보 관리 및 로그인, 로그아웃,
                  회원가입 기능 구현
                </li>
                <li>GraphQL을 이용한 데이터 관리</li>
                <li>React기반 컴포넌트 계층 구조 디자인</li>
              </ul>
            </HistoryBlock>
            <HistoryBlock
              githubLink="https://github.com/Julrum/OnelineBank"
              originalLink="https://github.com/Julrum/OnelineBank/releases/tag/v1.0"
              projectType="contest"
              skill="Javascript, React Native, Firebase, Expo"
              subTitle="2021-04 ~ 2021-06"
              title="한줄 은행"
            >
              <p>
                2021 우리은행 온(On)택트 해커톤 본선대회에 참여하여 개발한
                프로젝트입니다. 복잡해진 은행 앱의 사용 편의성을 위하여 채팅을
                통한 송금 기능을 가진 어플리케이션을 개발하였습니다. 대회에는
                팀원과 같이 나갔으나 개발은 혼자 진행하였습니다. 해커톤
                예선에서는 통과하였으나 본선에서는 우리 은행 앱 내에 비슷한
                서비스가 있다는 이유로 입상은 하지 못하였습니다.
              </p>
              <ul>
                <li>프론트엔드 기술환경 구성 및 모든 기능 구현</li>
                <li>Firebase를 사용한 스토어 디자인</li>
                <li>우리 은행 API를 사용한 송금 기능 구현</li>
                <li>생체인증을 이용한 사용자 확인 기능 구현</li>
              </ul>
            </HistoryBlock>
            <HistoryBlock
              githubLink="https://github.com/Julrum/julrum.github.io"
              originalLink="https://julrum.github.io"
              projectType="private"
              skill="Typescript, Next.Js, styled-components, mdx"
              subTitle="2021-02"
              title="개인 블로그"
            >
              <p>
                Next.Js를 이용하여 블로그를 제작하는 개인 프로젝트 입니다.
                처음엔 React로 개발하였으나 Post 페이지 구현을 위해 Next.Js로
                변경하였습니다.
              </p>
              <ul>
                <li>프론트엔드 기술환경 구성 및 모든 기능 구현</li>
                <li>Atomic 디자인</li>
                <li>웹브라우저의 테마에 따른 테마 변경 기능</li>
                <li>다양한 브라우저 환경 및 사이즈 대응</li>
              </ul>
            </HistoryBlock>
            <HistoryBlock
              title="워드, 엑셀 웹 뷰어"
              subTitle="2020-08 ~ 2020-12"
              projectType="company"
              companyName="대한민국 국방부"
              skill="Typescript, React, Redux, styled-components, React Router"
            >
              <p>
                워드와 엑셀 파일을 웹 내에서 특정 라인 및 셀 강조 표시, 커멘트
                기능이 있는 웹페이지 제작 프로젝트입니다. 프로젝트 기획, 디자인,
                개발 전 과정에 참여하였습니다. Antd를 사용했던 이전 프로젝트와
                달리 모든 컴포넌트를 직접 디자인 개발하였습니다.
              </p>
              <ul>
                <li>프론트엔드 기술환경 구성 및 핵심 기능 구현</li>
                <li>Redux, Redux-Saga를 사용한 스토어 디자인</li>
                <li>React기반 컴포넌트 계층 구조 디자인</li>
                <li>Atomic 디자인</li>
                <li>Lazy loading을 사용한 뷰어 최적화</li>
              </ul>
            </HistoryBlock>
            <HistoryBlock
              title="대시보드 페이지"
              subTitle="2019-06 ~ 2019-09"
              projectType="company"
              companyName="대한민국 국방부"
              skill="Javascript, React, Antd, Redux, styled-components, React Router"
            >
              <p>
                국방부 망 내에서 사용 가능한 대시보드 웹페이지 제작
                프로젝트입니다. 프로젝트 중간부터 참여하였습니다. 유지보수 및
                아직 개발되지 않은 새로운 기능을 개발하였습니다.
              </p>
              <ul>
                <li>
                  테이블 컴포넌트가 사용된 페이지의 성능 개선 및 정렬 기능 구현
                </li>
                <li>
                  Ant Design 라이브러리를 활용하여 컴포넌트를 사용 및 개조
                </li>
              </ul>
            </HistoryBlock>
            <h2>Work Experience</h2>
            <HistoryBlock title="볼트마이크로" subTitle="2022-01 ~ ">
              <ul>
                <li>CameraFi Live Admin 웹사이트 개발</li>
                <li>CameraFi Live Studio 웹사이트 개발</li>
                <li>CameraFi Live 앱 내의 스코어보드 및 타이머 에셋 개발</li>
              </ul>
            </HistoryBlock>
            <HistoryBlock title="대한민국 국방부" subTitle="2019-05 ~ 2020-12">
              <ul>
                <li>OO 체계 대시보드 페이지 개발</li>
                <li>OO 체계 웹사이트 개발</li>
              </ul>
              <a
                href="https://drive.google.com/file/d/16fqD52QfKeZN4-QQokJx-mFzAiulpEZu/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                aria-label="Letter of recommendation"
              >
                추천서 보기
              </a>
            </HistoryBlock>

            <h2>Education</h2>
            <HistoryBlock title="한양대학교" subTitle="2017-03 ~ ">
              <p>컴퓨터소프트웨어학부 전공</p>
            </HistoryBlock>
            <HistoryBlock
              title="세종과학고등학교"
              subTitle="2014-03 ~ 2017-02"
            />

            <h2>Certificates</h2>
            <HistoryBlock
              originalLink="https://drive.google.com/file/d/1LzNVPiGx2hFrqHJdnqedG1TrOatShHK-/view?usp=sharing"
              subTitle="2021-11-10"
              title="AWS training and certification"
            >
              <p>AWS Technical Essentials</p>
            </HistoryBlock>
            <HistoryBlock
              originalLink="https://drive.google.com/file/d/1Pl_UzJ8mkrCNYbl3HPsu9gbzctfQlPK1/view?usp=sharing"
              subTitle="2021-10-30"
              title="TOPCIT"
            >
              <p>Level 3 (Score 431)</p>
            </HistoryBlock>
            <HistoryBlock
              originalLink="https://drive.google.com/file/d/1vzBdsUZke4CE7rVAzCgNvlEOEmpQWgm7/view?usp=sharing"
              subTitle="2019-12-14"
              title="리눅스 마스터 2급"
            />
          </div>
          <div>
            <h2>SKILLS</h2>
            <SideListLayout>
              <SideList
                title="Front-End"
                list={[
                  'React',
                  'Next.js',
                  'JavaScript',
                  'TypeScript',
                  'HTML5',
                  'CSS',
                ]}
              />
              <SideList
                title="Back-End"
                list={['Firebase', 'GCP', 'AWS', 'GraphQL', 'Java', 'Python']}
              />
              <SideList title="Application" list={['React Native']} />
              <SideList
                title="etc"
                list={[
                  'Ubuntu',
                  'Git/Github/Gitlab',
                  'Confluence',
                  'JIRA',
                  'Figma',
                ]}
              />
            </SideListLayout>
            <SideListLayout>
              <SideList title="Languages" list={['English-intermediate']} />
              <SideList
                title="Courseworks"
                list={[
                  'Algorithms',
                  'Computer Graphics',
                  'Computer Networks',
                  'Computer Security',
                  'Data Structures',
                  'Database Systems',
                  'Operating Systems',
                  'Software Engineering',
                  'System Programming',
                ]}
              />
            </SideListLayout>
          </div>
        </AboutContentLayout>
      </article>
    </Layout>
  );
};

export default About;
