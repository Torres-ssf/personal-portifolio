import styled from 'styled-components';

export const Header = styled.header`
  background-color: black;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  top: -50px;
  left: 12px;
  z-index: 10;
  transition: 500ms;
  padding: 0 12px;

  a {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin-right: 16px;

    &:hover {
      color: white;
      text-decoration: underline;
    }

    & + a::before {
      content: '|';
      margin-right: 12px;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const ScreenshotContainer = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  z-index: 1;

  img {
    max-width: 100%;
    vertical-align: middle;
  }
`;

export const DescriptionContainer = styled.figcaption`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  margin: 0 12px;
  position: absolute;
  bottom: 12px;
  text-align: left;
  padding: 12px;

  h3 {
    font-size: 1.2rem;
  }

  p {
    margin: 0;
  }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 40px);
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: 500ms;
  overflow: hidden;

  &:hover {
    transform: scale(1.041);
  }

  &:hover,
  &:active {
    ${Header} {
      top: 12px;
    }
  }

  @media (max-width: 1000px) {
    &:hover {
      transform: none;
    }
  }

  @media (max-width: 900px) {
    margin: 20px;
    flex-basis: calc(100% - 40px);
  }

  @media (max-width: 500px) {
    margin: 20px 5px;
    flex-basis: calc(100% - 10px);
  }
`;
