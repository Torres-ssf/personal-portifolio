import React, { useState, useCallback, useMemo } from 'react';

import Header from '../../components/Header';
import SocialList from '../../components/SocialList';
import Project from '../../components/Project';

import projectsData from '../../data/projects';

import {
  Container,
  PresentationContainer,
  Presentation,
  ProjectSection,
  SectionHeader,
  ProjectContainer,
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
      <ProjectSection>
        <SectionHeader>Projects</SectionHeader>
        <ProjectContainer>{projects}</ProjectContainer>
      </ProjectSection>
    </Container>
  );
};

export default Portifolio;
