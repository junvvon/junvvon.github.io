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
  IntroductionProps,
} from 'types/about';

const SideList = dynamic(() => import('components/atoms/SideList'));
const Project = dynamic(() => import('components/molecules/Project'));
const SideListLayout = dynamic(
  () => import('components/templates/SideListLayout'),
);

const About = ({
  introduction,
  workExperiences,
  otherExperiences,
  certificate,
  skill,
}: {
  introduction: IntroductionProps;
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
        githubLink={introduction.githubLink}
        linkedinLink={introduction.linkedinLink}
        mailLink={introduction.mailLink}
        title={introduction.title}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          {introduction.briefing.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <h2>Work Experience</h2>

        {workExperiences &&
          workExperiences.map((experience, index) => (
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
              {experience.project.map((singleProject, index) => (
                <Project key={index} {...singleProject}>
                  <ul>
                    {singleProject.detail.map((line, index) => (
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
                {experience.project.map((singleProject, index) => (
                  <Project key={index} {...singleProject}>
                    <ul>
                      {singleProject.detail.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </Project>
                ))}
              </Row>
            ) : (
              <>
                {experience.project.map((singleProject, index) => (
                  <Project key={index} other {...singleProject}>
                    <ul>
                      {singleProject.detail.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </Project>
                ))}
              </>
            ),
          )}

        <h2>Certificates</h2>
        <ul>
          {certificate &&
            certificate.certificates.map((certificate, index) => (
              <li key={index}>
                <OutLink label={certificate.label} link={certificate.link} />
              </li>
            ))}
        </ul>

        <h2>SKILLS</h2>
        <SideListLayout>
          {skill &&
            skill.skill.map((skill, index) => (
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

  const introduction = await getDoc(doc(db, 'about', 'introduction')).then(
    (doc) => doc.data(),
  );
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
      introduction,
      workExperiences: workExperiences?.work_experience,
      otherExperiences: otherExperiences?.other_experience,
      certificate,
      skill,
    },
  };
};

export default About;
