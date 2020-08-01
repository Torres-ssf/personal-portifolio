import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Description, Dot } from './style';

import screenshot from '../../assets/screen.png';

interface ProjectProps {
  title: string;
  info: string[];
  stacksArray: string[];
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  info,
  stacksArray,
  description,
}) => {
  const techs = useMemo(() => {
    return stacksArray.map(stack => {
      return <li key={stack}>{stack}</li>;
    });
  }, [stacksArray]);

  return (
    <Container>
      <img src={screenshot} alt="screenshot" />
      <Description>
        <h1>{title}</h1>
        <div>
          <span>{info[0]}</span>
          <Dot />
          <span>{info[1]}</span>
        </div>
        <p>{description}</p>
        <ul>{techs}</ul>
        <button type="button">See Project</button>
      </Description>
    </Container>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  stacksArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
