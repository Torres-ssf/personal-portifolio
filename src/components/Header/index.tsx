import React from 'react';
import PropTypes from 'prop-types';

import { Container, Navbar, Logo, SectionList, Drawer } from './styles';

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
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#articles">Articles</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </SectionList>

        <Drawer onClick={toggleDrawer} />
      </Navbar>
    </Container>
  );
};

Header.propTypes = {
  drawerOpened: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Header;