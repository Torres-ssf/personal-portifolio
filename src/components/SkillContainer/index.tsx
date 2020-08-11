import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { RiArrowRightSLine } from 'react-icons/ri';

import { Container, ItensList } from './styles';

interface SkillContainerProps {
  title: string;
  opened: boolean;
  containerNum: number;
  skillsList: string[];
  handleSkillButtonClick(arg0: number): void;
}

const SkillContainer: React.FC<SkillContainerProps> = ({
  title,
  opened,
  containerNum,
  skillsList,
  handleSkillButtonClick,
}) => {
  const skills = useMemo(() => {
    return skillsList.map(skill => <li key={skill}>{skill}</li>);
  }, [skillsList]);

  return (
    <Container opened={opened}>
      <header>
        <h4>{title}</h4>
        <button type="button">
          <RiArrowRightSLine
            size={20}
            onClick={() => handleSkillButtonClick(containerNum)}
          />
        </button>
      </header>
      <ItensList>{skills}</ItensList>
    </Container>
  );
};

SkillContainer.propTypes = {
  title: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  containerNum: PropTypes.number.isRequired,
  skillsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleSkillButtonClick: PropTypes.func.isRequired,
};

export default SkillContainer;
