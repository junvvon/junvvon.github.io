import React from 'react';
// import qs from 'qs';
import { AboutProps } from './About.type';

// eslint-disable-next-line
const About: React.FC<AboutProps> = ({ location }) => {
  // const query = qs.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });
  // const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>
        I&rsquo;m <strong>Junwon Park(박준원)</strong>, a{' '}
        <strong>junior software engineer</strong> located in Republic of Korea.
      </p>
      <p>I use julrum as my primary username in various sites.</p>
      <p>
        I often program using <strong>C/C++(C++17)</strong>,{' '}
        <strong>Python</strong> and <strong>React</strong>. I am currently a
        college student. I&rsquo;m writing what I learned on this blog.
      </p>
      <h3 id="social-links">Social Links</h3>
      <ul>
        <li>
          <a href="https://github.com/Julrum">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/julrum/">Linkedin</a>
        </li>
      </ul>

      {/* {showDetail && <p>deatil 값을 true로 설정하셨군요!</p>} */}
      <div>추후에 내용 추가에 예정</div>
    </div>
  );
};

export default About;
