import styled from 'styled-components';

export const Container = styled.main`
  background-color: white;
`;

export const PresentationContainer = styled.section`
  color: #666;
  width: 100%;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  margin: 0 auto;
  max-width: 920px;

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
  text-align: center;
  margin: 50px auto 120px;
  max-width: 1300px;

  @media (max-width: 1000px) {
    ${ProjectContainer} {
      margin-bottom: 160px;
    }
  }
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

export const Footer = styled.footer`
  background-color: #483d3f;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;

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
    ${MessageMeContainer} {
      width: calc(100% - 80px);
      height: 340px;
      top: -170px;
    }
  }

  @media (max-width: 700px) {
    ${MessageMeContainer} {
      width: calc(100% - 60px);
      height: 360px;
      top: -180px;
    }
  }

  @media (max-width: 550px) {
    ${MessageMeContainer} {
      border-radius: 0;
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    ${MessageMeContainer} {
      height: 400px;
      top: -200px;
    }
  }
`;
