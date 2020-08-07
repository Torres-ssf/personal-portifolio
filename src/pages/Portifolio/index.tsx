import React, { useState, useCallback, useMemo } from 'react';

import Header from '../../components/Header';
import SocialList from '../../components/SocialList';
import Project from '../../components/Project';
import Terminal from '../../components/Terminal';

import projectsData, { contactInfo } from '../../data/projects';

import {
  Container,
  PresentationContainer,
  Presentation,
  ProjectSection,
  SectionHeader,
  ProjectContainer,
  Footer,
  MessageMeContainer,
  CodeMessage,
  CopyrightParagraph,
} from './styles';

const Portifolio: React.FC = () => {
  const [drawerOpened, serDrawerOpened] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    serDrawerOpened(oldState => !oldState);
  }, []);

  const projects = useMemo(() => {
    return projectsData.map(project => {
      const {
        id,
        projectName,
        projectDescription,
        projectDetail,
        stacksList,
        liveLink,
        githubLink,
        backgroundUrl,
      } = project;
      return (
        <Project
          key={id}
          id={project.id}
          projectName={projectName}
          projectDescription={projectDescription}
          projectDetail={projectDetail}
          stacksList={stacksList}
          liveLink={liveLink}
          githubLink={githubLink}
          backgroundUrl={backgroundUrl}
        />
      );
    });
  }, []);

  const { email, github, linkedin, twitter } = useMemo(() => {
    return contactInfo;
  }, []);

  return (
    <Container>
      <Header drawerOpened={drawerOpened} toggleDrawer={handleDrawerOpen} />
      <PresentationContainer>
        <Presentation>
          <h1>
            I&apos;m Sérgio
            <br />
            Glad to meet you!
          </h1>
          <p>
            I&apos;m a full stack developer passionate about beautifully
            designing and coding great user experiences.
          </p>
          <h3>Let&apos;s connect</h3>
          <SocialList />
        </Presentation>
      </PresentationContainer>
      <Terminal
        email={email}
        github={github}
        twitter={twitter}
        linkedin={linkedin}
      />
      <ProjectSection>
        <SectionHeader>Projects</SectionHeader>
        <ProjectContainer>{projects}</ProjectContainer>
      </ProjectSection>
      <Footer>
        <MessageMeContainer>
          <h3 className="hello-heading">Say Hello!</h3>
          <p className="hello-paragraph">
            If you have an application you are interested in developing,a
            feature that you need built or a project that needs coding, I&apos;m
            your guy. I&apos;d love to help with it.
          </p>
          <a href="mailto:sergio.uft@gmail.com" className="hello-link">
            Let&apos;s do this
          </a>
        </MessageMeContainer>
        <CodeMessage>while(!(succeed = try()))</CodeMessage>
        <CopyrightParagraph>
          Made by Sergio Torres &copy; 2020
        </CopyrightParagraph>
      </Footer>
    </Container>
  );
};

export default Portifolio;
