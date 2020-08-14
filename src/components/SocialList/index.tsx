import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaTwitter, FaLinkedin, FaAngellist } from 'react-icons/fa';

import { Container } from './styles';

interface SocialListProps {
  iconColor?: string;
  iconSize?: number;
  linkedin: string;
  github: string;
  angelList: string;
  twitter: string;
}

const SocialList: React.FC<SocialListProps> = ({
  iconColor = '#666',
  iconSize = 24,
  linkedin,
  github,
  angelList,
  twitter,
}) => {
  return (
    <Container iconColor={iconColor}>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={linkedin}>
          <FaLinkedin size={iconSize} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={angelList}>
          <FaAngellist size={iconSize} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={github}>
          <FaGithub size={iconSize} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={twitter}>
          <FaTwitter size={iconSize} />
        </a>
      </li>
    </Container>
  );
};

SocialList.propTypes = {
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  linkedin: PropTypes.string.isRequired,
  angelList: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default SocialList;
