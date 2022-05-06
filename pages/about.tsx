import HistoryBlock from 'components/molecules/HistoryBlock';
import SideList from 'components/atoms/SideList';
import Title from 'components/molecules/Title';
import AboutContentLayout from 'components/templates/AboutContentLayout';
import Layout from 'components/templates/Layout';
import SideListLayout from 'components/templates/SideListLayout';

const About = () => (
  <Layout customMeta={{ title: 'About | Develog' }}>
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
              안녕하세요, 저는 볼트 마이크로에서 일하고 있는 Frontend
              개발자입니다.
            </p>
            <h3> 저는 추구합니다.</h3>
            <p>같은 기능을 하는 코드도 알아보기 쉽게 간단한 코드</p>
            <p>주석 없이도 알아 볼 수 있는 코드</p>
            <h3> 저는 좋아합니다.</h3>
            <p>
              새로운 기술에 관심을 보이며 기회가 될때마다 프로젝트 진행을 통해
              학습하기를 즐겨 합니다.
            </p>
            <p>
              프로젝트 시작 전 컨벤션을 설정하여 일관성을 유지하는 것을
              좋아합니다.
            </p>
            <p>
              과거에 작성한 코드들에 그동안 배운 지식들을 적용해보거나
              리팩터링하고 개선하고 코드들을 분리하여 효율적으로 구현하는 것을
              좋아합니다.
            </p>
            <p>
              혼자서의 개발보다는 동료들과의 끊임없는 커뮤니케이션을 통해
              협업하는 것을 더 선호합니다.
            </p>
          </div>
          <h2>학력</h2>
          <HistoryBlock title="한양대학교" subTitle="2017-03 ~ ">
            <p>컴퓨터소프트웨어학부 전공</p>
          </HistoryBlock>
          <HistoryBlock title="세종과학고등학교" subTitle="2014-03 ~ 2017-02" />

          <h2>프로젝트</h2>
          <HistoryBlock
            title="B2B 대시보드 페이지"
            subTitle="2022-02 ~ "
            companyName="볼트 마이크로"
            projectType="company"
            skill="Next.Js, Typescript, Storybook, Mui, Styled-components, firebase, i18n, paddle"
          >
            <p>
              프로젝트 수행 역할 서비스 중인 앱의 구독과 부가기능을 위한 B2B
              대시보드 페이지 제작 프로젝트입니다.
            </p>
            <li>로그인, 로그아웃, 비밀번호 찾기, 회원가입 기능 제공</li>
            <li>방송 관련 요약 정보를 제공하는 대시보드 페이지</li>
            <li>유료 서비스 사용을 위한 구독 페이지</li>
            <li>
              방송 중이거나 지금까지 방송한 목록을 확인할 수 있는 방송관리
              페이지
            </li>
            <li>
              방송하면서 앱에서 사용할 수 있는 여러 에셋을 제어하고 관리할 수
              있는 에셋 페이지
            </li>
            <p>
              계정 정보 및 구독 상태를 볼 수 있는 계정 페이지 프로젝트 설계부터
              디자인, 개발을 맡았습니다.
            </p>
            <li>Next.JS, typescript를 이용하여 대시보드 페이지 제작</li>
            <li>미디어 쿼리를 이용한 반응형 웹 제작</li>
            <li>Mui와 styled-components를 결합하여 커스텀 글로벌 테마 제작</li>
            <li>i18n을 이용하여 글로벌 서비스에 대응</li>
            <li>storybook을 이용하여 협업 강화</li>
            <li>firebase를 이용한 계정 및 데이터 관리</li>
            <li>paddle을 이용한 구독 서비스 개발</li>
          </HistoryBlock>
          <HistoryBlock
            title="스코어보드 및 타이머 제작"
            subTitle="2022-01 ~ 2022-02"
            companyName="볼트 마이크로"
            projectType="company"
            skill="Vanilla Javascript, CSS, HTML"
          >
            <p>
              서비스 중인 앱 내에 Webview 상에 띄울 각종 종목의 스코어보드 및
              타이머 제작 프로젝트 입니다.
            </p>
            <li>
              범용, 야구, 축구, 농구, 탁구 스코어보드 및 각 스코어보드에 맞는
              컨트롤러
            </li>
            <li>
              컨트롤러를 이용하여 종목에 맞는 점수 및 시간, 추가시간, 아웃
              카운트, 현재 베이스 상황 등을 제어
            </li>
            <li>
              CustomCSS를 제공하여 사용자가 스코어보드 및 타이머를 커스텀할 수
              있게 제공
            </li>
            <li>시계, 스톱워치, 타이머 및 각 컨트롤러</li>
            <li>
              시계 포맷 변경 및 일반적인 스톱워치 및 타이머 기능 제어 컨트롤러
              제공
            </li>

            <p>Vanilla Javascript, HTML, CSS 조합으로 구현하였습니다.</p>
            <li>
              범용, 야구, 축구, 농구, 탁구 스코어보드 및 각 스코어보드에 맞는
              컨트롤러 제작
            </li>
            <li>시계, 스톱워치, 타이머 및 각 컨트롤러 제작</li>
            <li>
              웹뷰의 크기에 vw 단위를 사용하여 웹뷰의 너비에 맞게 반응형으로
              스코어보드 및 타이머가 동적으로 변화하도록 디자인
            </li>
            <li>
              BroadcastChannel을 이용하여 컨트롤러와 뷰어를 분리하여 다른 탭에서
              스코어보드 및 타이머를 조작할 수 있도록 제작
            </li>
            <li>localstorage를 이용하여 설정 값 저장</li>
          </HistoryBlock>
          <HistoryBlock
            githubLink="https://github.com/Julrum/ITE3068_team8"
            projectType="private"
            skill="React.Js, AWS Amplify, React-charts, styled-components"
            subTitle="2021-11 ~ 2021-12"
            title="대선 뉴스 모아보기 페이지"
          >
            <p>
              대선 관련 정보를 모아 볼 수 있는 웹페이지를 제작 프로젝트 입니다.
            </p>
            <li>로그인, 로그아웃, 회원가입 기능</li>
            <li>
              오늘의 주요 뉴스와 대선까지 남은 디데이, 주요 일정을 보여주는 메인
              페이지
            </li>
            <li>
              선거 정보 및 역대 대선 득표율 및 투표율을 보여주는 선거 정보
              페이지
            </li>
            <li>각 후보 정보 및 주요 공약을 볼 수 있는 후보 정보 페이지</li>
            <li>
              대선 관련 최신 뉴스 제공 및 후보와 관련된 뉴스만 모아 볼 수 있는
              필터링 기능을 제공하는 선거 뉴스 페이지
            </li>
            <li>
              현재까지 진행된 여론 조사 결과를 차트로 보여주는 여론조사 페이지
            </li>
            <li>마음에 드는 기사를 모아 볼 수 있는 페이지</li>

            <p>
              한양대학교 소프트웨어스튜디오2 수업에서 총 팀원 4명으로 팀장을
              맡아 프로젝트를 진행하였습니다.
            </p>
            <li>
              AWS Amplify를 이용하여 회원 정보 관리 및 로그인, 로그아웃,
              회원가입 기능 제작
            </li>
            <li>GraphQL을 이용하여 좋아요한 기사 정보 관리</li>
            <li>커밋 컨벤션 설정 및 팀원 조율</li>
            <li>
              opengraph 메타데이터를 이용하여 네이버 뉴스 API에서 받아온 링크의
              미리보기 컴포넌트 제작
            </li>
            <li>주요 후보와 관련 있는 기사만 모아 볼 수 있는 필터링 제작</li>
            <li>선거 뉴스 페이지 제작</li>
            <li>다른 팀원의 코드 리뷰 및 수정</li>
            <li>로그인, 로그아웃, 회원가입 기능 제작 및 모달 제작</li>
          </HistoryBlock>
          <HistoryBlock
            githubLink="https://github.com/Julrum/OnelineBank"
            originalLink="https://github.com/Julrum/OnelineBank/releases/tag/v1.0"
            projectType="contest"
            skill="React Native, Firebase, Expo"
            subTitle="2021-04 ~ 2021-06"
            title="한줄 은행"
          >
            <p>
              복잡해진 은행 앱의 사용 편의성을 위하여 채팅 보내듯이 송금 기능
              구현 프로젝트 입니다.
            </p>
            <li>로그인, 로그아웃, 회원가입 기능</li>
            <li>채팅 텍스트를 분석하여 송금기능을 제공하는 채팅 페이지</li>
            <li>
              텍스트 인식 후 제대로 인식했는지 확인하는 과정 및 사용자가 수락을
              하면 바이오인증 후 송금
            </li>
            <li>
              연락처 페이지에 저장된 사용자명을 입력하면 인식하여 별도의
              계좌번호 및 은행명을 입력하지 않아도 바로 송금
            </li>
            <li>
              은행명, 계좌번호, 받는 사람 이름을 저장할 수 있는 연락처 페이지
            </li>
            <li>
              이름, 이메일, 계좌번호 정보를 볼 수 있으며 로그아웃을 할 수 있는
              내 정보 페이지
            </li>

            <p>
              2021 우리은행 온(On)택트 해커톤 본선대회에 참여하였고 우리은행
              API를 활용하여 혼자서 개발하였습니다.
            </p>
            <li>계정 정보를 저장하고 관리하기 위해 Firebase를 연결</li>
            <li>앱의 로그인, 회원가입, 로그아웃 페이지를 구현</li>
            <li>
              채팅 기능은 Firestore에 채팅 내역을 저장하여 불러오는 방식으로
              제작
            </li>
            <li>
              사용자가 입력한 텍스트에서 은행 이름이나 계좌번호, 금액, 받는
              사용자 이름 등을 정규표현식을 통해 인식하여 알맞은 함수를 호출하여
              동작하게 제작
            </li>
            <li>
              텍스트를 인식한 후 챗봇이 입력한 정보를 정리하여 제대로
              인식하였는지 사용자에게 확인한 후 사용자가 수락을 하면 스마트폰의
              생체인증 및 비밀번호를 이용하여 인증을 한 뒤 송금 API를 호출하여
              송금하도록 제작
            </li>
            <li>
              연락처 페이지를 제작하여 사용자가 미리 은행명, 계좌번호, 받는 사람
              이름을 저장하여 채팅 페이지에서 등록되어 있는 받는 사람 이름만
              입력하면 저장되어 있는 정보를 불러와 송금하도록 하도록 제작
            </li>

            <p>
              해커톤 예선에서는 통과하였습니다. 본선에서는 우리 은행 앱 내에
              비슷한 서비스가 있다는 이유로 입상은 하지 못하였습니다.
            </p>
          </HistoryBlock>
          <HistoryBlock
            githubLink="https://github.com/Julrum/julrum.github.io"
            originalLink="https://julrum.github.io"
            projectType="private"
            skill="Next.Js, Typescript, mdx"
            subTitle="2021-02"
            title="개인 블로그"
          >
            <p>Next.Js로 제작한 개인 블로그 프로젝트 입니다.</p>
            <li>지금까지 진행한 프로젝트 목록을 표시하는 메인 페이지</li>
            <li>저를 소개하는 About 페이지</li>
            <li>첨부된 이미지와 함께 설명이 적혀있는 페이지</li>
            <li>다크모드 지원</li>
            <li>반응형 지원</li>

            <p>혼자서 모든 과정을 참여 및 제작하였습니다.</p>
            <li>
              웹브라우저의 테마 값을 읽어와 자동으로 라이트 모드 및 다크모드
              적용
            </li>
            <li>웹페이지 너비에 따른 반응형 컴포넌트 제작</li>
            <li>mdx를 이용하여 마크다운 형식으로 글 작성</li>
            <li>React로 제작을 시작하였고 Next JS로 변경</li>
            <li>dependabot 적용으로 패키지 최신화 유지</li>
          </HistoryBlock>
          <HistoryBlock
            title="워드, 엑셀 웹 뷰어"
            subTitle="2020-08 ~ 2020-12"
            projectType="company"
            companyName="대한민국 국방부"
            skill="React, Typescript, React-tables"
          >
            <p>
              워드와 엑셀을 웹에 올려 웹 내에서 특정 라인 및 셀 강조 표시 및
              커멘트 첨부 기능이 있는 웹페이지 제작 프로젝트입니다.
            </p>
            <li>프로젝트 세부내용은 기밀 사항</li>

            <p>
              프로젝트의 요구 사항 정리, 설계, 디자인, 개발, 유지보수 등 전
              과정에 참여 및 주도하였습니다.
            </p>
            <li>
              프론트엔드 파트를 담당하여 로그인 페이지부터 메인 페이지, 뷰어
              페이지 등 모든 페이지를 제작
            </li>
            <li>
              이전 프로젝트에서 사용하였던 Ant design과 같이 라이브러리 대신에
              직접 컴포넌트를 제작하여 사용
            </li>
            <li>
              Atomic 디자인을 적용하여 atoms, molecules, organisms, tempaltes
              폴더로 컴포넌트를 나눠 컴포넌트 재활용을 최대한 적용
            </li>
            <li>
              읽어온 워드나 엑셀과 같은 파일을 파싱하여 사용자에게 알맞게
              보여주기 위해 React-Table 컴포넌트 사용
            </li>
            <li>
              워드의 특정 라인이나 엑셀의 특정 셀을 선택하였을 때 강조 표시하기
              및 커멘트 달기 등의 팝오버 창을 띄우고 기능 제작
            </li>
            <li>
              워드의 특정 라인이나 엑셀의 특정 셀의 강조 표시와 커멘트 달기
              기능을 제작
            </li>

            <p>
              프로젝트 마감 기한이 짧아 매일 야근 및 토요일 근무를 하면서 기한
              안에 만족스러운 결과물을 만들었습니다.
            </p>
          </HistoryBlock>
          <HistoryBlock
            title="대시보드 페이지"
            subTitle="2019-06 ~ 2019-09"
            projectType="company"
            companyName="대한민국 국방부"
            skill="React.Js, Ant-design"
          >
            <p>
              국방부 망 내에서 사용 가능한 대시보드 웹페이지 제작
              프로젝트입니다.
            </p>
            <li>프로젝트 세부내용은 기밀 사항</li>

            <p>프로젝트 중간부터 참여하였습니다.</p>
            <li>JS, HTML, CSS 지식 습득 및 프로젝트에서 발생한 오류를 수정</li>
            <li>
              React를 배우면서 프로젝트를 병행하였고 테이블 컴포넌트가 사용된
              페이지의 성능 개선 및 정렬 기능 추가
            </li>
            <li>
              Ant Design 라이브러리를 활용하여 컴포넌트를 사용했고 제작하는
              페이지의 디자인에 맞게 컴포넌트를 개조하여 적용
            </li>
            <li>
              Redux, React-router와 같은 핵심 라이브러리를 사용하여 페이지를
              제작
            </li>
          </HistoryBlock>
          <h2>경력</h2>
          <HistoryBlock title="볼트마이크로" subTitle="2022-01 ~ ">
            <p>
              앱 내의 웹뷰에서 사용될 각종 종목의 스코어보드 및 타이머 제작, B2B
              대시보드 페이지 제작
            </p>
          </HistoryBlock>
          <HistoryBlock title="대한민국 국방부" subTitle="2019-05 ~ 2020-12">
            <p>
              국방부 내부망에서 사용하는 자산 관리 페이지 제작 및 상황 분석
              페이지 기획, 디자인, 제작
            </p>
            <a
              href="https://drive.google.com/file/d/16fqD52QfKeZN4-QQokJx-mFzAiulpEZu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              추천서 보기
            </a>
          </HistoryBlock>
          <h2>수상 및 기타</h2>
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
          <h2>스킬 셋</h2>
          <SideListLayout>
            <SideList
              title="4단계"
              list={['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS']}
            />
            <SideList
              title="3단계"
              list={[
                'C',
                'C++',
                'Firebase',
                'Git',
                'Github',
                'GitLab',
                'Ubuntu',
                'Mac',
                'Bash',
              ]}
            />
            <SideList
              title="2단계"
              list={[
                'React Native',
                'Java',
                'Python',
                'GraphQL',
                'Figma',
                'GCP',
                'AWS',
                'Confluence',
                'JIRA',
              ]}
            />
            <SideList title="1단계" list={['UML']} />
          </SideListLayout>
          <SideListLayout>
            <SideList
              title="외국어"
              list={['한국어-원어민', '영어-일상회화']}
            />
            <SideList
              title="전공 과목"
              list={[
                'Algorithms',
                'Architecture',
                'Artificial Intelligence',
                'Calculus',
                'Compilers',
                'Computer',
                'Computer Graphics',
                'Computer Networks',
                'Computer Security',
                'Data Structures',
                'Database Systems',
                'Digital Logic',
                'Discrete Mathematics',
                'Linear Algebra',
                'Microprocessors',
                'Operating Systems',
                'Software Engineering',
                'Software Studio',
                'Statistics',
                'System Programming',
              ]}
            />
          </SideListLayout>
        </div>
      </AboutContentLayout>
    </article>
  </Layout>
);

export default About;
