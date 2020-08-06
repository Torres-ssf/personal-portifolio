import styled, { css, keyframes } from 'styled-components';

interface TopLayerProps {
  start?: boolean;
  animate?: boolean;
  animationSteps: number;
  animationEnded?: boolean;
}

const blink = keyframes`
  0%, 49% {
    border-color: transparent;
  }

  50% {
    border-color: white;
  }
`;

const moving = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.span`
  display: block;
  margin: 40px auto 0;
  max-width: 920px;
`;

export const Header = styled.span`
  background-color: #8d8d92;
  border-radius: 4px 4px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 100%;
`;

export const Circle = styled.span`
  border-radius: 50%;
  margin: 0 2px;
  height: 14px;
  width: 14px;

  &:first-of-type {
    background-color: #bf1363;
    margin-left: 6px;
  }

  &:nth-of-type(2) {
    background-color: #ffba08;
  }

  &:nth-of-type(3) {
    background-color: #81c14b;
  }
`;

export const Console = styled.span`
  background-color: #05668d;
  border-radius: 0 0 4px 4px;
  border-left: 4px solid #8d8d92;
  border-right: 4px solid #8d8d92;
  border-bottom: 6px solid #8d8d92;
  display: block;
  padding: 20px;
  height: calc(100% - 30px);
  font-family: 'Source Code Pro', monospace;
  overflow: hidden;
  width: 100%;

  a {
    color: #33a1fd;
  }

  p {
    margin-bottom: 22px;
    display: block;
    align-items: center;
    font-size: 1em;
    letter-spacing: normal;
  }

  p:nth-child(odd) {
    color: white;
    position: relative;
    height: 30px;
    width: fit-content;
    /* opacity: 0; */

    &::before {
      content: '> ';
      /* margin-right: 8px; */
    }
  }

  p:nth-child(even) {
    color: #ffba08;
    /* opacity: 0; */
  }
`;

export const TopLayer = styled.span<TopLayerProps>`
${props =>
  props.start &&
  css`
    animation: ${blink} 2 forwards linear;
  `}

  /* ${props =>
    props.animate &&
    css`
      animation: ${moving} 800ms forwards steps(${props.animationSteps});
    `}

  ${props =>
    props.animationEnded &&
    css`
      display: none;
    `} */
  border-left: 9px solid white;
  background-color: #05668d;
  display: block;
  position: absolute;
  width: calc(100% - 18px);
  height: 22px;
  top: 0;
  left: 18px;
  bottom: 0;
`;
