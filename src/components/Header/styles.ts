import styled, { css } from 'styled-components';

import sandwichIcon from '../../assets/bar_icon.svg';

interface HeaderProps {
  drawerOpened: boolean;
}

export const Navbar = styled.nav`
  height: 100%;
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  transition: 0.5s;
`;

export const Logo = styled.a`
  color: white;
  font-family: 'Satisfy', cursive;
  font-size: 2.2rem;
  letter-spacing: 3px;
`;

export const SectionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 10px;

    a {
      color: white;
      font-family: 'Big Shoulders Text', cursive;
      font-size: 1.6rem;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 6px;
  }
`;

export const SocialIcon = styled.img`
  height: 28px;
  width: 28px;
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
  height: 80px;
  width: 100%;
  transition: 0.5s;

  ${Drawer} {
    ${props =>
      props.drawerOpened &&
      css`
        transform: rotate(270deg);
      `}
  }

  @media (max-width: 1040px) {
    height: 110px;

    ${Navbar} {
      align-content: center;
    }

    ${Logo} {
      text-align: center;
      flex-basis: 50%;
      order: 2;
    }

    ${SectionList} {
      flex-basis: 100%;
      order: 1;
    }

    ${SocialList} {
      flex-basis: 50%;
      order: 3;
    }
  }

  @media (max-width: 650px) {
    height: ${props => (props.drawerOpened ? '174px' : '80px')};

    ${Logo} {
      order: 1;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 80px;
      line-height: 80px;
      flex-basis: 100%;
    }

    ${SectionList} {
      order: 2;
      position: absolute;
      top: 80px;
      right: 0;
      left: 0;
      display: ${props => (props.drawerOpened ? 'flex' : 'none')};
    }

    ${SocialList} {
      order: 3;
      position: absolute;
      top: 128px;
      right: 0;
      left: 0;
      display: ${props => (props.drawerOpened ? 'flex' : 'none')};
      flex-basis: 100%;
    }

    ${Drawer} {
      display: block;
    }
  }
`;
