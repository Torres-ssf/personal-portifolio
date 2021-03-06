import React from 'react';
import PropTypes from 'prop-types';

import { FaGithub } from 'react-icons/fa';

import {
  Container,
  Header,
  ScreenshotContainer,
  DescriptionContainer,
} from './style';

interface ProjectProps {
  projectName: string;
  projectDescription: string;
  liveLink?: string;
  githubLink: string;
  backgroundUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  projectName,
  projectDescription,
  liveLink,
  githubLink,
  backgroundUrl,
}) => {
  return (
    <Container>
      <Header>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
          Source code
        </a>
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live preview
          </a>
        )}
      </Header>
      <ScreenshotContainer>
        <img src={backgroundUrl} alt={`${projectName} screenshot`} />
        <DescriptionContainer>
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
        </DescriptionContainer>
      </ScreenshotContainer>
    </Container>
  );
};

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string.isRequired,
};

export default Project;
