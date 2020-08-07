import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { Container } from './styles';

interface SocialListProps {
  iconColor?: string;
  iconSize?: number;
}

const SocialList: React.FC<SocialListProps> = ({
  iconColor = '#666',
  iconSize = 24,
}) => {
  return (
    <Container iconColor={iconColor}>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/torres-ssf/"
        >
          <FaLinkedin size={iconSize} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/torres_ssf"
        >
          <FaTwitter size={iconSize} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Torres-ssf"
        >
          <FaGithub size={iconSize} />
        </a>
      </li>
    </Container>
  );
};

SocialList.propTypes = {
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
};

export default SocialList;
