import React, { useState, useCallback, useMemo } from 'react';

import Header from '../../components/Header';
import SocialList from '../../components/SocialList';
import Project from '../../components/Project';
import Terminal from '../../components/Terminal';
import SkillContainer from '../../components/SkillContainer';

import resume from '../../assets/resume.pdf';

import projectsData, {
  contactInfo,
  developmentSkills,
  softSkills,
  toolsSkills,
} from '../../data/projects';

import {
  Container,
  PresentationContainer,
  Presentation,
  ProjectSection,
  SectionHeader,
  ProjectContainer,
  AboutSection,
  AboutMeContainer,
  SkillsContainer,
  DownloadLink,
  Footer,
  MessageMeContainer,
  CodeMessage,
  CopyrightParagraph,
} from './styles';

const Portifolio: React.FC = () => {
  const [drawerOpened, serDrawerOpened] = useState(false);
  const [skillContainerOpened, setSkillContainerOpened] = useState(0);

  const handleDrawerOpen = useCallback(() => {
    serDrawerOpened(oldState => !oldState);
  }, []);

  const handleSkillContainerButtonClick = useCallback(
    (containerNum: number) => {
      setSkillContainerOpened(oldState =>
        oldState === containerNum ? 0 : containerNum,
      );
    },
    [],
  );

  const projects = useMemo(() => {
    return projectsData.map(project => {
      const {
        id,
        projectName,
        projectDescription,
        liveLink,
        githubLink,
        backgroundUrl,
      } = project;
      return (
        <Project
          id={id}
          key={id}
          projectName={projectName}
          projectDescription={projectDescription}
          liveLink={liveLink}
          githubLink={githubLink}
          backgroundUrl={backgroundUrl}
        />
      );
    });
  }, []);

  const { email, github, linkedin, angelList, twitter } = useMemo(() => {
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
          <SocialList
            github={github}
            twitter={twitter}
            angelList={angelList}
            linkedin={linkedin}
            iconSize={28}
          />
        </Presentation>
      </PresentationContainer>
      <Terminal
        email={email}
        github={github}
        twitter={twitter}
        angelList={angelList}
        linkedin={linkedin}
      />
      <ProjectSection id="projects">
        <SectionHeader>Projects</SectionHeader>
        <ProjectContainer>{projects}</ProjectContainer>
      </ProjectSection>
      <AboutSection>
        <AboutMeContainer id="about">
          <SectionHeader>About Me</SectionHeader>
          <p>
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding, I&apos;m
            your guy. I&apos;d love to help with it.
          </p>
          <footer>
            <h3>Let&apos;s connect</h3>
            <SocialList
              github={github}
              twitter={twitter}
              angelList={angelList}
              linkedin={linkedin}
              iconSize={28}
            />
            <DownloadLink
              target="_blank"
              rel="noopener noreferrer"
              href={resume}
            >
              Get My Resume
            </DownloadLink>
          </footer>
        </AboutMeContainer>
        <SkillsContainer id="skills">
          <SectionHeader>Skills</SectionHeader>
          <SkillContainer
            title="Development"
            opened={skillContainerOpened === 1}
            containerNum={1}
            skillsList={developmentSkills}
            handleSkillButtonClick={handleSkillContainerButtonClick}
          />
          <SkillContainer
            title="Soft-Skills"
            opened={skillContainerOpened === 2}
            containerNum={2}
            skillsList={softSkills}
            handleSkillButtonClick={handleSkillContainerButtonClick}
          />
          <SkillContainer
            title="Tools & Methods"
            opened={skillContainerOpened === 3}
            containerNum={3}
            skillsList={toolsSkills}
            handleSkillButtonClick={handleSkillContainerButtonClick}
          />
        </SkillsContainer>
      </AboutSection>
      <Footer id="contact">
        <MessageMeContainer>
          <h3>Say Hello!</h3>
          <p>
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding, I&apos;m
            your guy. I&apos;d love to help with it.
          </p>
          <a href="mailto:sergio.uft@gmail.com" style={{ marginTop: '32px' }}>
            Let&apos;s do this
          </a>
        </MessageMeContainer>
        <CodeMessage>while(!(succeed = try()))</CodeMessage>
        <SocialList
          github={github}
          twitter={twitter}
          angelList={angelList}
          linkedin={linkedin}
          iconSize={32}
          iconColor="#fff"
        />
        <CopyrightParagraph>
          Made by Sergio Torres &copy; 2020
        </CopyrightParagraph>
      </Footer>
    </Container>
  );
};

export default Portifolio;
