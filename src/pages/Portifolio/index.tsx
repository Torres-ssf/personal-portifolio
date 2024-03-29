import React, { useCallback, useMemo, useState } from 'react';

import resume from '../../assets/resume.pdf';
import Header from '../../components/Header';
import Project from '../../components/Project';
import SkillContainer from '../../components/SkillContainer';
import SocialList from '../../components/SocialList';
import Terminal from '../../components/Terminal';
import projectsData, {
  contactInfo,
  developmentSkills,
  softSkills,
  toolsSkills,
} from '../../data/projects';
import {
  AboutMeContainer,
  AboutSection,
  CodeMessage,
  Container,
  CopyrightParagraph,
  DownloadLink,
  Footer,
  MessageMeContainer,
  NavigationPlaceholder,
  Presentation,
  PresentationContainer,
  ProjectContainer,
  ProjectSection,
  SectionHeader,
  SkillsContainer,
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
        projectName,
        projectDescription,
        liveLink,
        githubLink,
        backgroundUrl,
      } = project;
      return (
        <Project
          key={projectName}
          projectName={projectName}
          projectDescription={projectDescription}
          liveLink={liveLink}
          githubLink={githubLink}
          backgroundUrl={backgroundUrl}
        />
      );
    });
  }, []);

  const { email, github, linkedin, angelList } = useMemo(() => {
    return contactInfo;
  }, []);

  return (
    <Container>
      <Header drawerOpened={drawerOpened} toggleDrawer={handleDrawerOpen} />
      <PresentationContainer id="home">
        <Presentation>
          <h1>
            I&apos;m Sérgio
            <br />
            Glad to meet you!
          </h1>
          <p>
            Software Engineer with a love for clean code and fixing broken
            things. Fluent in multiple languages, frameworks, and technologies,
            and capable of ramping up quickly and efficiently.
          </p>
          <div>
            <h3>Let&apos;s connect</h3>
            <SocialList
              github={github}
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
          </div>
        </Presentation>
      </PresentationContainer>
      <Terminal
        email={email}
        github={github}
        angelList={angelList}
        linkedin={linkedin}
      />
      <ProjectSection>
        <NavigationPlaceholder id="projects" />
        <SectionHeader>Projects</SectionHeader>
        <ProjectContainer>{projects}</ProjectContainer>
      </ProjectSection>
      <AboutSection>
        <AboutMeContainer>
          <NavigationPlaceholder id="about" />
          <SectionHeader>About Me</SectionHeader>
          <p>
            I am a simple guy who loves to spend time fixing broken things. When
            I&apos;m not coding, it&apos;s very likely that I am outside hiking
            trails or playing at my Ps4. My passions include, programming,
            coffee, visiting new places, hiking, cooking, cats, and spending
            time with family and friends. I&apos;m also passionate about
            beautifully designing and coding great user experiences.
          </p>
          <div>
            <h3>Let&apos;s connect</h3>
            <SocialList
              github={github}
              angelList={angelList}
              linkedin={linkedin}
              iconSize={28}
            />
            <DownloadLink
              target="_blank"
              rel="noopener noreferrer"
              download="myResume"
              href={resume}
            >
              Get My Resume
            </DownloadLink>
          </div>
        </AboutMeContainer>
        <SkillsContainer>
          <NavigationPlaceholder id="skills" />
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
