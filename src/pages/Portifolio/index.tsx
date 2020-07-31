import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';
import SocialList from '../../components/SocialList';

import { Container, PresentationContainer, Presentation } from './styles';

const Portifolio: React.FC = () => {
  const [drawerOpened, serDrawerOpened] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    serDrawerOpened(oldState => !oldState);
  }, []);

  return (
    <Container>
      <Header drawerOpened={drawerOpened} toggleDrawer={handleDrawerOpen} />
      <PresentationContainer>
        <Presentation>
          <h1>
            I&apos;m Sérgio
            <br />
            Glad to meet you!
          </h1>
          <p>
            I&apos;m a full stack developer passionate about beautifully
            designing and coding great user experiences.
          </p>
          <SocialList />
        </Presentation>
      </PresentationContainer>
    </Container>
  );
};

export default Portifolio;
