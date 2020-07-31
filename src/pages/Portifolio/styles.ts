import styled from 'styled-components';

export const Container = styled.main`
  background-color: #e5e5e5;
`;

export const PresentationContainer = styled.section`
  background-color: #483d3f;
  border-radius: 0 0 0 110px;
  color: white;
  height: 916px;
  width: 100%;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 286px;
  margin: 0 auto;
  max-width: 920px;

  h1 {
    font-size: 4rem;
    line-height: 60px;
    letter-spacing: 0.37px;
  }

  p {
    font-size: 1.4rem;
    line-height: 28px;
    margin-top: 12px;
  }
`;
