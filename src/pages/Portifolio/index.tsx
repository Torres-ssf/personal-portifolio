import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Portifolio: React.FC = () => {
  const [drawerOpened, serDrawerOpened] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    serDrawerOpened(oldState => !oldState);
  }, []);

  return (
    <Container>
      <Header drawerOpened={drawerOpened} toggleDrawer={handleDrawerOpen} />
    </Container>
  );
};

export default Portifolio;
