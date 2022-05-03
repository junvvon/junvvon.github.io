import Layout from 'components/templates/Layout';
import Title from 'components/molecules/Title';
import SideList from 'components/atoms/SideList';
import { Content, SideContent } from './about.style';

const About = () => {
  return (
    <Layout customMeta={{ title: 'About - Junwon Park' }}>
      <article>
        <Title
          title="새로운 것을 좋아하는 개발자 박준원입니다."
          githubLink="https://github.com/Julrum"
          linkedinLink="https://www.linkedin.com/in/julrum/"
          mailLink="mailto:junwon@duck.com"
        />
        <Content>
          <div>
            <p>
              안녕하세요, 저는 볼트 마이크로에서 일하고 있는 Frontend Developer
              입니다.
            </p>
            <h2> 저는 아래를 추구하고 좋아합니다.</h2>
            <p>
              새로운 기술에 관심을 보이며 기회가 될때마다 프로젝트 진행을 통해
              학습하기를 즐겨 합니다.(최근에는 Next.JS와 Typescript를 이용한
              프로젝트를 진행하고 있습니다.)
            </p>
            <p>
              프로젝트 시작 전 컨벤션을 설정하여 일관성을 유지하는 것을 좋아하며
              같은 기능을 하는 코드도 알아보기 쉽게 간단한 코드로 작성하려고
              노력하고 있습니다.
            </p>
            <p>
              과거에 작성한 코드들에 그동안 배운 지식들을 적용해보거나
              리팩터링하고 개선하고 코드들을 분리하여 효율적으로 구현하는 것을
              즐겨합니다.
            </p>
            <p>
              혼자서의 개발보다는 동료들과의 끊임없는 커뮤니케이션을 통해
              협업하는 것을 더 선호합니다.
            </p>
            <h2>학력</h2>
            <h2>프로젝트</h2>
            <h2>경력</h2>
            <h2>수상</h2>
            <h2>자격증</h2>
          </div>
          <SideContent>
            <h2>스킬 셋</h2>
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
          </SideContent>
        </Content>
      </article>
    </Layout>
  );
};

export default About;
