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
