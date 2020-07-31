import styled, { css } from 'styled-components';

import sandwichIcon from '../../assets/bar_icon.svg';

interface HeaderProps {
  drawerOpened: boolean;
}

export const Navbar = styled.nav`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  transition: 0.5s;
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

export const Drawer = styled.button`
  background: url(${sandwichIcon});
  border: none;
  display: none;
  position: absolute;
  height: 28px;
  width: 28px;
  top: 26px;
  right: 26px;
  transition: transform 0.4s;
`;

export const Container = styled.header<HeaderProps>`
  background-color: #483d3f;
  height: 72px;
  width: 100%;
  transition: 0.5s;

  ${Drawer} {
    ${props =>
      props.drawerOpened &&
      css`
        transform: rotate(270deg);
      `}
  }
`;
