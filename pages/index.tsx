import type { GetStaticProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { getApps, initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite';

import OutLink from 'components/atoms/OutLink';
import Title from 'components/molecules/Title';
import Layout from 'components/templates/Layout';
import Row from 'components/templates/Row';
import firebaseConfig from 'config/firebaseConfig';
import {
  CertificateProps,
  SkillProps,
  WorkExperienceProps,
  OtherExperienceProps,
} from 'types/about';

const SideList = dynamic(() => import('components/atoms/SideList'));
const Project = dynamic(() => import('components/molecules/Project'));
const SideListLayout = dynamic(
  () => import('components/templates/SideListLayout'),
);

const About = ({
  workExperiences,
  otherExperiences,
  certificate,
  skill,
}: {
  workExperiences: WorkExperienceProps[] | null;
  otherExperiences: OtherExperienceProps[] | null;
  certificate: { certificates: CertificateProps[] };
  skill: { skill: SkillProps[] };
}) => (
  <Layout customMeta={{ title: 'Junwon Park' }}>
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <article>
      <Title
        githubLink="https://github.com/Julrum"
        linkedinLink="https://www.linkedin.com/in/julrum/"
        mailLink="mailto:junwon@duck.com"
        title="새로운 것을 끊임없이 탐구하는 개발자 박준원입니다."
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <p>
            &nbsp;스타트업에서 웹 서비스를 기획/개발/배포/운영하였습니다. 주로
            웹 서비스 개발을 담당하였으며 PO(Product Owner) 역할을 겸하였습니다.
          </p>
          <p>
            &nbsp;코드 컨벤션을 설정하여 일관성을 유지하는 것을 좋아하며 같은
            기능을 하는 코드도 알아보기 쉽게 간단한 코드로 작성하고 있습니다.
            레거시 코드를 리팩터링하고 개선하는 것을 즐겨합니다.
          </p>
          <p>
            &nbsp;혼자서의 개발보다는 동료들과의 끊임없는 커뮤니케이션을 통해
            협업하는 것을 더 선호합니다. 국방부에서 진행한 프로젝트에서도
            동료들과의 계속된 소통으로 서로의 생각을 정리하고 공유하여 제한된
            자원으로 주어진 짧은 기간 안에 성공적으로 프로젝트를 끝마친 경험이
            있습니다.
          </p>
        </div>
        <h2>Work Experience</h2>

        {workExperiences &&
          workExperiences.map((experience, index: number) => (
            <Row
              additional={
                experience.additional && (
                  <OutLink
                    label={experience.additional?.label}
                    link={experience.additional?.link}
                  />
                )
              }
              key={index}
              companyName={experience.companyName}
              role={experience.role}
              dateFrom={experience.dateFrom}
              dateTo={experience.dateTo}
            >
              {experience.project.map((singleProject, index: number) => (
                <Project
                  dateFrom={singleProject.dateFrom}
                  dateTo={singleProject.dateTo}
                  description={singleProject.description}
                  detailLink={singleProject.detailLink}
                  key={index}
                  skill={singleProject.skill}
                  title={singleProject.title}
                >
                  <ul>
                    {singleProject.detail.map((line: string, index: number) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </Project>
              ))}
            </Row>
          ))}

        <h2>Other Experiences</h2>
        {otherExperiences &&
          otherExperiences.map((experience, index) =>
            experience.companyName && experience.dateFrom && experience.role ? (
              <Row
                companyName={experience.companyName}
                dateFrom={experience.dateFrom}
                role={experience.role}
                key={index}
              >
                {experience.project.map((singleProject, index: number) => (
                  <Project
                    dateFrom={singleProject.dateFrom}
                    dateTo={singleProject.dateTo}
                    description={singleProject.description}
                    detailLink={singleProject.detailLink}
                    githubLink={singleProject.gitthuLink}
                    key={index}
                    skill={singleProject.skill}
                    title={singleProject.title}
                  >
                    <ul>
                      {singleProject.detail.map(
                        (line: string, index: number) => (
                          <li key={index}>{line}</li>
                        ),
                      )}
                    </ul>
                  </Project>
                ))}
              </Row>
            ) : (
              <>
                {experience.project.map((singleProject, index: number) => (
                  <Project
                    dateFrom={singleProject.dateFrom}
                    dateTo={singleProject.dateTo}
                    description={singleProject.description}
                    detailLink={singleProject.detailLink}
                    githubLink={singleProject.gitthuLink}
                    key={index}
                    other
                    skill={singleProject.skill}
                    title={singleProject.title}
                  >
                    <ul>
                      {singleProject.detail.map(
                        (line: string, index: number) => (
                          <li key={index}>{line}</li>
                        ),
                      )}
                    </ul>
                  </Project>
                ))}
              </>
            ),
          )}

        <h2>Certificates</h2>
        <ul>
          {certificate &&
            certificate.certificates.map((certificate, index: number) => (
              <li key={index}>
                <OutLink label={certificate.label} link={certificate.link} />
              </li>
            ))}
        </ul>

        <h2>SKILLS</h2>
        <SideListLayout>
          {skill &&
            skill.skill.map((skill, index: number) => (
              <SideList key={index} title={skill.title} list={skill.list} />
            ))}
        </SideListLayout>
      </div>
    </article>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const db = getFirestore();

  const workExperiences = await getDoc(
    doc(db, 'about', 'work_experience'),
  ).then((doc) => doc.data());
  const otherExperiences = await getDoc(
    doc(db, 'about', 'other_experience'),
  ).then((doc) => doc.data());
  const certificate = await getDoc(doc(db, 'about', 'certificates')).then(
    (doc) => doc.data(),
  );
  const skill = await getDoc(doc(db, 'about', 'skills')).then((doc) =>
    doc.data(),
  );

  return {
    props: {
      workExperiences: workExperiences?.work_experience,
      otherExperiences: otherExperiences?.other_experience,
      certificate,
      skill,
    },
  };
};

export default About;
