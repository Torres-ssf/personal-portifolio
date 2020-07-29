import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Navbar,
  Logo,
  SectionList,
  SocialList,
  SocialIcon,
  Drawer,
} from './styles';

import linkedinLogo from '../../assets/icons/linkedin.svg';
import twitterLogo from '../../assets/icons/twitter.svg';
import githubLogo from '../../assets/icons/github.svg';
import instagramLogo from '../../assets/icons/instagram.svg';

interface HeaderProps {
  drawerOpened: boolean;
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ drawerOpened, toggleDrawer }) => {
  return (
    <Container drawerOpened={drawerOpened}>
      <Navbar>
        <Logo>Sérgio Torres</Logo>
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
        <SocialList>
          <li>
            <a
              href="https://www.linkedin.com/in/torres-ssf/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon src={linkedinLogo} alt="linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/torres_ssf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon src={twitterLogo} alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Torres-ssf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon src={githubLogo} alt="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/torres.ssf/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon src={instagramLogo} alt="instagram" />
            </a>
          </li>
        </SocialList>
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
