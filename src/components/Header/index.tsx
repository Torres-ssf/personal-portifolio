import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Navbar,
  Logo,
  SectionList,
  OverlayContainer,
  DrawerContainer,
  Drawer,
} from './styles';

interface HeaderProps {
  drawerOpened: boolean;
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ drawerOpened, toggleDrawer }) => {
  return (
    <Container drawerOpened={drawerOpened}>
      <Navbar>
        <Logo href="/">Sérgio Torres</Logo>
        <SectionList>
          <li>
            <a href="/#projects" onClick={toggleDrawer}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#about" onClick={toggleDrawer}>
              About
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={toggleDrawer}>
              Skills
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={toggleDrawer}>
              Contact
            </a>
          </li>
        </SectionList>
        <DrawerContainer onClick={toggleDrawer}>
          <Drawer />
        </DrawerContainer>
        <OverlayContainer />
      </Navbar>
    </Container>
  );
};

Header.propTypes = {
  drawerOpened: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Header;
