import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Circle, Console } from './styles';

interface TerminalProps {
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
}

const Terminal: React.FC<TerminalProps> = ({
  email,
  linkedin,
  github,
  twitter,
}) => {
  const skills = useMemo(
    () =>
      "['React', 'React Native', 'Typescript', 'Node','Styled Components', 'HTML5', 'CSS3']",
    [],
  );

  const current = useMemo(
    () => (
      <>
        &quot;Technical Support Engineer and Practice Session Coordinator at
        <a
          className="ter-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.microverse.org/"
        >
          &nbsp;Microverse
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
        <a target="_blank" rel="noopener noreferrer" href={mailTo}>
          Email
        </a>
        &quot;, &quot;
        <a target="_blank" rel="noopener noreferrer" href={linkedin}>
          Linkedin
        </a>
        &quot;, &quot;
        <a target="_blank" rel="noopener noreferrer" href={github}>
          Github
        </a>
        &quot;, &quot;
        <a target="_blank" rel="noopener noreferrer" href={twitter}>
          Twitter
        </a>
        &quot; ]
      </>
    );
  }, [email, linkedin, github, twitter]);

  return (
    <Container>
      <Header>
        <Circle />
        <Circle />
        <Circle />
      </Header>
      <Console>
        <p>dev.name</p>
        <p>&quot;Sérgio Torres&quot;</p>
        <p>dev.skills</p>
        <p>{skills}</p>
        <p>dev.current</p>
        <p>{current}</p>
        <p>dev.location</p>
        <p>&quot;Brazil&quot;</p>
        <p>dev.contact</p>
        <p>{contact}</p>
      </Console>
    </Container>
  );
};

Terminal.propTypes = {
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Terminal;