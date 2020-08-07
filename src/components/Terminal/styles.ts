import styled, { css, keyframes } from 'styled-components';

interface TopLayerProps {
  startBlink?: boolean;
  animate?: boolean;
  animationEnded?: boolean;
  animationSteps?: number;
  endBlink?: boolean;
}

interface OutputCodeProps {
  visible: boolean;
}

interface InputCodeProps {
  visible: boolean;
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
  padding: 20px 20px 10px 20px;
  height: calc(100% - 30px);
  font-family: 'Source Code Pro', monospace;
  overflow: hidden;
  width: 100%;

  a {
    color: #33a1fd;
  }
`;

export const InputCode = styled.p<InputCodeProps>`
  ${props =>
    !props.visible &&
    css`
      visibility: hidden;
    `}
  margin-bottom: 22px;
  align-items: center;
  display: block;
  font-size: 1em;
  letter-spacing: normal;
  color: white;
  position: relative;
  height: 30px;
  width: fit-content;

  &::before {
    content: '> ';
  }
`;

export const OutputCode = styled.p<OutputCodeProps>`
  ${props =>
    !props.visible &&
    css`
      visibility: hidden;
    `}

  margin-bottom: 22px;
  align-items: center;
  display: block;
  font-size: 1em;
  letter-spacing: normal;
  color: #ffba08;
`;

export const TopLayer = styled.span<TopLayerProps>`
  ${props =>
    props.startBlink &&
    css`
      animation: ${blink} 1s forwards linear 2;
    `}

  ${props =>
    props.endBlink &&
    css`
      animation: ${blink} 1s forwards linear infinite;
    `}

  ${props =>
    props.animate &&
    css`
      animation: ${moving} 800ms forwards steps(${props.animationSteps});
    `}

  ${props =>
    props.animationEnded &&
    css`
      visibility: hidden;
    `}

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
