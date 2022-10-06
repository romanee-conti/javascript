import React from 'react';
import styles from './NavBar.module.scss';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <a href="">Home</a>
      </Link>

      <Link to="login">
        <a href="">Login</a>
      </Link>

      <Link to="favourites">
        <a href="">Favourites</a>
      </Link>
    </nav>
  );
};

export default NavBar