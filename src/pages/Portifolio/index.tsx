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
      <Footer />
    </Container>
  );
};

export default Portifolio;
