import React from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';

import Routes from './containers/Routes';

const App = () => {
  return (
    <>
    <section className={styles.nav}>
        <NavBar />
    </section>
    <section className={styles.content}>
        <Routes />
    </section>
    </>
  )
}

export default App