import React from 'react';

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/torres_ssf"
          >
            <FaTwitter size={24} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Torres-ssf"
          >
            <FaGithub size={24} />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default SocialList;
