import styled from 'styled-components';

export const Container = styled.main`
  background-color: white;
`;

export const PresentationContainer = styled.section`
  color: #666;
  width: 100%;
  padding-top: 50px;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  margin: 0 auto;
  max-width: 920px;

  @media (max-width: 550px) {
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    line-height: 60px;
    letter-spacing: 0.37px;
    margin-bottom: 28px;
  }

  p {
    font-size: 1.4rem;
    line-height: 28px;
    margin-bottom: 28px;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 550px) {
      flex-direction: column;
      justify-content: center;
    }

    h3 {
      align-self: unset;
      color: #33a1fd;
      flex-basis: 100%;
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;
      text-transform: uppercase;
      margin: 20px 0;
    }
  }

  @media (max-width: 960px) {
    margin: 0 20px;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 500px) {
    margin: 0 5px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const SectionHeader = styled.h3`
  font-family: 'Big Shoulders Text', cursive;
  font-size: 2.3rem;
  color: #666;
  letter-spacing: 2px;
  margin-bottom: 40px;
  font-weight: 500;
  line-height: 1.2;
`;

export const ProjectSection = styled.section`
  position: relative;
  text-align: center;
  margin: 50px auto;
  max-width: 1300px;
`;

export const NavigationPlaceholder = styled.span`
  position: absolute;
  visibility: hidden;
  top: -100px;
`;

export const MessageMeContainer = styled.div`
  align-items: center;
  background-color: #24668d;
  box-shadow: 0 10px 10px -5px rgb(37, 30, 31);
  border-radius: 10px;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: -160px;
  text-align: center;
  height: 320px;
  width: 1100px;

  h3 {
    font-family: 'Big Shoulders Text', sans-serif;
    font-weight: 500;
    margin: 0;
    font-size: 3rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 32px;
    margin: 0;
  }

  a {
    border: 2px solid white;
    border-radius: 2em;
    color: white;
    font-size: 1.1rem;
    padding: 16px 22px;
    transition: 500ms;

    &:hover {
      color: #24668d;
      background-color: white;
      text-decoration: none;
    }
  }
`;

export const CodeMessage = styled.p`
  margin-top: 60px;
  font-family: 'Source Code Pro', monospace;
  font-size: 2rem;
`;

export const CopyrightParagraph = styled.p`
  bottom: 20px;
  font-size: 0.96rem;
  position: absolute;
`;

export const AboutMeContainer = styled.div`
  position: relative;
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (max-width: 550px) {
    text-align: center;
  }

  p {
    color: #666666;
    font-size: 1.2rem;
    line-height: 24px;
    margin: 0;
  }

  h3 {
    align-self: center;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 550px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 30px;
    }

    h3 {
      align-self: unset;
      color: #33a1fd;
      flex-basis: 100%;
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;
      text-transform: uppercase;
      margin: 20px 0;
    }
  }

  @media (max-width: 500px) {
    margin: 0 5px;
  }
`;

export const SkillsContainer = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 20px;

  h3:first-of-type {
    align-self: center;
  }

  @media (max-width: 500px) {
    margin: 0 5px;
  }
`;

export const AboutSection = styled.section`
  margin: 0 auto 40px;
  max-width: 1300px;
  text-align: center;
  display: flex;

  @media (max-width: 1000px) {
    flex-wrap: wrap;

    ${AboutMeContainer} {
      flex-basis: 100%;
    }

    ${SkillsContainer} {
      margin-top: 50px;
    }
  }
`;

export const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #50b0fd;
  border-radius: 5px;
  background-color: #50b0fd;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  color: white;
  font-size: 1rem;
  margin-left: auto;
  height: 40px;
  text-transform: uppercase;
  width: 200px;
  transition: 250ms;

  &:hover {
    background-color: #fff;
    border-color: #50b0fd;
    color: #50b0fd;
  }

  @media (max-width: 550px) {
    margin: 20px 0 0;
  }
`;

export const Footer = styled.footer`
  margin-top: 250px;
  background-color: #483d3f;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 160px 0 70px;
  width: 100%;

  ul {
    margin-top: 30px;
  }

  @media (max-width: 1250px) {
    ${MessageMeContainer} {
      width: 900px;
    }
  }

  @media (max-width: 1000px) {
    ${MessageMeContainer} {
      width: 700px;
    }
  }

  @media (max-width: 850px) {
    padding-top: 170px;

    ${MessageMeContainer} {
      width: calc(100% - 80px);
      height: 340px;
      top: -170px;
    }
  }

  @media (max-width: 700px) {
    padding-top: 180px;

    ${MessageMeContainer} {
      width: calc(100% - 60px);
      height: 360px;
      top: -180px;
    }

    ${CodeMessage} {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 550px) {
    ${MessageMeContainer} {
      border-radius: 0;
      text-align: center;
      width: 100%;
    }

    ${CodeMessage} {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 450px) {
    padding-top: 200px;

    ${MessageMeContainer} {
      height: 400px;
      top: -200px;
    }

    ${CodeMessage} {
      font-size: 1.3rem;
    }
  }
`;
