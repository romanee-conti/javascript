import React from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <nav className={styles.nav}>
        <NavBar />
    </nav>
  )
}

export default App