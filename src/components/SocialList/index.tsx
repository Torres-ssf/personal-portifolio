import React from 'react';

import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';
import github from '../../assets/icons/github.svg';

import { Container } from './styles';

const SocialList: React.FC = () => {
  return (
    <Container>
      <h3>Let&apos;s connect</h3>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/torres-ssf/"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/torres_ssf"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Torres-ssf"
          >
            <img src={github} alt="github" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default SocialList;
