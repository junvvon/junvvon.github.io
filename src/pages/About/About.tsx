import React from 'react';

const About: React.FC = () => {
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
    </div>
  );
};

export default About;
