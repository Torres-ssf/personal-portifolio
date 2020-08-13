import React, { useCallback } from 'react';
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
  const handleSectionClick = useCallback(() => {
    if (drawerOpened) {
      toggleDrawer();
    }
  }, [drawerOpened, toggleDrawer]);

  return (
    <Container drawerOpened={drawerOpened}>
      <Navbar>
        <Logo href="/">Sérgio Torres</Logo>
        <SectionList>
          <li>
            <a href="/#projects" onClick={handleSectionClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#about" onClick={handleSectionClick}>
              About
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={handleSectionClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={handleSectionClick}>
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
