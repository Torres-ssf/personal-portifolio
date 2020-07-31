import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portifolio from '../pages/Portifolio';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Portifolio} />
  </Switch>
);

export default Routes;
