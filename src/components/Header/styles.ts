import styled, { css, keyframes } from 'styled-components';

interface HeaderProps {
  drawerOpened: boolean;
}

const popIn = keyframes`
  from {
    visibility: visible;
    opacity: 0;
  }

  to {
    visibility: visible;
    opacity: 1;
  }
`;

const popOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  99% {
    opacity: 0;
  }

  100% {
    visibility: hidden;
  }
`;

export const Navbar = styled.nav`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  color: #d5fff3;
  font-family: 'Satisfy', cursive;
  font-size: 1.8rem;
  letter-spacing: 3px;
`;

export const SectionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 10px;

    a {
      color: #d5fff3;
      font-family: 'Big Shoulders Text', cursive;
      font-size: 1.4rem;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
`;

export const DrawerContainer = styled.button`
  border: none;
  display: none;
  position: absolute;
  background: transparent;
  top: 11px;
  right: 11px;
  height: 50px;
  width: 50px;
  z-index: 2;
`;

export const Drawer = styled.span`
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 4px;
  width: 32px;
  transition: 0.5s;

  &::before,
  &::after {
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    content: '';
    height: 4px;
    width: 32px;
    left: calc(50% - 16px);
    position: absolute;
    transition: 0.5s;
  }

  &::before {
    top: calc(50% - 12px);
  }

  &::after {
    top: calc(50% + 8px);
  }
`;

export const OverlayContainer = styled.span`
  background: #6070ff;
  backdrop-filter: blur(10px);
  mix-blend-mode: multiply;
  display: block;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const Container = styled.header<HeaderProps>`
  background-color: #483d3f;
  height: 72px;
  width: 100%;

  @media (max-width: 750px) {
    ${Navbar} {
      justify-content: center;
      position: relative;
      padding: 0 22px;
    }

    ${Logo} {
      font-size: 2.2rem;
    }

    ${SectionList} {
      ${props =>
        props.drawerOpened
          ? css`
              animation: ${popIn} 400ms linear forwards;
            `
          : css`
              animation: ${popOut} 400ms linear backwards;
            `};
      visibility: hidden;
      display: block;
      position: absolute;
      width: 200px;
      top: 20px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;

      li {
        margin: 30px 0 0 20px;

        a {
          color: white;
          font-size: 2rem;
        }
      }
    }

    ${OverlayContainer} {
      ${props => {
        return props.drawerOpened
          ? css`
              animation: ${popIn} 500ms linear forwards;
            `
          : css`
              animation: ${popOut} 500ms linear backwards;
            `;
      }}
    }

    ${DrawerContainer} {
      display: block;
    }

    ${Drawer} {
      ${props =>
        props.drawerOpened &&
        css`
          background: transparent;
          &::before {
            transform: rotate(45deg);
            top: 0;
          }
          &::after {
            transform: rotate(135deg);
            top: 0;
          }
        `}
    }
  }

  @media (max-width: 430px) {
    ${Navbar} {
      justify-content: start;
    }
  }
`;
