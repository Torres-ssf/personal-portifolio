import React, { useMemo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Circle,
  Console,
  InputCode,
  OutputCode,
  TopLayer,
} from './styles';

interface TerminalProps {
  email: string;
  linkedin: string;
  github: string;
  angelList: string;
  twitter: string;
}

const Terminal: React.FC<TerminalProps> = ({
  email,
  linkedin,
  github,
  angelList,
}) => {
  const [startBlink, setStartBlink] = useState(false);

  const [animationState, setAnimationState] = useState([
    { animate: false, animationEnded: false },
    { animate: false, animationEnded: false },
    { animate: false, animationEnded: false },
    { animate: false, animationEnded: false },
    { animate: false, animationEnded: false },
  ]);

  const [inputCodeVisible, setInputCodeVisible] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setStartBlink(true);
  }, []);

  const handleAnimationEnd = useCallback(
    target => {
      const id = parseInt(target.id, 10);
      if (startBlink) {
        setAnimationState(oldState => [
          { animate: true, animationEnded: false },
          ...oldState.slice(id + 1, oldState.length),
        ]);

        setStartBlink(false);
      } else {
        setAnimationState(oldState => [
          ...oldState.slice(0, id),
          { animate: false, animationEnded: true },
          { animate: true, animationEnded: false },
          ...oldState.slice(id + 2, oldState.length),
        ]);

        setInputCodeVisible(oldState => [
          ...oldState.slice(0, id + 1),
          true,
          ...oldState.slice(id + 2, oldState.length),
        ]);
      }
    },
    [startBlink],
  );

  const skills = useMemo(
    () =>
      "['NodeJS', 'Typescript', 'Express', 'Postgres', 'MongoDB', 'React', 'React Native', 'Docker', 'Styled Components', 'Jest', 'Mocha', 'TypeORM', 'AWS']",
    [],
  );

  const current = useMemo(
    () => (
      <>
        &quot;Backend Engineer at&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://aluna.social/"
        >
          Aluna.Social
        </a>
        &quot;
      </>
    ),
    [],
  );

  const contact = useMemo(() => {
    const mailTo = `mailto:${email}`;
    return (
      <>
        [ &quot;
        <a target="_blank" rel="noopener noreferrer" href={linkedin}>
          Linkedin
        </a>
        &quot;, &quot;
        <a target="_blank" rel="noopener noreferrer" href={github}>
          Github
        </a>
        &quot;, &quot;
        <a target="_blank" rel="noopener noreferrer" href={angelList}>
          AngelList
        </a>
        &quot;, &quot;
        <a target="_blank" rel="noopener noreferrer" href={mailTo}>
          Email
        </a>
        &quot; ]
      </>
    );
  }, [email, linkedin, github, angelList]);

  return (
    <Container>
      <Header>
        <Circle />
        <Circle />
        <Circle />
      </Header>
      <Console>
        <InputCode visible={inputCodeVisible[0]}>
          <TopLayer
            startBlink={startBlink}
            animate={animationState[0].animate}
            animationEnded={animationState[0].animationEnded}
            animationSteps={8}
            onAnimationEnd={({ target }) => handleAnimationEnd(target)}
            id="0"
          />
          dev.name
        </InputCode>
        <OutputCode visible={animationState[0].animationEnded}>
          &quot;Sérgio Torres&quot;
        </OutputCode>
        <InputCode visible={inputCodeVisible[1]}>
          <TopLayer
            animate={animationState[1].animate}
            animationEnded={animationState[1].animationEnded}
            animationSteps={10}
            onAnimationEnd={({ target }) => handleAnimationEnd(target)}
            id="1"
          />
          dev.skills
        </InputCode>
        <OutputCode visible={animationState[1].animationEnded}>
          {skills}
        </OutputCode>
        <InputCode visible={inputCodeVisible[2]}>
          <TopLayer
            animate={animationState[2].animate}
            animationEnded={animationState[2].animationEnded}
            animationSteps={11}
            onAnimationEnd={({ target }) => handleAnimationEnd(target)}
            id="2"
          />
          dev.current
        </InputCode>
        <OutputCode visible={animationState[2].animationEnded}>
          {current}
        </OutputCode>
        <InputCode visible={inputCodeVisible[3]}>
          <TopLayer
            animate={animationState[3].animate}
            animationEnded={animationState[3].animationEnded}
            animationSteps={12}
            onAnimationEnd={({ target }) => handleAnimationEnd(target)}
            id="3"
          />
          dev.location
        </InputCode>
        <OutputCode visible={animationState[3].animationEnded}>
          &quot;Brazil&quot;
        </OutputCode>
        <InputCode visible={inputCodeVisible[4]}>
          <TopLayer
            animate={animationState[4].animate}
            animationEnded={animationState[4].animationEnded}
            animationSteps={11}
            onAnimationEnd={({ target }) => handleAnimationEnd(target)}
            id="4"
          />
          dev.contact
        </InputCode>
        <OutputCode visible={animationState[4].animationEnded}>
          {contact}
        </OutputCode>
        <InputCode visible={inputCodeVisible[5]}>
          <TopLayer endBlink />
        </InputCode>
      </Console>
    </Container>
  );
};

Terminal.propTypes = {
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  angelList: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Terminal;
