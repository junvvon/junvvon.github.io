import Link from 'next/link';
import Github from 'components/atoms/Icons/Github';
import Linkedin from 'components/atoms/Icons/Linkedin';
import Layout from 'components/templates/Layout';

const About = () => {
  return (
    <Layout customMeta={{ title: 'About - Junwon Park' }}>
      <div>
        <h1>소개</h1>
        <p>
          I&rsquo;m <strong>Junwon Park(박준원)</strong>, a{' '}
          <strong>junior software engineer</strong> located in Republic of
          Korea.
        </p>
        <p>I am working on several projects to become a front-end developer.</p>
        <p>
          I often program using <strong>Typescript</strong>,{' '}
          <strong>React</strong>, <strong>Next.JS</strong>,{' '}
          <strong>C/C++(C++17)</strong> and <strong>React-Native</strong>. I am
          currently a college student. I&rsquo;m writing what I learned on this
          blog.
        </p>
        <h3 id="social-links">Social Links</h3>
        <ul>
          <li>
            <Link href="https://github.com/Julrum" passHref>
              <a>
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/julrum/" passHref>
              <a>
                <Linkedin />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
