import React from 'react';
import { Router } from '@reach/router';

import NotFound from '../../components/NotFound'

import Home from '../Home';
import Login from '../Login';
import Favourites from '../Favourites';

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="login" />
      <Favourites path="favourites" />
      <NotFound default />
    </Router>
  )
}

export default Routes